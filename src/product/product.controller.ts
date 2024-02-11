import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ProductDto } from './product.model';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts() {
    return this.productService.findAll();
  }

  @Get(':id')
  getProductById(id: string) {
    return this.productService.findById(id);
  }

  @Put('create')
  createProduct(@Body() createProductDto: ProductDto) {
    return this.productService.create(createProductDto);
  }

  @Post(':id')
  updateProduct(id: string, @Body() updateProductDto: ProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  deleteProductById(id: string) {
    return this.productService.delete(id);
  }
}
