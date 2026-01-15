import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  cloudflare: {
    wrangler: {
      name: "duodmv",
      observability: {
        enabled: true,
        head_sampling_rate: 1.0,
        logs: {
          enabled: true,
          invocation_logs: true,
        },
      },
    },
  },
});
