interface ImportMetaEnv {
  readonly SECRET_RESEND_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}