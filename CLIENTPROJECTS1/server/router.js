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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dbOpertion_1 = __importDefault(require("./modules/dbOpertion"));

const PORT = process.env.PORT || 4200;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin");
    res.header("Access-Control-Allow-Credentials");
    next();
});
app.get("/api/", (req, res) => {
    res.json({ message: "Hello from server!" });
});
app.get("/getAllProjects", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield dbOpertion_1.default.getProjects();
    res.send(result);
}));
app.get("/getProjectById", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield dbOpertion_1.default.getProjectById(req.params.projectId);
    res.send(projects);
}));
app.get("/getAllCompanys", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield dbOpertion_1.default.getAllCompany();
    res.send(result);
}));
app.get("/getAllPackagesClients", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield dbOpertion_1.default.getPackagesClients();
    res.send(result);
}));
app.get("/getCompanyProject", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield dbOpertion_1.default.getCompanyProject();
    res.send(result);
}));
app.get("/getClientsProjects", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield dbOpertion_1.default.getClientsProjects();
    res.send(result);
}));
app.post("/createPackge", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield dbOpertion_1.default.createPackge(req.body);
    res.send(result);
}));
app.post("/createProject", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield dbOpertion_1.default.createProject(req.body);
    res.send(result);
}));
app.post("/updatePackge", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield dbOpertion_1.default.updatePackge(req.body);
    res.send(result);
}));
app.post("/updateProject", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield dbOpertion_1.default.updateProject(req.body);
    res.send(result);
}));
app.post("/createCompany", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield dbOpertion_1.default.createCompany(req.body);
    res.send(result);
}));
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
