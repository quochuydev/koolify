import * as z from "zod";

type Configuration = {
  mailgun: {
    token: string;
  };
  stripe: {
    publicKey: string;
    secretKey: string;
    webhookSecret: string;
  };
  zitadel: {
    issuer: string;
    appClientId: string;
    orgId: string;
  };
  github: {
    personalToken: string;
  };
};

const schema = z.object({
  mailgun: z.object({
    token: z.string().optional(),
  }),
  stripe: z.object({
    publicKey: z.string().optional(),
    secretKey: z.string().optional(),
    webhookSecret: z.string().optional(),
  }),
  zitadel: z.object({
    issuer: z.string().optional(),
    appClientId: z.string().optional(),
    orgId: z.string().optional(),
  }),
  github: z.object({
    personalToken: z.string().optional(),
  }),
});

const configuration: Configuration = {
  mailgun: {
    token: process.env.MAILGUN_TOKEN as string,
  },
  stripe: {
    publicKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
    secretKey: process.env.STRIPE_SECRET_KEY as string,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET as string,
  },
  zitadel: {
    issuer: process.env.ZITADEL_ISSUER as string,
    appClientId: process.env.ZITADEL_APP_CLIENT_ID as string,
    orgId: process.env.ZITADEL_ORG_ID as string,
  },
  github: {
    personalToken: process.env.GITHUB_PERSONAL_TOKEN as string,
  },
};

try {
  schema.parse(configuration);
} catch (error) {
  console.error("Bad configuration.", error);
  throw error;
}

export type { Configuration };
export default configuration;
