import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTeamDto } from './dto/create-team.dto';
import { TeamsService } from './teams.service';

@ApiTags('Teams')
@Controller('teams')
export class TeamsController {

    constructor(private teamsService: TeamsService) { }

    @Get()
    getAll() {
        return this.teamsService.getAllTeams();
    }

    @Post()
    createTeam(@Body() teamDto: CreateTeamDto) {
        return this.teamsService.createTeam(teamDto)
    }

    @Get('/:name')
    getByName(@Param('name') name: string) {
        return this.teamsService.getTeamByName(name)
    }

}
