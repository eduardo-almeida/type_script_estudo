"use strict";
// 1 - iniciar projeto
// console.log("Hello Express + TS");
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 2 - init express
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// 3 - rota com POST
app.use(express_1.default.json());
// 11 - middleware para todas as rotas
function showPath(req, res, next) {
    console.log(req.path);
    next();
}
app.use(showPath);
app.get("/", (req, res) => {
    return res.send("Hello Express!");
});
// 3 - rota com POST
app.post("/api/product", (req, res) => {
    console.log(req.body);
    return res.send("Produto cadastrado!");
});
// 4 - rota para todos os verbos
app.all("/api/product/check", (req, res) => {
    if (req.method === "POST") {
        return res.send("Inseriu algo!");
    }
    else if (req.method === "GET") {
        return res.send("Leu algo!");
    }
});
// 5 - interfaces do express
app.get("/api/interfaces", (req, res) => {
    return res.send("Utilizando as interfaces!");
});
// 6 - enviando JSON
app.get("/api/json", (req, res) => {
    return res.json({
        name: "Shirt",
        price: 19.99,
        inStock: true,
    });
});
// 7 - router parameters
app.get("/api/product/:id", (req, res) => {
    console.log(req.params);
    const product = {
        id: 1,
        name: "Boné",
        price: 40.49,
    };
    return res.json(product);
});
// 8 - rotas complexas
app.get("/api/product/:id/review/:reviewId", (req, res) => {
    console.log(req.params);
    const productId = req.params.id;
    const reviewId = req.params.reviewId;
    return res.send(`Acessando a review ${reviewId} do produto ${productId}!`);
});
// 9 - router handle
app.get("/api/user/:id", getUser);
function getUser(req, res) {
    console.log(`Resgatando usuário com id: ${req.params.id}`);
    return res.send("O usuário foi encontrado!");
}
// 10 - middleware
function someMiddleware(req, res, next) {
    if (req.params.id === "1") {
        console.log("Pode seguir!");
        next();
    }
    else {
        console.log("Não pode seguir");
    }
}
app.get("/api/user/:id/access", someMiddleware, (req, res, next) => {
    return res.json({ msg: "Bem-vindo a área administrativa!" });
});
// 12 - req res generics
app.get("/api/user/:id/details/:name", (req, res) => {
    console.log(`ID: ${req.params.id}`);
    console.log(`Name: ${req.params.name}`);
    return res.json({ status: true });
});
// 13 - tratando erros
app.get("/api/error", (req, res) => {
    try {
        throw new Error("Algo deu errado!");
    }
    catch (e) {
        res.statusCode = 500;
        res.status(500).json({ msg: e.message });
    }
});
app.listen(3000, () => {
    console.log("Aplicação TS + Express funcionando!");
});
