import configMaster from "./dbConfigMaster";
import sql from "mssql";

const getProjects = async () => {
  try {
    await sql.connect(configMaster as any);
    let user = await sql.query`getListClientsAndProjects`;
    return user;
  } catch (error) {
    console.log(error);
  }
};
const createPackge = async (body) => {
  try {
    await sql.connect(configMaster as any);
    let createSql = `INSERT INTO PackagesClients(MaxProjects,MaxUsers,TotalBC,TotalProjectAdd,TotalUserAdd,ClientId)
    VALUES(${body.MaxProjects},${body.MaxUsers},${body.TotalBC},${body.TotalProjectAdd},${body.TotalUserAdd},${body.ClientId})`;
    let user = await sql.query(createSql);
    return user;
  } catch (error) {
    console.log(error);
  }
};
const createProject = async (body) => {
  try {
    await sql.connect(configMaster as any);
    let createSql = `INSERT INTO CompanyProject(totalPayment,percPayment,numFinance)
    VALUES(${body.totalPayment},${body.percPayment},${body.numFinance})`;
    let user = await sql.query(createSql);
    return user;
  } catch (error) {
    console.log(error);
  }
};
const updatePackge = async (body) => {
  try {
    await sql.connect(configMaster as any);
    await sql.query(
      `UPDATE PackagesClients SET IsActive = 0
      WHERE IsActive = 1 AND ClientId = ${body.ClientId}`
    );

    await sql.query(
      `UPDATE PackagesClients SET IsActive = ${Number(body.IsActive)} 
      WHERE ClientId = ${body.ClientId} AND ID = ${body.ID}`
    );
  } catch (error) {
    console.log(error);
  }
};
const updateProject = async (body) => {
  try {
    await sql.connect(configMaster as any);
    let result = await sql.query(
      `UPDATE CompanyProject SET totalPayment =${Number(
        body.totalPayment
      )}, numFinance =${Number(body.numFinance)}, percPayment = ${Number(
        body.percPayment
      )} WHERE clientId = ${body.clientId} AND projectId = ${
        body.projectId
      } AND companyId = ${body.companyId}`
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};

const createCompany = async (body) => {
  try {
    await sql.connect(configMaster as any);
    let user = await sql.query(`INSERT INTO Company(MaxUsers)
    VALUES(${body.MaxUsers})`);
    return user;
  } catch (error) {
    console.log(error);
  }
};

const getProjectById = async (id: number) => {
  try {
    await sql.connect(configMaster as any);
    let project = await sql.query`getListClientsAndProjects`;
    return project;
  } catch (error) {}
};
const getAllCompany = async () => {
  try {
    let pool = await sql.connect(configMaster as any);
    let user = pool.request().query("SELECT * from Company");
    return user;
  } catch (error) {}
};

const getPackagesClients = async () => {
  try {
    let pool = await sql.connect(configMaster);
    let user = pool.request().query("SELECT * from PackagesClients");
    return user;
  } catch (error) {}
};
const getCompanyProject = async () => {
  try {
    let pool = await sql.connect(configMaster);
    let user = pool.request().query("SELECT * from CompanyProject");
    return user;
  } catch (error) {}
};

const getClientsProjects = async () => {
  try {
    let pool = await sql.connect(configMaster);
    let user = pool.request().query("SELECT * from ClientsProjects");
    return user;
  } catch (error) {
    console.log(error);
  }
};

export default {
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
