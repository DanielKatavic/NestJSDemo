import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { CartItemModule } from './cart-item/cart-item.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mateojozipovic:12345Mateo@cluster0.jistbmf.mongodb.net/?retryWrites=true&w=majority',
      { dbName: 'Store' },
    ),
    UserModule,
    AuthModule,
    ProductModule,
    CartItemModule,
    CategoriesModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
