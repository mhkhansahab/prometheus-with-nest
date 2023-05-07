import { Injectable } from '@nestjs/common';
const { PrometheusExporter } = require('@opentelemetry/exporter-prometheus');
const { MeterProvider } = require('@opentelemetry/sdk-metrics');
import { Counter } from '@opentelemetry/api';

@Injectable()
export class PromService {
  private readonly options = { port: 9090 };
  private readonly exporter = new PrometheusExporter(this.options);
  private counter:Counter;

  initializeProm() {
    // Creates MeterProvider and installs the exporter as a MetricReader
    const meterProvider = new MeterProvider();
    meterProvider.addMetricReader(this.exporter);
    const meter = meterProvider.getMeter('prometheus');

    // Now, start recording data
    this.counter = meter.createCounter('api-count', {
      description: 'This is api-count description'
    });
    this.counter.add(0,{describe : 'Start of Service'});
    console.log('initializing prometheus service')
  }

  getCount():Counter{
    return this.counter;
  }

}
