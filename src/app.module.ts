import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { CartItemModule } from './cart-item/cart-item.module';

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
