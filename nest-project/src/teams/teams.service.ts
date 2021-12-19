import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTeamDto } from './dto/create-team.dto';
import { Team } from './teams.model';

@Injectable()
export class TeamsService {

    constructor(@InjectModel(Team) private teamRepository: typeof Team) { }

    async createTeam(dto: CreateTeamDto) {
        const team = await this.teamRepository.create(dto)
        return team;
    }

    async getAllTeams() {
        const teams = await this.teamRepository.findAll({ include: { all: true } })
        return teams;
    }


    async getTeamByName(name: string) {
        const team = await this.teamRepository.findOne({ where: { name: name } })
        return team;
    }


}
