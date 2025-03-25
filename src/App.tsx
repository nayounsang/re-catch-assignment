import "./index.css"
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "./components/Button/Button";
import { MenuButton } from "./components/Button/MenuButton";
import TextArea from "antd/es/input/TextArea";
import { DatePicker } from "antd";
import { Select } from "./components/Select";

function App() {
  return (
    <>
      <Button icon={<PlusOutlined />} text="추가" />
      <Button icon={<PlusOutlined />} text="추가" disabled />
      <MenuButton />
      <TextArea />
      <DatePicker />
      <Select
        defaultValue="개발자"
        options={[
          { label: "개발자", value: "개발자" },
          { label: "PO", value: "PO" },
          { label: "디자이너", value: "디자이너" },
        ]}
      />
    </>
  );
}

export default App;
