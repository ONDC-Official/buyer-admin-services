import React from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Row,
  Col,
  Divider,
  Message,
  Typography,
} from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import appConfigs from '../../appConfig.js';
import { login } from '../../utils/request.js';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const authConfig = appConfigs?.AUTH;
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();

  const handleBasicAuthLogin = () => {
    login(username, password)
      .then(resp => router.push(authConfig?.successRedirectUri))
      .catch(error => console.log(error));
  };

  const renderBasicAuth = () => {
    return (
      <div>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
          size="large"
          >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
            style={{marginBottom: "30px"}}
            >
            <Input placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}

            >
            <Input.Password
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}/>
            <Row justify="start">
              { authConfig?.showForgotPassword &&
                (
                  <Col>
                    {/* <a href="/forgot-password">Forgot password?</a> */}
                  </Col>
                )
              }
            </Row>
          </Form.Item>
        </Form>
        <Row justify="center">
          <Col span={24}>
            <Button
              size="large"
              shape="round"
              type="primary"
              onClick={handleBasicAuthLogin}
              block>
              Login
            </Button>
          </Col>
        </Row>
      </div>
    );
  };

  const renderSSO = () => {
    return (
      <Row justify="center">
        <Col span={24}>
          <Button
            size="large"
            shape="round"
            type="danger"
            icon={<GoogleOutlined />}
            href={authConfig?.ssoRedirectUrl}
            block>
            Sign in with google
          </Button>
        </Col>
      </Row>
    );
  };

  const getAuthRenderer = (k) => {
    switch(k) {
    case "basic_auth":
      return renderBasicAuth;
    case "sso":
      return renderSSO;
    default:
      Message.error(`Invalid auth provider: ${k}`);
      return null;
    }
  };

  const renderAuthSeparator = () => {
    return (
      <Divider style={{height: "auto"}}>OR</Divider>
    );
  };

  const renderLogin = () => {
    let authElements = [];
    authConfig?.providers?.forEach((e, idx) => {
      const authRenderer  = getAuthRenderer(e);
      if (authRenderer) {
        authElements.push(authRenderer());
      }
      if (idx + 1 < authConfig?.providers?.length) {
        authElements.push(renderAuthSeparator());
      }
    });
    return authElements;
  };

  return (
    <div style={{margin: "2rem"}}>
      {renderLogin()}
    </div>
  )
}
