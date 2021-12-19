import { ApiProperty } from "@nestjs/swagger"

export class CreateTeamDto {

    @ApiProperty({ example: "Red Bull Racing" })
    readonly name: string

    @ApiProperty({ example: "France" })
    readonly country: string

    @ApiProperty({ example: 5 })
    readonly id?: number
}