import * as dotenv from 'dotenv';

dotenv.config();

import DEVELOPMENT from './enviroments/dev';
import PRODUCTION from './enviroments/prod';

const { NODE_ENV } = process.env;

export type Configuration = {
    NODE_ENV: string;
    PORT: number;
    APP_NAME: string;
    APP_DATABASE_URL: string;
    APP_LOG_LEVEL: string;
};

let currentConfig: Configuration = DEVELOPMENT;

switch (NODE_ENV) {
    case 'production':
        currentConfig = PRODUCTION;
    break;
    case 'development':
        currentConfig = DEVELOPMENT;
    break;
    default:
        currentConfig = DEVELOPMENT;
}

export { currentConfig as config };
