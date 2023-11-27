import { Optional } from "sequelize";

export interface MovieDTO {
    id? : string;
    name : string;
    date : Date;
    views : number;
    createdAt : Date;
    updatedAt : Date;
}

export interface AuthorDTO {
    id : string;
    first_name : string;
    second_name : string;
    date_of_birth :Date;
    created_date : Date;
    updated_date : Date;
}

export interface ActorDTO {
    id : string;
    first_name : string;
    second_name : string;
    date_of_birth :Date;
    created_date : Date;
    updated_date : Date;
}


export type MovieInput = Optional<MovieDTO,"id">

