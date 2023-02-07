import { createClient } from "next-sanity";
// import { SanityClient } from "next-sanity";
export const sanityClient = "";
export const client = createClient({
  apiVersion: "2022-02-06",
  projectId: "ksoks7ez",
  dataset: "production",
  token:
    "skF4Ah1Y3nrsRlXEnyOhQ8N4g3xDbVyvc7VX7uVEYVJ3vMOKkc5v9Kpl8STj4d6cLyqr3qeWDY5XsqXFGdg03VaMNMtkGhFEf5rkURk3RerQtvzQHAWPdKpmoRHgM9PApB8LN62dsuZdVlOQ7hwuHAv6q2g86Kxla4eCu7yydoeuCnSCTqEX",
  useCdn: false,
});
// export const sanityConfig = createClient({
//   apiVersion: process.env.API_VERSION,
//   projectId: process.env.PROJECT_ID,
//   dataset: process.env.DATASET,
//   token: process.env.TOKEN,
//   useCdn: false,
// });
