import { Modal } from 'antd';

const ConfirmationDialog = ({ visible, onConfirm, onCancel, text }) => {
  return (
    <Modal
      visible={visible}
      title="Confirmation"
      okText="Confirm"
      cancelText="Cancel"
      onOk={onConfirm}
      onCancel={onCancel}
    >
      <p>{text}</p>
    </Modal>
  );
};

export default ConfirmationDialog;
