import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.schema';
import { ProductDto } from './product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async findAll() {
    return this.productModel.find().exec();
  }

  async findById(id: string) {
    return this.productModel.findById(id).exec();
  }

  async delete(id: string) {
    const deletedProduct = this.productModel.findByIdAndDelete(id).exec();
    return deletedProduct;
  }

  async create(createProductDto: ProductDto) {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async update(id: string, createProductDto: ProductDto) {
    return this.productModel.findByIdAndUpdate(id, createProductDto).exec();
  }
}