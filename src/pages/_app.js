import 'styles/globals.css'
import "styles/Home.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";
import 'font-awesome/css/font-awesome.min.css';
import { useEffect } from "react";
import PropTypes from "prop-types";
import { CacheProvider } from "@emotion/core";
import { Provider } from "react-redux";
import Router, { useRouter } from "next/router";
import App from "next/app";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import { DialogKey } from "../constant/Dialogs";
// import { initGA, logPageView } from "../utils/analytics";
// import { SaveToken, SaveUserProfile } from "lib/redux/types";
// import Axios from "config/Axios";
// import { Helmet } from "react-helmet";
// import Head from "next/head";
// import NProgress from "nprogress";
// import cookies from "next-cookies";
// import get from "lodash.get";
// import { checkToken } from "utils/verifyToken";
// import withReduxStore from "lib/redux/withReduxStore";

import omit from "lodash.omit";

const Dialog = dynamic(() => import("../components/Dialog/Dialogs"), {
  ssr: false,
});


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { query, pathname } = router;
  const { dialog } = query;
  const [openDialog, setOpenDialog] = React.useState(false);

  React.useEffect(() => {
    setOpenDialog(Object.prototype.hasOwnProperty.call(DialogKey, dialog));
  }, [dialog]);

  const _onClose = React.useCallback(() => {
    if (pathname.includes("[")) {
      router.back();
    } else {
      router.replace({ pathname, query: omit(query, ["dialog", "email"]) });
    }
  }, [pathname, query, router]);

  return (
    <>
      <Component {...pageProps} />
      {openDialog ? (
        <Dialog onClose={_onClose} isOpen={openDialog} />
      ) : null}
    </>
  )
}

export default MyApp
