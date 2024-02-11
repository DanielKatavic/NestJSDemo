import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CartItem } from './cart-item.schema';
import { Model } from 'mongoose';
import { CartItemDto } from './cart-item.model';

@Injectable()
export class CartItemService {
  constructor(
    @InjectModel(CartItem.name) private readonly cartItemModel: Model<CartItem>,
  ) {}

  async findAll() {
    return this.cartItemModel.find().exec();
  }

  async findById(id: string) {
    return this.cartItemModel.findById(id).exec();
  }

  async delete(id: string) {
    const deletedCartItem = this.cartItemModel.findByIdAndDelete(id).exec();
    return deletedCartItem;
  }

  async update(id: string, cartItemDto: CartItemDto) {
    return this.cartItemModel.findByIdAndUpdate(id, cartItemDto).exec();
  }
}
