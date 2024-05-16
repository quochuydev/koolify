import * as z from "zod";

type Configuration = {
  mailgun: {
    token: string;
  };
  stripe: {
    publicKey: string;
    secretKey: string;
  };
};

const schema = z.object({
  mailgun: z
    .object({
      token: z.string(),
    })
    .optional(),
  stripe: z
    .object({
      publicKey: z.string(),
      secretKey: z.string(),
    })
    .optional(),
});

const configuration: Configuration = {
  mailgun: {
    token: process.env.MAILGUN_TOKEN as string,
  },
  stripe: {
    publicKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
    secretKey: process.env.STRIPE_SECRET_KEY as string,
  },
};

try {
  console.log(`debug:configuration`, configuration);
  schema.parse(configuration);
} catch (error) {
  console.error("Bad configuration.", error);
  throw error;
}

export type { Configuration };
export default configuration;
