//import { Module, HttpModule, HttpService } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { enviroments } from './environments';
import config from './config';
import { HistoricalConsumptionModule } from './historical-consumption/historicalConsumption.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
    }),
    HistoricalConsumptionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
