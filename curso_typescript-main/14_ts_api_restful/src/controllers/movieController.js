"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMovie = createMovie;
exports.findMovieById = findMovieById;
exports.getAllMovies = getAllMovies;
exports.removeMovie = removeMovie;
exports.updateMovie = updateMovie;
// Model
const Movie_1 = require("../models/Movie");
// Logger
const logger_1 = __importDefault(require("../../config/logger"));
function createMovie(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const movie = yield Movie_1.MovieModel.create(data);
            return res.status(201).json(movie);
        }
        catch (e) {
            logger_1.default.info(`Erro no sistema: ${e.message}`);
        }
    });
}
function findMovieById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const movie = yield Movie_1.MovieModel.findById(id);
            if (!movie) {
                return res.status(404).json({ error: "O filme não existe." });
            }
            return res.status(200).json(movie);
        }
        catch (e) {
            logger_1.default.info(`Erro no sistema: ${e.message}`);
        }
    });
}
function getAllMovies(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const movies = yield Movie_1.MovieModel.find();
            return res.status(200).json(movies);
        }
        catch (e) {
            logger_1.default.info(`Erro no sistema: ${e.message}`);
        }
    });
}
function removeMovie(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const movie = yield Movie_1.MovieModel.findById(id);
            if (!movie) {
                return res.status(404).json({ error: "O filme não existe." });
            }
            yield movie.delete();
            return res.status(201).json({ msg: "Filme removido com sucesso!" });
        }
        catch (e) {
            logger_1.default.info(`Erro no sistema: ${e.message}`);
        }
    });
}
function updateMovie(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const data = req.body;
            const movie = yield Movie_1.MovieModel.findById(id);
            if (!movie) {
                return res.status(404).json({ error: "O filme não existe." });
            }
            yield Movie_1.MovieModel.updateOne({ _id: id }, data);
            return res.status(200).json(data);
        }
        catch (e) {
            logger_1.default.info(`Erro no sistema: ${e.message}`);
        }
    });
}
