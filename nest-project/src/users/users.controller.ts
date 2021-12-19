import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @ApiOperation({ summary: 'Создать юзера' })
    @ApiResponse({ status: 200, type: User })
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }

    @ApiOperation({ summary: 'Получение юзеров' })
    @ApiResponse({ status: 200, type: [User] })
    @Get()
    getAll() {
        return this.usersService.getAllUsers()
    }

    @ApiOperation({ summary: 'Получение юзера' })
    @ApiResponse({ status: 200, type: [User] })
    @Get('/:id')
    getOne(@Param('id') id: number) {
        return this.usersService.getOne(id)
    }

    @ApiOperation({ summary: 'Удаление юзера' })
    @ApiResponse({ status: 200, type: [User] })
    @Delete('/:id')
    deleteUser(@Param('id') id: number) {
        return this.usersService.deleteUser(id)
    }

    @ApiOperation({ summary: 'Апдейт юзера' })
    @ApiResponse({ status: 200, type: [User] })
    @Patch()
    update(@Body() userDto: CreateUserDto) {
        return this.usersService.updateUser(userDto)
    }
}
