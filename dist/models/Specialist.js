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
var Specialist_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ChartHistory_1 = __importDefault(require("./ChartHistory"));
const Profession_1 = __importDefault(require("./Profession"));
const Role_1 = __importDefault(require("./Role"));
const Service_1 = __importDefault(require("./Service"));
const User_1 = __importDefault(require("./User"));
let Specialist = Specialist_1 = class Specialist {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Specialist.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Specialist.prototype, "registro", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Specialist.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Specialist.prototype, "telefone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Specialist.prototype, "celular", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Specialist.prototype, "email", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Specialist.prototype, "created_at", void 0);
__decorate([
    typeorm_1.OneToMany(() => Service_1.default, specialist => Specialist_1),
    __metadata("design:type", Array)
], Specialist.prototype, "services", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Profession_1.default, specialists => Specialist_1),
    __metadata("design:type", Array)
], Specialist.prototype, "profession", void 0);
__decorate([
    typeorm_1.ManyToMany(() => Role_1.default),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Specialist.prototype, "roles", void 0);
__decorate([
    typeorm_1.OneToOne(type => User_1.default, specialist => Specialist_1),
    __metadata("design:type", Array)
], Specialist.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToMany(() => ChartHistory_1.default),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Specialist.prototype, "charts_history", void 0);
Specialist = Specialist_1 = __decorate([
    typeorm_1.Entity("specialists")
], Specialist);
exports.default = Specialist;
