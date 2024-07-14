// src/App.tsx
import React from 'react';
import { Space, Table, Tag } from 'antd';
import fake from 'faker'

// 引入 faker 来生成随机数据
const faker = fake.faker;

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns = [
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

// 使用 fakejs 生成数据
const data: DataType[] = Array.from({ length: 100 }).map((_, index) => ({
  key: `_${index}`,
  name: faker.name.findName(),
  age: faker.random.number({ min: 20, max: 56 }),
  address: faker.address.streetAddress(),
  tags: [faker.lorem.word(), faker.lorem.word()],
}));

const App: React.FC = () => <Table<DataType> columns={columns} dataSource={data} />;

export default App;