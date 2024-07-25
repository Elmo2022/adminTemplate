// src/App.tsx
import React from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { AppstoreOutlined, DashboardOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Users from './views/Users';
import Products from './views/Products';
import ColorPicker from './components/colorPicker';
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;
import route from './router'
const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width={200} className="site-layout-background">
          <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="1">
              <Link to="/">
                <DashboardOutlined />
                Dashboard
              </Link>
            </Menu.Item>
            <Menu.SubMenu
              key="sub1"
              title={
                <span>
                  <AppstoreOutlined />
                  Management
                </span>
              }
            >
              <Menu.Item key="2">
                <Link to="/users">
                  Users
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/products">
                  Products
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="4">
                <Link to="/color-picker">
                  colorPicker
                </Link>
              </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            {route}
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
