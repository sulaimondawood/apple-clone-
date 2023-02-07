import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: process.env.API_VERSION,
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET,
  token: process.env.TOKEN,
  useCdn: false,
});
