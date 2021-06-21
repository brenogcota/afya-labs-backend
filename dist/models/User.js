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
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Role_1 = __importDefault(require("./Role"));
let User = class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
=======
var User_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Address_1 = __importDefault(require("./Address"));
const Client_1 = __importDefault(require("./Client"));
const Role_1 = __importDefault(require("./Role"));
const Specialist_1 = __importDefault(require("./Specialist"));
let User = User_1 = class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
>>>>>>> fb4f42c82cccad3c7979790dd2059bc8ca56ac70
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "created_at", void 0);
__decorate([
    typeorm_1.ManyToMany(() => Role_1.default),
<<<<<<< HEAD
    typeorm_1.JoinTable({
        name: "users_roles",
        joinColumns: [{ name: "user_id" }],
        inverseJoinColumns: [{ name: "role_id" }]
    }),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
User = __decorate([
=======
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
__decorate([
    typeorm_1.OneToOne(type => Client_1.default, users => User_1),
    __metadata("design:type", Client_1.default)
], User.prototype, "clients", void 0);
__decorate([
    typeorm_1.OneToOne(type => Specialist_1.default, user => User_1),
    __metadata("design:type", Specialist_1.default)
], User.prototype, "specialist", void 0);
__decorate([
    typeorm_1.OneToMany(() => Address_1.default, user => User_1),
    __metadata("design:type", Array)
], User.prototype, "addresses", void 0);
User = User_1 = __decorate([
>>>>>>> fb4f42c82cccad3c7979790dd2059bc8ca56ac70
    typeorm_1.Entity("users")
], User);
exports.default = User;
