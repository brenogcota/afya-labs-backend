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
const Specialist_1 = __importDefault(require("./Specialist"));
const User_1 = __importDefault(require("./User"));
let SpecialistUser = class SpecialistUser {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], SpecialistUser.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], SpecialistUser.prototype, "user_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], SpecialistUser.prototype, "specialist_id", void 0);
__decorate([
    typeorm_1.OneToMany(() => Specialist_1.default, client => client.id),
    typeorm_1.JoinTable({
        name: 'specialist_user',
        joinColumns: [{ name: 'specialist_id' }],
        inverseJoinColumns: [{ name: 'id' }]
    }),
    __metadata("design:type", Array)
], SpecialistUser.prototype, "specialist", void 0);
__decorate([
    typeorm_1.OneToOne(() => User_1.default, user => user.id),
    typeorm_1.JoinTable({
        name: 'user_client',
        joinColumns: [{ name: 'user_id' }],
        inverseJoinColumns: [{ name: 'id' }]
    }),
    __metadata("design:type", Array)
], SpecialistUser.prototype, "user", void 0);
SpecialistUser = __decorate([
    typeorm_1.Entity("clients")
], SpecialistUser);
exports.default = SpecialistUser;
