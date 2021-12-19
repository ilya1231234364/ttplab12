import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {

    @ApiProperty({ example: "lol-lalka2@gmail.com" })
    readonly email: string

    @ApiProperty({ example: "Max" })
    readonly name: string

    @ApiProperty({ example: "Verstappen" })
    readonly surname: string

    @ApiProperty({ example: "54.312" })
    readonly coordinateX: number;

    @ApiProperty({ example: "45.5433" })
    readonly coordinateY: number;

    @ApiProperty({ example: "https://image.org" })
    readonly urlPhoto: string;

    @ApiProperty({ example: 4 })
    readonly teamId: number;

    @ApiProperty({ example: 4 })
    readonly countWins: number;


    @ApiProperty({ example: 5 })
    readonly id?: number

}