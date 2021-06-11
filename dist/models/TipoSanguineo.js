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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoDoSangue = void 0;
const typeorm_1 = require("typeorm");
var TipoSanguineoEnum;
(function (TipoSanguineoEnum) {
    TipoSanguineoEnum["a"] = "a+";
    TipoSanguineoEnum["b"] = "a-";
    TipoSanguineoEnum["c"] = "b+";
    TipoSanguineoEnum["d"] = "b-";
    TipoSanguineoEnum["e"] = "o+";
    TipoSanguineoEnum["f"] = "o-";
    TipoSanguineoEnum["g"] = "ab+";
    TipoSanguineoEnum["h"] = "ab-";
})(TipoSanguineoEnum || (TipoSanguineoEnum = {}));
var TipoDoSangue;
(function (TipoDoSangue) {
    TipoDoSangue["teste"] = "teste";
    TipoDoSangue["testea"] = "testea";
})(TipoDoSangue = exports.TipoDoSangue || (exports.TipoDoSangue = {}));
let TipoSanguineo = class TipoSanguineo {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], TipoSanguineo.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        name: 'action', type: 'enum', enum: TipoDoSangue, default: TipoDoSangue.teste
    }),
    __metadata("design:type", String)
], TipoSanguineo.prototype, "tipo_sanguineo", void 0);
TipoSanguineo = __decorate([
    typeorm_1.Entity("blood_types")
], TipoSanguineo);
exports.default = TipoSanguineo;
