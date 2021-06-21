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
const Permission_1 = __importDefault(require("./Permission"));
<<<<<<< HEAD
let Role = class Role {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
=======
//import Specialist from "./Specialist";
let Role = class Role {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
>>>>>>> fb4f42c82cccad3c7979790dd2059bc8ca56ac70
    __metadata("design:type", String)
], Role.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Role.prototype, "description", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Role.prototype, "created_at", void 0);
__decorate([
    typeorm_1.ManyToMany(() => Permission_1.default),
<<<<<<< HEAD
    typeorm_1.JoinTable({
        name: "permissions_roles",
        joinColumns: [{ name: "role_id" }],
        inverseJoinColumns: [{ name: "permission_id" }]
    }),
=======
    typeorm_1.JoinTable(),
>>>>>>> fb4f42c82cccad3c7979790dd2059bc8ca56ac70
    __metadata("design:type", Array)
], Role.prototype, "permission", void 0);
Role = __decorate([
    typeorm_1.Entity("roles")
], Role);
exports.default = Role;
