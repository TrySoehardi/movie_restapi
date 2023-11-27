// import { IDI } from "../../interface/Idi";
import {NextFunction} from "express";
import {Movie} from "../lib/db/model/movie";
import { MovieDTO } from "../lib/db/dto/movieDto";
import {v1 as uuidv1} from "uuid";


export class MovieService {
	private movieRepository;
    private uuid;
	constructor() {
		this.movieRepository = Movie;
        this.uuid = uuidv1;
	}

	public async getData(next: NextFunction) {
		try {
			const result =await (await this.movieRepository.findAll());
			return result;
		} catch (err) {
			console.log("fail");
			next(err);
		}
	}

	public async createMovie(data: MovieDTO, next: NextFunction) {
		try {
			// if (!await this.isExists(Object.keys(data.name)[0], data.name, next)) {
				data.createdAt = new Date();
				// data.id = await this.di.utils.getUUID();
                data.id = await this.uuid();
				const save = await (await this.movieRepository.create(data));
				return await save;
			// }
		} catch (err) {
			next(err);
		}
	}

	public async isExists(key: string, value: string, next: NextFunction) {
		try {
			const checkDataBy = await this.movieRepository.findOne({ where : {[key] : value} });
			if(checkDataBy) {
				return checkDataBy;
			} else {
				return null;
			}
		} catch (err) {
			next(err);
		}
	}
}
