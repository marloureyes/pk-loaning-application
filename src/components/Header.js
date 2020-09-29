import React from 'react';
import { Layout, Menu, Button, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import AuthUserContext from '../auth/AuthUserContext'
import { UserOutlined } from '@ant-design/icons'

const { Sider, Header, Content } = Layout;

export default function HeaderLayout(props){
  let url = props.url;

  function handleLogout(e) {
    firebase
      .auth()
      .signOut()
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <a href="" >
          Profile
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={e => {handleLogout()}}>
          Logout
        </a>
      </Menu.Item>
    </Menu>
  )
    return (
        <Layout style ={{height: '100vh'}}>
          <Sider collapsible>
            <Menu theme="dark" mode='inline' defaultSelectedKeys={['']}>
              <div className="logo" style={{textAlign: "center", padding: '29px'}}>
                <h1 style={{color: 'white', fontWeight: '900', fontSize: '31px'}}>PK</h1>
              </div>
              <Menu.Item key='1'>
                <Link to={`${url}form`}>Form</Link>
              </Menu.Item>
              <Menu.Item key='2'>
                <Link to={`${url}list`}>List</Link>
              </Menu.Item>
            </Menu>
          </Sider> 
          <Layout>
            <Header style={{backgroundColor: '#fff', padding: '0 17px'}}>
              <AuthUserContext.Consumer> 
                {authUser => 
                  <div style={{maxWidth: '800', display: 'flex', justifyContent: "flex-end", alignItems: 'center'}}>
                    <p style={{margin: '0'}}>Hello, {authUser.auth.email}</p>
                    <div style={{marginLeft: '20px'}}>
                      <Dropdown overlay={menu} placement="bottomRight">
                        <Button icon={<UserOutlined />} shape="circle" />
                      </Dropdown>
                    </div>
                </div> }
              </AuthUserContext.Consumer>
            </Header>
            <Content style={{ margin: '16px'}}>
            <div style={{ backgroundColor: '#fff', padding: 24, minHeight: 360, width: '100%' }}>
               {props.children}
            </div>
             
            </Content>
            </Layout>
        </Layout>
    )
}