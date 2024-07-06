import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from './car.schema';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
