import React from 'react';
import { Space, Table, Tag } from 'antd';
import faker from 'faker';
import type { TableProps } from 'antd';
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [];
const generateFakeData = (count: number): DataType[] => {
  return Array.from({ length: count }, () => ({
    key: faker.datatype.uuid(),
    name: faker.name.findName(),
    age: faker.datatype.number({ min: 18, max: 70 }),
    address: faker.address.streetAddress(),
    tags: [faker.lorem.word(), faker.commerce.productAdjective()],
  }));
};

// 在组件中使用生成的假数据
const App: React.FC = () => {
  const fakeData = generateFakeData(6); // 你可以调整生成数据的数量

  return <Table columns={columns} dataSource={fakeData} />;
};

export default App;

