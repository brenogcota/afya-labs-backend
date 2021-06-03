"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var ClassRepository_1 = __importDefault(require("../repositories/ClassRepository"));
var ClassController = /** @class */ (function () {
    function ClassController() {
    }
    ClassController.prototype.index = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        repository = typeorm_1.getCustomRepository(ClassRepository_1.default);
                        _b = (_a = res.status(200)).json;
                        return [4 /*yield*/, repository.find()];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ClassController.prototype.store = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, data, err_1, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        repository = typeorm_1.getCustomRepository(ClassRepository_1.default);
                        return [4 /*yield*/, repository.save(req.body)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.status(201).json(data)];
                    case 2:
                        err_1 = _a.sent();
                        error = new Error('an error occurred');
                        return [2 /*return*/, next(error)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClassController.prototype.show = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var name, repository, data, error, err_2, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = req.params.name;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        repository = typeorm_1.getCustomRepository(ClassRepository_1.default);
                        return [4 /*yield*/, repository.findByName(name)];
                    case 2:
                        data = _a.sent();
                        if (!data) {
                            error = new Error('an error occurred');
                            return [2 /*return*/, next(error.message)];
                        }
                        return [2 /*return*/, res.status(200).json(data)];
                    case 3:
                        err_2 = _a.sent();
                        error = new Error('an error occurred: ' + err_2);
                        return [2 /*return*/, next(error.message)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ClassController;
}());
exports.default = ClassController;
