"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configMaster = {
    user: 'sara',
    password: 'S123r4546!',
    server: '185.28.152.220',
    database: 'AAExpo_Master',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        encrypt: true,
        enableArithAbort: true
    },
};
exports.default = configMaster;
