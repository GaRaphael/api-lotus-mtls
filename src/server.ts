import express from 'express';
import cors from 'cors';
import fs from 'fs';
import https from 'https';
import http from 'http';

import routes from './main/routes';
import secureRouter from './main/routes/secureRoutes';
import scheduledJobs from './infra/cron/scheduledJobs';

const httpApp = express(); 
const httpsApp = express();

const httpPort = 3001;
const httpsPort = 3002;

const jsonParser = express.json();
const corsMiddleware = cors();

httpApp.use(jsonParser);
httpApp.use(corsMiddleware);
httpsApp.use(jsonParser);
httpsApp.use(corsMiddleware);

httpsApp.use('/secure', secureRouter);

httpApp.use('/api', routes);

scheduledJobs();

const httpsOptions = {
  key: fs.readFileSync('certs/server-key.pem'),
  cert: fs.readFileSync('certs/server-cert.pem'),
  ca: fs.readFileSync('certs/ca-cert.pem'),
  requestCert: true,
  rejectUnauthorized: false
};

http.createServer(httpApp).listen(httpPort, () => {
  console.log(`🌐 Servidor HTTP rodando na porta ${httpPort}`);
});

https.createServer(httpsOptions, httpsApp).listen(httpsPort, () => {
  console.log(`🔐 Servidor HTTPS rodando na porta ${httpsPort}`);
});