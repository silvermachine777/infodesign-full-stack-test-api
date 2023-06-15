import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import * as sql from 'mssql';
import config from '../config';

@Module({
  imports: [ConfigModule.forRoot({ load: [config] })],
  providers: [
    {
      provide: 'SQL_SERVER_CONNECTION',
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { server, user, password, database } = configService.sqlServer;
        const dbConfig = {
          server: server,
          user: user,
          password: password,
          database: database,
          options: {
            trustServerCertificate: true, // Agrega esta línea para desactivar la validación del certificado
          },
        };
        const pool = await sql.connect(dbConfig);

        return pool;
      },
      inject: [config.KEY], // Asegúrate de inyectar la clave correcta para la configuración
    },
  ],
  exports: ['SQL_SERVER_CONNECTION'],
})
export class DatabaseModule {}
