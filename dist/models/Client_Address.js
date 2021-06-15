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
const Client_1 = __importDefault(require("./Client"));
const Address_1 = __importDefault(require("./Address"));
let ClientAddress = class ClientAddress {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], ClientAddress.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ClientAddress.prototype, "address_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ClientAddress.prototype, "client_id", void 0);
__decorate([
    typeorm_1.OneToMany(() => Client_1.default, client => client.id),
    typeorm_1.JoinTable({
        name: 'client_Address',
        joinColumns: [{ name: 'client_id' }],
        inverseJoinColumns: [{ name: 'id' }]
    }),
    __metadata("design:type", Array)
], ClientAddress.prototype, "clients", void 0);
__decorate([
    typeorm_1.OneToOne(() => Address_1.default, Address => Address.id),
    typeorm_1.JoinTable({
        name: 'Address_client',
        joinColumns: [{ name: 'address_id' }],
        inverseJoinColumns: [{ name: 'id' }]
    }),
    __metadata("design:type", Array)
], ClientAddress.prototype, "address", void 0);
ClientAddress = __decorate([
    typeorm_1.Entity("clients")
], ClientAddress);
exports.default = ClientAddress;
