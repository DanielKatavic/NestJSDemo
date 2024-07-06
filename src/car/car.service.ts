import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Car } from './car.schema';
import { Model } from 'mongoose';

@Injectable()
export class CarService {
  constructor(@InjectModel(Car.name) private readonly carModel: Model<Car>) {}

  async getAll() {
    return this.carModel.find().exec();
  }
}
