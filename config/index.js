const env = process.env.STAGE || "development";
const config = {
  //local
  development: {
    RECAPCHA: {
      SITE_KEY: "6Lcgy6QZAAAAAPDxlFXR-Qch_MSw1HWigBuLGE84",
    },
    NODE_BASE_URL: "https://api-itap.spiritlabs.co",
    DOMAIN: "http://localhost:4100",
    ANALYTICS: {
      GA_CODE: "UA-149651864-3",
      GTM_CODE: "GTM-WWPQ6SB",
      HOTJAR_ID: 1850419,
      HOTJAR_VERSION: 6,
    },
  },
  //dev build
  dev: {
    RECAPCHA: {
      SITE_KEY: "6Lf0eKcZAAAAAOKasZVwyZzpGCdZr29MWOp8p1Iz",
    },
    NODE_BASE_URL: "https://api-itap.spiritlabs.co",
    ESP_API_URL: "https://api.espx.cloud/api/v1",
    ESP_VIDEO_URL: "https://widgets.espx.cloud/embed",
    DOMAIN: "https://itap.spiritlabs.co",
    ANALYTICS: {
      GA_CODE: "UA-149651864-3",
      GTM_CODE: "GTM-WWPQ6SB",
      HOTJAR_ID: 1850419,
      HOTJAR_VERSION: 6,
    },
  },
  staging: {
    RECAPCHA: {
      SITE_KEY: "6Lf0eKcZAAAAAOKasZVwyZzpGCdZr29MWOp8p1Iz",
    },
    NODE_BASE_URL: "https://api-itap.spiritlabs.co",
    DOMAIN: "",
    ANALYTICS: {
      GA_CODE: "UA-148078351-1",
      GTM_CODE: "GTM-WWPQ6SB",
      HOTJAR_ID: 1488340,
      HOTJAR_VERSION: 6,
    },
  },
  production: {
    RECAPCHA: {
      SITE_KEY: "6LeltrAZAAAAAKSBv4PFMMxrAMDGWA08X_nJ3tRe",
    },
    NODE_BASE_URL: "",
    DOMAIN: "",
    ANALYTICS: {
      GA_CODE: "UA-101016167-2",
      GTM_CODE: "GTM-WDP7TTS",
      HOTJAR_ID: 1904793,
      HOTJAR_VERSION: 6,
    },
  },
};

export default config[env];
