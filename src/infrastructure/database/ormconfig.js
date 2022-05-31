const connectionOptions = () => {
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
