import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShelterModule } from './shelter/shelter.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PetModule } from './pet/pet.module';

@Module({
  
  imports: [ConfigModule.forRoot(),
    // SeverStaticModule.forRoort({
    //   rootPath: join(__dirname,'..','../public'),
    //   serverRoot: '/public',
    // }),
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => ({
      uri: config.get<string>('DB_CONNECTION_STRING'),
    }),
  }), ShelterModule, PetModule,
],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
