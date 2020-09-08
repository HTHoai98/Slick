import 'styles/globals.css'
import "styles/Home.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";
import 'font-awesome/css/font-awesome.min.css';
import dynamic from "next/dynamic";
import { DialogKey } from "../constant/Dialogs";
import omit from "lodash.omit";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

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

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
  
}
