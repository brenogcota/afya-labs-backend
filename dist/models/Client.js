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
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let Client = class Client {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
=======
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Client_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Chart_1 = __importDefault(require("./Chart"));
const Service_1 = __importDefault(require("./Service"));
const User_1 = __importDefault(require("./User"));
var Tipos;
(function (Tipos) {
    Tipos[Tipos["A+"] = 0] = "A+";
    Tipos[Tipos["A-"] = 1] = "A-";
    Tipos[Tipos["B+"] = 2] = "B+";
    Tipos[Tipos["B-"] = 3] = "B-";
    Tipos[Tipos["O+"] = 4] = "O+";
    Tipos[Tipos["O-"] = 5] = "O-";
    Tipos[Tipos["AB+"] = 6] = "AB+";
    Tipos[Tipos["AB-"] = 7] = "AB-";
})(Tipos || (Tipos = {}));
let Client = Client_1 = class Client {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
>>>>>>> fb4f42c82cccad3c7979790dd2059bc8ca56ac70
    __metadata("design:type", String)
], Client.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Client.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Client.prototype, "cpf", void 0);
__decorate([
    typeorm_1.Column() // { select: false }
    ,
    __metadata("design:type", String)
], Client.prototype, "telefone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Client.prototype, "celular", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Client.prototype, "email", void 0);
__decorate([
<<<<<<< HEAD
    typeorm_1.Column(),
    __metadata("design:type", String)
=======
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
>>>>>>> fb4f42c82cccad3c7979790dd2059bc8ca56ac70
], Client.prototype, "tipo_sanguineo", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Client.prototype, "created_at", void 0);
<<<<<<< HEAD
Client = __decorate([
=======
__decorate([
    typeorm_1.OneToMany(type => Service_1.default, client => Client_1),
    __metadata("design:type", Array)
], Client.prototype, "services", void 0);
__decorate([
    typeorm_1.OneToOne(() => User_1.default, clients => Client_1),
    typeorm_1.JoinColumn(),
    __metadata("design:type", User_1.default)
], Client.prototype, "users", void 0);
__decorate([
    typeorm_1.OneToMany(() => Chart_1.default, client => Client_1),
    __metadata("design:type", Array)
], Client.prototype, "charts", void 0);
Client = Client_1 = __decorate([
>>>>>>> fb4f42c82cccad3c7979790dd2059bc8ca56ac70
    typeorm_1.Entity("clients")
], Client);
exports.default = Client;
