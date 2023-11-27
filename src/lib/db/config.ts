import { Sequelize } from "sequelize-typescript";
import {Movie} from "../db/model/movie";

        const dbName = process.env.DB_NAME || "try_s";
        const dbHost = process.env.DB_HOST || "bla";
        const dbUser = process.env.DB_USER || "bla";
        const dbPassword = process.env.DB_PASSWORD || "bla";
        const connection = new Sequelize({
          database : dbName,
          logging :  false,
          host :     dbHost,
          dialect :  "postgres",
          username : dbUser,
          password : dbPassword,
          // storage :  ":memory:",
          models :   [Movie]
        });

export default connection;