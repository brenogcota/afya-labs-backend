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
var Service_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
const typeorm_1 = require("typeorm");
const Client_1 = __importDefault(require("./Client"));
const Specialist_1 = __importDefault(require("./Specialist"));
var Status;
(function (Status) {
    Status["AGENDADO"] = "agendado";
    Status["REALIZADO"] = "realizado";
    Status["CANCELADO"] = "cancelado";
})(Status = exports.Status || (exports.Status = {}));
let Service = Service_1 = class Service {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Service.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Service.prototype, "dataAgendamento", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Service.prototype, "dataAtendimento", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Service.prototype, "horaAtendimento", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Service.prototype, "valor", void 0);
__decorate([
    typeorm_1.Column({
        type: "enum",
        enum: Status,
        default: Status.AGENDADO
    }),
    __metadata("design:type", String)
], Service.prototype, "status", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Service.prototype, "created_at", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Client_1.default, services => Service_1),
    __metadata("design:type", Client_1.default)
], Service.prototype, "client", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Specialist_1.default, services => Service_1),
    __metadata("design:type", Array)
], Service.prototype, "specialist", void 0);
Service = Service_1 = __decorate([
    typeorm_1.Entity("services")
], Service);
exports.default = Service;
