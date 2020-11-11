import UsersModule from 'src/Users/module'
import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'

import LocalStrategy from './local.strategy'
import AuthResolver from './resolver'
import AuthService from './service'

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, AuthResolver, LocalStrategy],
  exports: [AuthService]
})
export default class AuthModule { }
