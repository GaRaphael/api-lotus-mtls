import express from 'express';
import cors from 'cors';
import routes from './main/routes';
import scheduledJobs from './infra//cron/scheduledJobs';
import fs from 'fs';
import https from 'https';

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

const httpsOptions = {
    key: fs.readFileSync('certs/server-key.pem'),  //Chave privada do servidor
    cert: fs.readFileSync('certs/server-cert.pem'),//Certificado do servidor
    ca: fs.readFileSync('certs/ca-cert.pem'), //CA que assina o certificado dos clientes
    requestCert: true, ///deixar true se for solicitar o certificado do cliente
    rejectUnauthorized: false ///deixar false quando for usar o middleware na rota
};

app.use('/api', routes);
scheduledJobs();

https.createServer(httpsOptions, app).listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});
