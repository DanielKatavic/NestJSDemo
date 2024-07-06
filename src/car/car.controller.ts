import { Controller, Get } from '@nestjs/common';
import { CarService } from './car.service';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Public()
  @Get()
  getCartItems() {
    return this.carService.getAll();
  }
}
