import { Button, Checkbox, DatePicker, Form, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { JobType, recordSchema } from "../../schema/record";
import { Select } from "../Select/Select";
import { FormItem } from "../Form/FormItem";
import styles from "./RecordModal.module.css";
import { useRecordStore } from "../../store/recordStore";
import { v4 as uuidv4 } from "uuid";
import { useCallback, useEffect, useState } from "react";
import dayjs from "dayjs";
import { ZodError } from "zod";
interface RecordModalProps {
  open: boolean;
  onCancel: () => void;
  onClose: () => void;
  /**
   * 수정 모드일땐 ID를 주고 생성 모드일땐 ID를 주지 마세요.
   */
  id?: string;
}
export const RecordModal = ({
  open,
  onCancel,
  id,
  onClose,
}: RecordModalProps) => {
  const [form] = Form.useForm();

  const { createRecord, updateRecord, getRecordFromKey } = useRecordStore();
  const record = getRecordFromKey(id);

  const getParsedFormValues = useCallback(async () => {
    const originalValues = await form.getFieldsValue();
    const values = {
      ...originalValues,
      joinDate: originalValues.joinDate
        ? originalValues.joinDate.format("YYYY-MM-DD")
        : undefined,
      key: record?.key ?? uuidv4(),
    };
    const validatedValues = recordSchema.parse(values);
    return validatedValues;
  }, [form, record?.key]);

  const setFormError = useCallback(async () => {
    if (!open) return;

    await getParsedFormValues()
      .then(() => {
        setIsError(false);
      })
      .catch((error) => {
        console.log("error in setFormError", error);
        if (error instanceof ZodError) {
          setIsError(true);
        }
      });
  }, [getParsedFormValues, open]);

  const [isError, setIsError] = useState(true);

  useEffect(() => {
    if (record) {
      form.setFieldsValue({
        ...record,
        joinDate: record.joinDate ? dayjs(record.joinDate) : undefined,
      });
      setFormError();
    }
  }, [form, record, setFormError]);

  const handleSubmit = async () => {
    const validatedValues = await getParsedFormValues();
    if (id) {
      updateRecord(id, validatedValues);
    } else {
      createRecord(validatedValues);
    }
    form.resetFields();
    onClose();
  };

  const handleValuesChange = async () => {
    await setFormError();
  };

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
          <Button type="primary" onClick={handleSubmit} disabled={isError}>
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
      <Form
        layout="vertical"
        className={styles["form-container"]}
        form={form}
        onValuesChange={handleValuesChange}
      >
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
            defaultValue={record?.job ?? JobType.DEVELOPER}
            options={[
              { label: JobType.DEVELOPER, value: JobType.DEVELOPER },
              { label: JobType.DESIGNER, value: JobType.DESIGNER },
              { label: JobType.PO, value: JobType.PO },
            ]}
          />
        </FormItem>
        <FormItem
          label="이메일 수신 동의"
          name="emailConsent"
          valuePropName="checked"
        >
          <Checkbox name="emailConsent" />
        </FormItem>
      </Form>
    </Modal>
  );
};
