"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const routes_1 = require("./routes");
const middlewares_1 = __importDefault(require("./middlewares"));
const middleware = new middlewares_1.default();
require('dotenv').config();
const app = express_1.default();
app.set('trust proxy', 1);
app.use(morgan('dev'));
app.use(helmet());
<<<<<<< HEAD
app.use(cors());
=======
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
};
app.use(cors(corsOptions));
>>>>>>> fb4f42c82cccad3c7979790dd2059bc8ca56ac70
app.use(express_1.default.json());
app.use(routes_1.router);
app.use(middleware.notFound);
app.use(middleware.errorHandler);
exports.default = app;
