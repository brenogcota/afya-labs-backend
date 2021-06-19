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
exports.Status = void 0;
const typeorm_1 = require("typeorm");
const Service_1 = __importDefault(require("./Service"));
var Status;
(function (Status) {
    Status["teste"] = "agendado";
})(Status = exports.Status || (exports.Status = {}));
let ServiceStatus = class ServiceStatus {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], ServiceStatus.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        name: 'action', type: 'enum', enum: Status, default: Status.teste
    }),
    __metadata("design:type", String)
], ServiceStatus.prototype, "status", void 0);
__decorate([
    typeorm_1.OneToMany(() => Service_1.default, service => service.status),
    __metadata("design:type", Array)
], ServiceStatus.prototype, "services", void 0);
ServiceStatus = __decorate([
    typeorm_1.Entity("service_status")
], ServiceStatus);
exports.default = ServiceStatus;
