import { readFileSync } from 'fs';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export interface IDbConfig extends PostgresConnectionOptions {
  autoLoadEntities: boolean;
}

export const dbConfig: IDbConfig = {
  autoLoadEntities: true,
  database: process.env.DATABASE,
  host: process.env.DBHOST,
  port: +(process.env.DBPORT || 5432),
  username: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
  synchronize: process.env.DBSYNC === 'true',
  type: 'postgres',
  namingStrategy: new SnakeNamingStrategy(),
  ssl: ssl(),
};

function ssl() {
  if (process.env.DBCERTVALUE) {
    return { ca: process.env.DBCERTVALUE as string };
  }

  if (process.env.DBCERT) {
    return { ca: readFileSync(process.env.DBCERT, 'utf-8') };
  }
}
