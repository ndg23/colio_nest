import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ColioModule } from './colio/colio.module';
import { AuthModule } from './auth/auth.module';
import { RatingModule } from './rating/rating.module';
import { NotificationModule } from './notification/notification.module';
import { MessageModule } from './message/message.module';
import { CarrierModule } from './carrier/carrier.module';
import { ExpeditionModule } from './expedition/expedition.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rating } from './rating/entities/rating.entity';
import { User } from './user/entities/user.entity';

@Module({
  imports: [UserModule, ColioModule, ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +5432,
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [User, Rating,],
        synchronize: true,

      }),

      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }), AuthModule, RatingModule, NotificationModule, MessageModule, CarrierModule, ExpeditionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
