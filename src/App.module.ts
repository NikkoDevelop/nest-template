import { Module } from '@nestjs/common';
import { HealthcheckController } from './HealthcheckController';

const httpControllers = [HealthcheckController];

@Module({
  imports: [],
  controllers: [...httpControllers],
  providers: [],
})
export class AppModule {}
