"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movieController_1 = require("./controllers/movieController");
// validations
const handleValidations_1 = require("./middleware/handleValidations");
const movieValidations_1 = require("./middleware/movieValidations");
const router = (0, express_1.Router)();
exports.default = router
    .get("/test", (req, res) => {
    res.status(200).send("API Working");
})
    .post("/movie", (0, movieValidations_1.movieCreateValidation)(), handleValidations_1.validate, movieController_1.createMovie)
    .get("/movie/:id", movieController_1.findMovieById)
    .get("/movie", movieController_1.getAllMovies)
    .delete("/movie/:id", movieController_1.removeMovie)
    .patch("/movie/:id", (0, movieValidations_1.movieCreateValidation)(), handleValidations_1.validate, movieController_1.updateMovie);
