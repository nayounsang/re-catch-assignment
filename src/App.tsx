import "./index.css"
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "./components/Button/Button";
import { MenuButton } from "./components/Button/MenuButton";
import TextArea from "antd/es/input/TextArea";
import { Checkbox, DatePicker } from "antd";
import { Select } from "./components/Select";
import { FilterTrigger } from "./components/Filter/FilterTrigger";

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
      <Checkbox/>
      <FilterTrigger label="필터" />
    </>
  );
}

export default App;
