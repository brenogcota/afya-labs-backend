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
var Chart_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ChartHistory_1 = __importDefault(require("./ChartHistory"));
const Client_1 = __importDefault(require("./Client"));
let Chart = Chart_1 = class Chart {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Chart.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Chart.prototype, "dataAbertura", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Chart.prototype, "created_at", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Client_1.default, charts => Chart_1),
    __metadata("design:type", Client_1.default)
], Chart.prototype, "client", void 0);
__decorate([
    typeorm_1.ManyToOne(() => ChartHistory_1.default, charts => Chart_1),
    __metadata("design:type", ChartHistory_1.default)
], Chart.prototype, "charts_history", void 0);
Chart = Chart_1 = __decorate([
    typeorm_1.Entity("charts")
], Chart);
exports.default = Chart;
