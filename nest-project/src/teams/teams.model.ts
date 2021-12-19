
import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";

interface TeamCreationAttrs {
    name: string;
    country: string;
}

@Table({ tableName: "teams" })
export class Team extends Model<Team, TeamCreationAttrs>{

    @ApiProperty({ example: 1, description: "ID" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'Red Bull Racing', description: "Team name" })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    name: string;

    @ApiProperty({ example: 'France', description: "Team home country" })
    @Column({ type: DataType.STRING, unique: false, allowNull: false })
    country: string;



    @HasMany(() => User)
    users: User[];
}