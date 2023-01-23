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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfigMaster_1 = __importDefault(require("./dbConfigMaster"));
const mssql_1 = __importDefault(require("mssql"));
const getProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mssql_1.default.connect(dbConfigMaster_1.default);
        let user = yield mssql_1.default.query`getListClientsAndProjects`;
        return user;
    }
    catch (error) {
    }
});
const createPackge = (body) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("body", body);
    try {
        yield mssql_1.default.connect(dbConfigMaster_1.default);
        let createSql = `INSERT INTO PackagesClients(MaxProjects,MaxUsers,TotalBC,TotalProjectAdd,TotalUserAdd,ClientId)
    VALUES(${body.MaxProjects},${body.MaxUsers},${body.TotalBC},${body.TotalProjectAdd},${body.TotalUserAdd},${body.ClientId})`;
        console.log("createSql", createSql);
        console.log("obj", body);
        let user = yield mssql_1.default.query(createSql);
        return user;
    }
    catch (error) {
        console.log(error);
    }
});
const createProject = (body) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("body", body);
    try {
        yield mssql_1.default.connect(dbConfigMaster_1.default);
        let createSql = `INSERT INTO CompanyProject(totalPayment,percPayment,numFinance)
    VALUES(${body.totalPayment},${body.percPayment},${body.numFinance})`;
        console.log("createSql", createSql);
        console.log("obj", body);
        let user = yield mssql_1.default.query(createSql);
        return user;
    }
    catch (error) {
        console.log(error);
    }
});
const updatePackge = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("update-in", JSON.stringify(body), body.IsActive, body.ClientId);
        yield mssql_1.default.connect(dbConfigMaster_1.default);
        yield mssql_1.default.query(`UPDATE PackagesClients SET IsActive = 0
      WHERE IsActive = 1 AND ClientId = ${body.ClientId}`);
        yield mssql_1.default.query(`UPDATE PackagesClients SET IsActive = ${Number(body.IsActive)} 
      WHERE ClientId = ${body.ClientId} AND ID = ${body.ID}`);
    }
    catch (error) {
        console.log(error);
    }
});
const updateProject = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("update-in", JSON.stringify(body), body.IsActive);
        yield mssql_1.default.connect(dbConfigMaster_1.default);
        let result = yield mssql_1.default.query(`UPDATE CompanyProject SET totalPayment =${Number(body.totalPayment)}, numFinance =${Number(body.numFinance)}, percPayment = ${Number(body.percPayment)} WHERE clientId = ${body.clientId} AND projectId = ${body.projectId} AND companyId = ${body.companyId}`);
        console.log(result);
        return result;
    }
    catch (error) {
        console.log(error);
    }
});
const createCompany = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mssql_1.default.connect(dbConfigMaster_1.default);
        let user = yield mssql_1.default.query(`INSERT INTO Company(MaxUsers)
    VALUES(${body.MaxUsers})`);
        console.log(user);
        return user;
    }
    catch (error) {
        console.log(error);
    }
});
const getProjectById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mssql_1.default.connect(dbConfigMaster_1.default);
        let project = yield mssql_1.default.query`getListClientsAndProjects`;
        return project;
    }
    catch (error) {
    }
});
const getAllCompany = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssql_1.default.connect(dbConfigMaster_1.default);
        let user = pool.request().query("SELECT * from Company");
        return user;
    }
    catch (error) {
    }
});
const getPackagesClients = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssql_1.default.connect(dbConfigMaster_1.default);
        let user = pool.request().query("SELECT * from PackagesClients");
        return user;
    }
    catch (error) {
    }
});
const getCompanyProject = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssql_1.default.connect(dbConfigMaster_1.default);
        let user = pool.request().query("SELECT * from CompanyProject");
        return user;
    }
    catch (error) {
    }
});
const getClientsProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssql_1.default.connect(dbConfigMaster_1.default);
        let user = pool.request().query("SELECT * from ClientsProjects");
        return user;
    }
    catch (error) {
    }
});
exports.default = {
    getProjectById,
    getAllCompany,
    getPackagesClients,
    getCompanyProject,
    getClientsProjects,
    getProjects,
    createPackge,
    createCompany,
    updatePackge,
    updateProject,
    createProject,
};
