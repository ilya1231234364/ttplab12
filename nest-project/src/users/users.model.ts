import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { Team } from "src/teams/teams.model";

interface UserCreationAttrs {
    email: string;
    name: string;
    surname: string;
    coordinateX: number;
    coordinateY: number;
    urlPhoto: string;
    teamId: number
    countWins: number;
}

@Table({ tableName: "usersTTP" })
export class User extends Model<User, UserCreationAttrs>{

    @ApiProperty({ example: '1', description: "ID" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'lol-lalka2@gmail.ru', description: "user email" })
    @Column({ type: DataType.STRING, unique: false, allowNull: false })
    name: string;

    @ApiProperty({ example: 'Max', description: "User Name" })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({ example: 'Verstappen', description: "User surname" })
    @Column({ type: DataType.STRING, unique: false, allowNull: false })
    surname: string;

    @ApiProperty({ example: 34.4342, description: "User surname" })
    @Column({ type: DataType.DECIMAL, unique: false, allowNull: false })
    coordinateX: number;

    @ApiProperty({ example: 55.4322, description: "User surname" })
    @Column({ type: DataType.DECIMAL, unique: false, allowNull: false })
    coordinateY: number;

    @ApiProperty({ example: 'https://lol-lalka.img', description: "User Photo" })
    @Column({ type: DataType.STRING, unique: false, allowNull: true })
    urlPhoto: string;

    @ApiProperty({ example: 4, description: "Count of Wins" })
    @Column({ type: DataType.INTEGER, unique: false, allowNull: true })
    countWins: number;

    @ForeignKey(() => Team)
    @Column({ type: DataType.INTEGER, allowNull: true })
    teamId: number;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @BelongsTo(() => Team)
    team: Team;
}