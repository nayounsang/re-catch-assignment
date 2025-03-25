import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Modal,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { JobType } from "../../schema/record";
import { Select } from "../Select/Select";
import { FormItem } from "../Form/FormItem";
import styles from "./RecordModal.module.css";
interface RecordModalProps {
  open: boolean;
  onCancel: () => void;
  id?: string;
  onSubmit: () => void;
}
export const RecordModal = ({
  open,
  onCancel,
  id,
  onSubmit,
}: RecordModalProps) => {
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      title={id ? "회원 수정" : "회원 추가"}
      footer={
        <div className={styles["button-container"]}>
          <Button type="default" onClick={onCancel}>
            취소
          </Button>
          <Button type="primary" onClick={onSubmit}>
            {id ? "수정" : "추가"}
          </Button>
        </div>
      }
      classNames={{
        content: styles["content"],
        header: styles["header"],
        body: styles["body"],
      }}
    >
      <Form layout="vertical" className={styles["form-container"]}>
        <FormItem label="이름" name="name" required>
          <Input placeholder="Input" />
        </FormItem>
        <FormItem label="주소" name="address">
          <Input placeholder="Input" />
        </FormItem>
        <FormItem label="메모" name="memo">
          <TextArea placeholder="TextArea" />
        </FormItem>
        <FormItem label="가입일" name="joinDate" required>
          <DatePicker />
        </FormItem>
        <FormItem label="직업" name="job">
          <Select
            options={[
              { label: "개발자", value: JobType.DEVELOPER },
              { label: "디자이너", value: JobType.DESIGNER },
              { label: "PM", value: JobType.PO },
            ]}
          />
        </FormItem>
        <FormItem label="이메일 수신 동의" name="emailConsent">
          <Checkbox />
        </FormItem>
      </Form>
    </Modal>
  );
};
