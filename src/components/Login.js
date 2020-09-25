import React, { useState, useEffect } from 'react';
import * as routes from '../routes/routes';
import { useHistory } from 'react-router-dom';
import firebase from '../firebase';
import isLoggedIn from '../helper/is_logged_in';
import {Layout, Alert, Form, Input, Button} from 'antd';


function Login() {
  const [ form ] = Form.useForm();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [loading, setLoading] = useState([]);
  const history = useHistory();

  useEffect(() => {
    firebase
    .auth()
    .onAuthStateChanged(authUser => {
        if(authUser){
          history.push(routes.APP)   
        }
    })
  })

  function onFinish( e ) {
    setLoading([true])
    firebase 
      .auth()
      .signInWithEmailAndPassword(e.email, e.password)
      .then(() => {
        setLoading([false])
        // setEmail('');
        // setPassword('');
        history.push(routes.APP);
      })
      .catch((err) => {
        setLoading([false])
        // setEmail('');
        // setPassword('');
        setError({value: err.message, textErr: 'error'})
      })
    form.resetFields();
  }
    return (
      <Layout style={{padding:'20px',height: '100vh', width: '100%', display: 'flex', backgroundColor: '#f0f0f0'}}>
        <div style={{textAlign: 'center', fontSize: '146px', fontWeight: '800'}}>PK</div>
        <Layout.Content style={{borderTop: '3px solid  #1890ff', margin: '0 auto', marginTop: '30px', backgroundColor: "white", padding: '23px', width: '100%', maxWidth: '412px', flex: '0 auto', borderRadius: '3px', boxShadow: '0px 0px 16px -1px rgba(0,0,0,0.36)'}}>
          <Form form={form} onFinish={onFinish} >
            <div style={{marginBottom: '17px'}}>
            <Alert message={error.value} type={error.textErr ? error.textErr : null} />
              </div>
              <Form.Item label="Email"
                         name="email"
                         rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}>
                  <Input/>
              </Form.Item>
              <Form.Item label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}>
                  <Input.Password />
              </Form.Item>
              <Form.Item style={{float: 'right'}}>
                  <Button type="primary" htmlType="submit" loading={loading[0]}>Submit</Button>
              </Form.Item>
          </Form>
        </Layout.Content>
      </Layout>
    )
}

export default isLoggedIn(Login);