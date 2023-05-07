import { Module } from '@nestjs/common';
import { OpenTelemetryModule } from '@metinseylan/nestjs-opentelemetry';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import { MeterProvider } from '@opentelemetry/sdk-metrics';

@Module({
  imports: [
    OpenTelemetryModule.forRootAsync({
      imports: [],
      useFactory: async () => ({
        serviceName: 'nestjs-opentelemetry',
        metricExporter: new MeterProvider().addMetricReader(
          new PrometheusExporter({
            endpoint: 'metrics',
            port: 9090
          })
        ),
        metricInterval: 2000
      })
    })
  ]
})
export class AppModule {}
