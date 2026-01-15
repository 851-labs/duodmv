import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  cloudflare: {
    wrangler: {
      name: "duodmv",
      observability: {
        logs: {
          enabled: false,
          invocation_logs: true,
        },
      },
    },
  },
});
