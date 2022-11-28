import dotenv from 'dotenv'
const connectionOptions = () => {
  dotenv.config()
  const devConfig = {
    type: process.env.TYPE,
    database: process.env.DATABASE,
    timezone: process.env.TIMEZONE,
    synchronize: true,
    logging: true,
  };

  const config = devConfig;
  const info = {
    ...config,
  };

  return info;
};

export default connectionOptions;
