import "./index.css";
import { Table } from "./components/Table/Table";
import { AddButton } from "./components/Button/AddButton";
import styles from "./App.module.css";
import { ConfigProvider } from "antd";
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily:
            'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif',
        },
      }}
    >
      <main>
        <header className={styles.header}>
          <h1>회원 목록</h1>
          <AddButton />
        </header>
        <Table />
      </main>
    </ConfigProvider>
  );
}

export default App;
