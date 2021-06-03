"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatusCode = void 0;
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["ok"] = 200] = "ok";
    HttpStatusCode[HttpStatusCode["noContent"] = 204] = "noContent";
    HttpStatusCode[HttpStatusCode["badRequest"] = 400] = "badRequest";
    HttpStatusCode[HttpStatusCode["unauthorized"] = 401] = "unauthorized";
    HttpStatusCode[HttpStatusCode["forbidden"] = 403] = "forbidden";
    HttpStatusCode[HttpStatusCode["notFound"] = 404] = "notFound";
    HttpStatusCode[HttpStatusCode["serverError"] = 500] = "serverError";
})(HttpStatusCode = exports.HttpStatusCode || (exports.HttpStatusCode = {}));
