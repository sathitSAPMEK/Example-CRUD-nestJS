import { Body, Controller, Get, Post, Param, Put, Delete } from "@nestjs/common";
import { UserService } from "./users.service";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    // @Get()
    // getUsers(){
    //     return 'Hello';
    // }

    @Post()
    inserUser(
        @Body('name') name: string,
        @Body('age') age: number,
        @Body('surname') surname: string,
        @Body('email') email: string,

    ){
        const userId = this.userService.inserUser(name, age, surname, email);
        return{
            id: userId,
        }
    }

    @Get()
    getAllUser(){
        return this.userService.getUsers();
    }

    @Get(':userId')
    getUser(
        @Param('userId') userId: string
    ){
        return this.userService.getUser(userId)
    }

    @Put(':userId')
    updateUser(
        @Param('userId') userId: string,
        @Body('name') name: string,
        @Body('age') age: number,
        @Body('surname') surname: string,
        @Body('email') email: string,
    ){
        return this.userService.updateUser(userId, name, age, surname, email)
    }

    @Delete(':userId')
    deleteUser(
        @Param('userId') userId: string
    ){
        this.userService.deleteUser(userId);
    }
}