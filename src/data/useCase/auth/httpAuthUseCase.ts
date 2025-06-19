
import { AuthUseCaseParams } from '../../../domain/auth'
import axios from 'axios';
import https from 'https';
import certificate from '../../../../clientCertificate/certificates';
import fs from 'fs';

export class HttpAuthUseCase {

    async perform(params: AuthUseCaseParams): Promise<{ token?: string, error?: string }> {

        try {
            const { email, password } = params;

            const data = {
                email: email,
                password: password
            };

            const agent = new https.Agent({
                key: fs.readFileSync('clientCertificate/client-key.pem'),
                cert: fs.readFileSync('clientCertificate/client-cert.pem'),
                rejectUnauthorized: false
            });

            const auth = await axios.post('https://localhost:3002/secure/auth', data, { httpsAgent: agent });

            return { token: auth.data.token };

        } catch (error) {
            return { error: `${error}` };
        }
    }
}
