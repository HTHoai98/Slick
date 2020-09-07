import ReactGA from "react-ga";
import config from "../config";
import { hotjar } from "react-hotjar";
import TagManager from "react-gtm-module";

export const initGA = () => {
  hotjar.initialize(
    config.ANALYTICS.HOTJAR_ID,
    config.ANALYTICS.HOTJAR_VERSION,
  );
  ReactGA.initialize(config.ANALYTICS.GA_CODE);
  TagManager.initialize({
    gtmId: config.ANALYTICS.GTM_CODE,
  });
};

export const logPageView = () => {
  // console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = "", action = "") => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
