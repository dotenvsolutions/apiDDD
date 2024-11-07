import { Configuration } from '..';

const DEV: Configuration = {
  NODE_ENV: 'production',
  PORT: +(process.env.SERVER_PORT || 3000),
  APP_NAME: process.env.APP_NAME || 'express-ts-ddd',
  APP_DATABASE_URL: process.env.APP_DATABASE_URL || '',
  APP_LOG_LEVEL: process.env.APP_LOG_LEVEL || 'debug',
};

export default DEV;