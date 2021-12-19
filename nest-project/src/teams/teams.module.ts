import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Team } from './teams.model';
import { User } from 'src/users/users.model';

@Module({
  providers: [TeamsService],
  controllers: [TeamsController],
  imports: [
    SequelizeModule.forFeature([Team, User])],
  exports: [TeamsService]
})
export class TeamsModule { }
