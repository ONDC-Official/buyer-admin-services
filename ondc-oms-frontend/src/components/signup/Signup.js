import { Form, Input, Row, Col, Button } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useState } from "react";

const Signup = () => {
  const [form] = useForm();
  const [isEmailForm, setIsEmailForm] = useState(true);
  const [email, setEmail] = useState(null);
  const [isOTPForm, setIsOTPForm] = useState();
  const [otp, setOTP] = useState(null);
  const [isSignupForm, setIsSignupForm] = useState(false);
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);
  const [formError, setFormError] = useState(true);


  const onFormValuesChange = async (values) => {
    try {
      await form.validateFields();
      setFormError(false);
    } catch (err) {
     let is_error = err.errorFields.length > 0 ? true : false;
      setFormError(is_error);
    }
  }

  const handleSendOTP = () => {
    // API to send OTP
    setIsEmailForm(false);
    setIsOTPForm(true);
    setFormError(true);
  };

  const handleVerifyOTP = () => {
    // API to verify thr OPT
    setIsOTPForm(false);
    setIsSignupForm(true);
    setFormError(true);
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
  };

  const renderGetOTPFlow = () => {
    return (
      <div>
        <Form
          form={form}
          name="form"
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
          size="large"
          layout="vertical"
          validateMessages={validateMessages}
          onValuesChange={onFormValuesChange}
        >
          <Form.Item
            label="Work email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
              },
            ]}
            style={{ marginBottom: "30px" }}
          >
            <Input
              placeholder="Work email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
        </Form>
        <Row justify="center">
          <Col span={24}>
            <Button
              size="large"
              shape="round"
              type="primary"
              disabled={formError}
              onClick={handleSendOTP}
              block
            >
              Get OTP
            </Button>
          </Col>
        </Row>
      </div>
    );
  };

  const renderAcceptOTPFlow = () => {
    return (
      <div>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
          size="large"
          layout="vertical"
          onValuesChange={onFormValuesChange}
          validateMessages={validateMessages}
        >
          <Form.Item
            label="Enter the OTP sent to your email"
            name="otp"
            rules={[
              {
                required: true,
              },
              { min: 5, message: 'Username must be minimum 5 characters.' },
            ]}
            style={{ marginBottom: "30px" }}
          >
            <Input placeholder="OTP" onChange={(e) => setOTP(e.target.value)} />
          </Form.Item>
        </Form>
        <Row justify="center">
          <Col span={24}>
            <Button
              size="large"
              shape="round"
              type="primary"
              disabled={formError}
              onClick={handleVerifyOTP}
              block
            >
              Verify
            </Button>
          </Col>
        </Row>
      </div>
    );
  };


  const onFinish = (values) => {
    setIsSignupSuccess(true);
    setIsSignupForm(false);

  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const renderSignUpForm = () => {
    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        size="large"

        onFinish={onFinish}
      >
        <Form.Item
          name={["user", "firstname"]}
          label="First Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "lastname"]}
          label="Last Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "country"]}
          label="Country"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "job-role"]}
          label="Job Role"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
            wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
              }}
        >
          <Button
            type="primary"
            htmlType="submit"
            shape="round">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };

  const renderSuccess = () => {
    return (<div>
        Success!
    </div>)
  }

  return (
    <div>
      {isEmailForm && renderGetOTPFlow()}
      {isOTPForm && renderAcceptOTPFlow()}
      {isSignupForm && renderSignUpForm()}
      {isSignupSuccess && renderSuccess()}
    </div>
  );
};

export default Signup;
