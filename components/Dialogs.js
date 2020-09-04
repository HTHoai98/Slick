import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import Dialogs from "../constant/Dialogs";
const Modal = dynamic(() => import("antd/lib/modal"));

function Dialog({ onClose, content = null, isOpen, className }) {
  const router = useRouter();
  const { dialog } = router.query;

  return (
    <CustomDialog
      visible={isOpen}
      footer={null}
      onCancel={onClose}
      bodyStyle={{ borderRadius: 8 }}
      // width="70%"
      centered
      className={className}
      closeIcon={<i className="se-close" />}
    >
      {dialog ? Dialogs[dialog] : content}
    </CustomDialog>
  );
}

Dialog.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  content: PropTypes.element,
  className: PropTypes.string,
};

export default Dialog;

const CustomDialog = styled(Modal)`
  .ant-modal-content {
    border-radius: 8px;
    position: relative;
  }
  .ant-modal-close {
    display: none;
    }
  }
`;
