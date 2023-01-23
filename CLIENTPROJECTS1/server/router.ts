import express, { Router } from "express";
import cors from "cors";
import dbOpertion from "./modules/dbOpertion";

const PORT = process.env.PORT || 4200;
const app = express();
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin");
  res.header("Access-Control-Allow-Credentials");
  next();
});

app.get("/api/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/getAllProjects", async (req: any, res: any) => {
  const result = await dbOpertion.getProjects();
  res.send(result);
});

app.get("/getProjectById", async (req: any, res: any) => {
  const projects = await dbOpertion.getProjectById(req.params.projectId);
  res.send(projects);
});

app.get("/getAllCompanys", async (req: any, res: any) => {
  const result = await dbOpertion.getAllCompany();
  res.send(result);
});

app.get("/getAllPackagesClients", async (req: any, res: any) => {
  const result = await dbOpertion.getPackagesClients();
  res.send(result);
});

app.get("/getCompanyProject", async (req: any, res: any) => {
  const result = await dbOpertion.getCompanyProject();
  res.send(result);
});

app.get("/getClientsProjects", async (req: any, res: any) => {
  const result = await dbOpertion.getClientsProjects();
  res.send(result);
});

app.post("/createPackge", async (req, res: any) => {
  const result = await dbOpertion.createPackge(req.body);
  res.send(result);
});

app.post("/createProject", async (req, res: any) => {
  
  const result = await dbOpertion.createProject(req.body);
  res.send(result);
});
app.post("/updatePackge", async (req, res: any) => {
  
  const result = await dbOpertion.updatePackge(req.body);
  res.send(result);
});

app.post("/updateProject", async (req, res: any) => {
  
  const result = await dbOpertion.updateProject(req.body);
  res.send(result);
});

app.post("/createCompany", async (req: any, res: any) => {
  const result = await dbOpertion.createCompany(req.body);
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
