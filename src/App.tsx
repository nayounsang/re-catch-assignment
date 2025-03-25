import "./index.css";
import { Table } from "./components/Table/Table";
import { AddButton } from "./components/Button/AddButton";
import styles from "./App.module.css";
function App() {
  return (
    <main>
      <header className={styles.header}>
        <h1>회원 목록</h1>
        <AddButton />
      </header>
      <Table />
    </main>
  );
}

export default App;
