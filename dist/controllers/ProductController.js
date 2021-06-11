"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ProductRepository_1 = __importDefault(require("../repositories/ProductRepository"));
class ProductController {
    async create(request, response) {
        const productRepository = typeorm_1.getCustomRepository(ProductRepository_1.default);
        const { name, description } = request.body;
        const existProduct = await productRepository.findOne({ name });
        if (existProduct) {
            return response.status(400).json({ err: "Product already exists" });
        }
        const product = productRepository.create({
            name,
            description,
        });
        await productRepository.save(product);
        return response.json(product);
    }
    async index(request, response) {
        const productRepository = typeorm_1.getCustomRepository(ProductRepository_1.default);
        const products = await productRepository.find();
        return response.json(products);
    }
    async show(request, response) {
        const productRepository = typeorm_1.getCustomRepository(ProductRepository_1.default);
        const { id } = request.params;
        const product = await productRepository.findOne(id);
        return response.json(product);
    }
}
exports.default = new ProductController();
