export interface IAuthConfig {
  accessSecret: string;
  refreshSecret: string;
  ignoreExpiration: boolean;
}

export const authConfig: IAuthConfig = {
  accessSecret: process.env.AUTHSECRET as string,
  refreshSecret: process.env.AUTHSECRETREFRESH as string,
  ignoreExpiration: process.env.AUTHIGNOREEXPIRATION === 'true',
};
