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
const ChartHistory_1 = __importDefault(require("./ChartHistory"));
const Profession_1 = __importDefault(require("./Profession"));
const Role_1 = __importDefault(require("./Role"));
const Service_1 = __importDefault(require("./Service"));
let Specialist = class Specialist {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
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
    typeorm_1.ManyToMany(() => User_1.default),
    typeorm_1.JoinTable({
        name: "users_specialists",
        joinColumns: [{ name: "specialist_id" }],
        inverseJoinColumns: [{ name: "user_id" }]
    }),
    __metadata("design:type", Array)
], Specialist.prototype, "users", void 0);
__decorate([
    typeorm_1.OneToMany(() => Service_1.default, service => service.client),
    typeorm_1.JoinTable({
        name: 'services_specialists',
        joinColumns: [{ name: 'specialists_id' }],
        inverseJoinColumns: [{ name: 'service_id' }]
    }),
    __metadata("design:type", Array)
], Specialist.prototype, "services", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Profession_1.default, profession => profession.specialists),
    __metadata("design:type", Array)
], Specialist.prototype, "profession", void 0);
__decorate([
    typeorm_1.ManyToMany(() => Role_1.default),
    typeorm_1.JoinTable({
        name: "specialists_roles",
        joinColumns: [{ name: "specialist_id" }],
        inverseJoinColumns: [{ name: "role_id" }]
    }),
    __metadata("design:type", Array)
], Specialist.prototype, "roles", void 0);
__decorate([
    typeorm_1.ManyToMany(() => ChartHistory_1.default),
    typeorm_1.JoinTable({
        name: "specialists_chartsHist",
        joinColumns: [{ name: "specialists_id" }],
        inverseJoinColumns: [{ name: "chartsHist_id" }]
    }),
    __metadata("design:type", Array)
], Specialist.prototype, "specialist", void 0);
Specialist = __decorate([
    typeorm_1.Entity("specialists")
], Specialist);
exports.default = Specialist;
