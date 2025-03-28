import {
  Table as AntdTable,
  Checkbox,
  TableColumnsType,
  TableProps,
} from "antd";
import { DataRecord } from "../../schema/record";
import { useMemo } from "react";
import styles from "./Table.module.css";
import { FilterContent } from "../Filter/FilterContent";
import { MenuButton } from "../Button/MenuButton";
import { useRecordStore } from "../../store/recordStore";
import { getFinalOptionWithKey } from "../../utils/array";

export const Table = () => {
  const { records: tableData } = useRecordStore();
  const columns: TableColumnsType<DataRecord> = useMemo(
    () => [
      {
        title: "이름",
        dataIndex: "name",
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
          <FilterContent
            options={getFinalOptionWithKey(tableData, "name")}
            selectedKeys={selectedKeys}
            setSelectedKeys={setSelectedKeys}
            confirm={confirm}
          />
        ),
        onFilter: (value, record) => record.name === value,
      },
      {
        title: "주소",
        dataIndex: "address",
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
          <FilterContent
            options={getFinalOptionWithKey(tableData, "address")}
            selectedKeys={selectedKeys}
            setSelectedKeys={setSelectedKeys}
            confirm={confirm}
          />
        ),
        onFilter: (value, record) => record?.address === value,
      },
      {
        title: "메모",
        dataIndex: "memo",
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
          <FilterContent
            options={getFinalOptionWithKey(tableData, "memo")}
            selectedKeys={selectedKeys}
            setSelectedKeys={setSelectedKeys}
            confirm={confirm}
          />
        ),
        onFilter: (value, record) => record?.memo === value,
      },
      {
        title: "가입일",
        dataIndex: "joinDate",
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
          <FilterContent
            options={getFinalOptionWithKey(tableData, "joinDate")}
            selectedKeys={selectedKeys}
            setSelectedKeys={setSelectedKeys}
            confirm={confirm}
          />
        ),
        onFilter: (value, record) => record?.joinDate === value,
      },
      {
        title: "직업",
        dataIndex: "job",
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
          <FilterContent
            options={[
              {
                value: "개발자",
                text: "개발자",
              },
              {
                value: "PO",
                text: "PO",
              },
              {
                value: "디자이너",
                text: "디자이너",
              },
            ]}
            selectedKeys={selectedKeys}
            setSelectedKeys={setSelectedKeys}
            confirm={confirm}
          />
        ),
        onFilter: (value, record) => record?.job === value,
      },
      {
        title: "이메일 동의",
        dataIndex: "emailConsent",
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
          <FilterContent
            options={[
              {
                value: "true",
                text: "동의",
              },
              {
                value: "false",
                text: "미동의",
              },
            ]}
            selectedKeys={selectedKeys}
            setSelectedKeys={setSelectedKeys}
            confirm={confirm}
          />
        ),
        onFilter: (value, record) => {
          const boolValue = value === "true";
          return Boolean(record?.emailConsent) === boolValue;
        },
        render: (value: boolean) => (
          <Checkbox checked={value} className={styles.checkbox} />
        ),
      },
      {
        dataIndex: "key",
        render: (value: string) => <MenuButton keyID={value} />,
      },
    ],
    [tableData]
  );

  /**
   * 체크 박스 컬럼 테스트용 함수
   */
  const rowSelection: TableProps<DataRecord>["rowSelection"] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataRecord[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: DataRecord) => ({
      name: record.name,
    }),
  };

  return (
    <AntdTable<DataRecord>
      columns={columns}
      dataSource={tableData}
      rowSelection={rowSelection}
    />
  );
};
