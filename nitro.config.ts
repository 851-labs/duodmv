import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  cloudflare: {
    wrangler: {
      observability: {
        logs: {
          enabled: false,
          invocation_logs: true,
        },
      },
    },
  },
});
