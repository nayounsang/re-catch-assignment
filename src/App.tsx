import { PlusOutlined } from "@ant-design/icons"
import { Button } from "./components/Button"
import { MenuButton } from "./components/MenuButton"


function App() {
  

  return (
    <>
    <Button icon={<PlusOutlined />} text="추가" />
    <Button icon={<PlusOutlined />} text="추가" disabled/>
    <MenuButton />
    </>
  )
}

export default App  
