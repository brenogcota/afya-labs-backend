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
var ChartHistory_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Chart_1 = __importDefault(require("./Chart"));
const Specialist_1 = __importDefault(require("./Specialist"));
let ChartHistory = ChartHistory_1 = class ChartHistory {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], ChartHistory.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], ChartHistory.prototype, "data", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], ChartHistory.prototype, "hora", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ChartHistory.prototype, "descri\u00E7\u00E3o", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], ChartHistory.prototype, "created_at", void 0);
__decorate([
    typeorm_1.ManyToMany(() => Specialist_1.default),
    typeorm_1.JoinTable({
        name: "specialists_chartsHist",
        joinColumns: [{ name: "chartsHist_id" }],
        inverseJoinColumns: [{ name: "specialists_id" }]
    }),
    __metadata("design:type", Array)
], ChartHistory.prototype, "specialists", void 0);
__decorate([
    typeorm_1.OneToMany(() => Chart_1.default, charts_history => ChartHistory_1),
    __metadata("design:type", Array)
], ChartHistory.prototype, "charts", void 0);
ChartHistory = ChartHistory_1 = __decorate([
    typeorm_1.Entity("charts_history")
], ChartHistory);
exports.default = ChartHistory;
