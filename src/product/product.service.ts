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

  async findAll(pageSize: string, sort: string, category = 'Odjeca') {
    return await this.productModel
      .find({ category: category })
      .limit(+pageSize)
      .sort(sort)
      .exec();
  }

  async findByCategory(category: string) {
    return this.productModel.findOne({ category: category });
  }

  async findById(id: string) {
    return this.productModel.findById(id).exec();
  }

  async delete(id: string) {
    const deletedProduct = this.productModel.deleteOne({ id: id }).exec();
    return deletedProduct;
  }

  async create(productDto: ProductDto) {
    const createdProduct = new this.productModel(productDto);
    return createdProduct.save();
  }

  async update(id: string, productDto: ProductDto) {
    return this.productModel.findByIdAndUpdate(id, productDto).exec();
  }
}
