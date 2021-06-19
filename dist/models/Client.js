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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = __importDefault(require("./User"));
const Address_1 = __importDefault(require("./Address"));
const Service_1 = __importDefault(require("./Service"));
const TipoSanguineo_1 = __importDefault(require("./TipoSanguineo"));
let Client = class Client {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
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
    typeorm_1.Column(),
    __metadata("design:type", String)
], Client.prototype, "tipo_sanguineo", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Client.prototype, "created_at", void 0);
__decorate([
    typeorm_1.ManyToMany(() => User_1.default),
    typeorm_1.JoinTable({
        name: "users_clients",
        joinColumns: [{ name: "client_id" }],
        inverseJoinColumns: [{ name: "user_id" }]
    }),
    __metadata("design:type", Array)
], Client.prototype, "users", void 0);
__decorate([
    typeorm_1.OneToMany(() => Address_1.default, address => address.clients),
    __metadata("design:type", Array)
], Client.prototype, "addresses", void 0);
__decorate([
    typeorm_1.ManyToOne(() => TipoSanguineo_1.default, blood_type => blood_type.clients),
    __metadata("design:type", Array)
], Client.prototype, "blood_types", void 0);
__decorate([
    typeorm_1.OneToMany(() => Service_1.default, service => service.client),
    __metadata("design:type", Array)
], Client.prototype, "services", void 0);
Client = __decorate([
    typeorm_1.Entity("clients")
], Client);
exports.default = Client;
