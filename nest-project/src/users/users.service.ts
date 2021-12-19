import { All, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { Team } from 'src/teams/teams.model';
import { TeamsService } from 'src/teams/teams.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
        private teamsService: TeamsService) { }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        // const role = await this.roleService.getRoleByValue('user')
        // await user.$set('roles', [role.id])
        return user;
    }

    async getOne(id: number) {
        const user = await this.userRepository.findOne({ where: { id: Number(id) } });
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({ include: Team });
        return users;
    }

    async deleteUser(id: number) {
        const user = await this.userRepository.destroy({ where: { id: id } })
        return user
    }

    async updateUser(dto: CreateUserDto) {
        const user = await this.userRepository.update(dto, { where: { id: dto.id } })
        return user
    }
}

