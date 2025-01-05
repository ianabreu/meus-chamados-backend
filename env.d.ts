declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    SECRET_JWT: string;
    PORT: number;
  }
}
