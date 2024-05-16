import * as z from "zod";

type Configuration = {
  mailgun: {
    token: string;
  };
};

const configurationSchema = z.object({
  mailgun: z.object({
    token: z.string(),
  }),
});

const configuration: Configuration = {
  mailgun: {
    token: process.env.MAILGUN_TOKEN as string,
  },
};

try {
  configurationSchema.parse(configuration);
} catch (error) {
  console.error("Bad configuration.", error);
  throw error;
}

export type { Configuration };
export default configuration;
