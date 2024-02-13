import { Controller, Delete, Get, Post } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { CartItemDto } from './cart-item.model';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('cart-items')
export class CartItemController {
  constructor(private readonly cartItemService: CartItemService) {}

  @Public()
  @Get()
  getCartItems() {
    return this.cartItemService.findAll();
  }

  @Get(':id')
  getCartItemById(id: string) {
    return this.cartItemService.findById(id);
  }

  @Post(':id')
  updateCartItem(id: string, cartItemDto: CartItemDto) {
    return this.cartItemService.update(id, cartItemDto);
  }

  @Delete(':id')
  deleteCartItem(id: string) {
    return this.cartItemService.delete(id);
  }
}
