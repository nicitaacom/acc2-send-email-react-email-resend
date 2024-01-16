declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PRODUCTION_URL: string

      NEXT_RESEND_SECRET: string
      NEXT_PUBLIC_SUPPORT_EMAIL: string
    }
  }
}

export {}
