import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { ProductDto } from './product.model';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Public()
  @Get()
  getProducts(
    @Param('pageSize') pageSize: string,
    @Param('sort') sort: string,
    @Param('category') category?: string,
  ) {
    return this.productService.findAll(pageSize, sort, category);
  }

  @Get(':id')
  getProductById(id: string) {
    return this.productService.findById(id);
  }

  @Get(':category')
  getProductByCategory(category: string) {
    return this.productService.findByCategory(category);
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
