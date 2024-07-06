import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CarDocument = HydratedDocument<Car>;

@Schema()
export class Car {
  @Prop()
  carBrand: string;

  @Prop()
  carModel: string;

  @Prop()
  desc: string;

  @Prop()
  price: string;

  @Prop()
  image: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);
