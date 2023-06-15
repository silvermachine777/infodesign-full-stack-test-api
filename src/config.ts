import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    sqlServer: {
      server: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
    },
  };
});
