export interface IServerConfig {
  port: number;
  corsOrigin: string;
}

export const serverConfig: IServerConfig = {
  port: +process.env.PORT,
  corsOrigin: process.env.CORS as string,
};
