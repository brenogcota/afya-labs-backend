"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Address_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = __importDefault(require("./User"));
let Address = Address_1 = class Address {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Address.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Address.prototype, "cep", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Address.prototype, "logradouro", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Address.prototype, "numero", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Address.prototype, "bairro", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Address.prototype, "localidade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Address.prototype, "uf", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Address.prototype, "created_at", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.default, addresses => Address_1),
    __metadata("design:type", Array)
], Address.prototype, "user", void 0);
Address = Address_1 = __decorate([
    typeorm_1.Entity("addresses")
], Address);
exports.default = Address;
