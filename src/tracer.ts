'use strict';
const {
  BasicTracerProvider,
  ConsoleSpanExporter,
  SimpleSpanProcessor
} = require('@opentelemetry/tracing');
const { Resource } = require('@opentelemetry/resources');
const {
  SemanticResourceAttributes
} = require('@opentelemetry/semantic-conventions');
const opentelemetry = require('@opentelemetry/sdk-node');
const {
  getNodeAutoInstrumentations
} = require('@opentelemetry/auto-instrumentations-node');

const provider = new BasicTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'Prometheus-Otel'
  })
});

// export spans to console (useful for debugging)
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
provider.register();

const sdk = new opentelemetry.NodeSDK({
  instrumentations: [getNodeAutoInstrumentations()]
});

sdk
  ?.start()
  ?.then(() => {
    console.log('Tracing initialized');
  })
  .catch(error => console.log('Error initializing tracing', error));
process.on('SIGTERM', () => {
  sdk
    ?.shutdown()
    ?.then(() => console.log('Tracing terminated'))
    .catch(error => console.log('Error terminating tracing', error))
    .finally(() => process.exit(0));
});
