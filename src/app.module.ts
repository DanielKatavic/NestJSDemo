import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { CartItemModule } from './cart-item/cart-item.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://danielkatavic:12345Daniel@cluster0.jistbmf.mongodb.net/?retryWrites=true&w=majority',
      { dbName: 'Store' },
    ),
    UserModule,
    AuthModule,
    ProductModule,
    CartItemModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
