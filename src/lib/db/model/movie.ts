import { MovieDTO } from "../dto/movieDto";
// import sequelize from "../../lib/db";
import { Column, CreatedAt, DataType, Model, Table, UpdatedAt } from "sequelize-typescript";

  @Table({ tableName : "movie" })
  export class Movie extends Model<MovieDTO> {

    @Column({
      primaryKey : true,
      type :       DataType.STRING
    })
    id!: string;

    @Column({
      type :      DataType.STRING,
      allowNull : false,
    })
    name!: string;

    @Column({
      type :      DataType.NUMBER,
      allowNull : false,
    })
    views!: number;

    @Column({
      type :      DataType.DATE,
      allowNull : false,
    })
    date!: Date;

    @CreatedAt
    createdAt!: Date;

    @UpdatedAt
    updatedAt?: Date;
  }
