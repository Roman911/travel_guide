import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from "@nestjs/common"
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { MONGO_DB_KEY } from './config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { TokenModule } from "./token/token.module"
import { PostsModule } from './posts/posts.module'
import { MailModule } from './mail/mail.module'

@Module({
  imports: [
    UsersModule,
    TokenModule,
    MailModule,
    PostsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({ driver: ApolloDriver, autoSchemaFile: 'schema.gql' }),
    MongooseModule.forRoot(`mongodb+srv://Roman:${MONGO_DB_KEY}@cluster0-vogsm.mongodb.net/travel?retryWrites=true&w=majority`),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'uploads') }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }