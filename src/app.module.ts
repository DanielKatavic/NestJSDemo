import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CarModule } from './car/car.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mateojozipovic:12345Mateo@cluster0.jistbmf.mongodb.net/?retryWrites=true&w=majority',
      { dbName: 'Store' },
    ),
    UserModule,
    AuthModule,
    CarModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
