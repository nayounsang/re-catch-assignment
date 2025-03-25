import {
  Table as AntdTable,
  Checkbox,
  TableColumnsType,
  TableProps,
} from "antd";
import { Record } from "../../schema/record";
import { useMemo } from "react";
import { getOptionWithKey } from "../../utils/Array";
import styles from "./Table.module.css";
import { FilterContent } from "../Filter/FilterContent";
import { MenuButton } from "../Button/MenuButton";
const tableData: Record[] = [
  {
    name: "홍길동",
    address: "서울시 강남구",
    memo: "메모",
    joinDate: new Date().toISOString(),
    job: "개발자",
    emailConsent: true,
  },
  {
    name: "이순신",
    address: "서울시 서초구",
    memo: "메모",
    joinDate: new Date().toISOString(),
    job: "개발자",
  },
  {
    name: "김철수",
    address: "서울시 강남구",
    memo: "메모",
    joinDate: new Date().toISOString(),
    job: "개발자",
  },
];

export const Table = () => {
  const columns: TableColumnsType<Record> = useMemo(
    () => [
      {
        title: "이름",
        dataIndex: "name",
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
          <FilterContent
            options={getOptionWithKey(tableData, "name")}
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
            options={getOptionWithKey(tableData, "address")}
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
            options={getOptionWithKey(tableData, "memo")}
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
            options={getOptionWithKey(tableData, "joinDate")}
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
            options={[{
                value: "개발자",
                text:"개발자",
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
        render: (value) => (
          <Checkbox checked={value} className={styles.checkbox} />
        ),
      },
      {
        title: "",
        dataIndex: "update",
        render: () => <MenuButton />,
      },
    ],
    []
  );

  const rowSelection: TableProps<Record>["rowSelection"] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: Record[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: Record) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <AntdTable<Record>
      columns={columns}
      dataSource={tableData}
      rowSelection={rowSelection}
    />
  );
};
