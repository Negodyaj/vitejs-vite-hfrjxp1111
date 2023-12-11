import { User } from "../../models/user";
import "./LoginPage.scss";
import { Button, Checkbox, Form, Input } from "antd";

type LoginPageProps = {
  logInHandler: (user: User) => void;
};

type LoginFormFields = {
  login?: string;
  password?: string;
  rememberMe?: boolean;
};

export const LoginPage = (props: LoginPageProps) => {
  const onFinish = async (values: LoginFormFields) => {
    console.log(values);
    // later user info will be received from the backend
    const user: User = {
      id: 1,
      login: values.login!,
      name: "Antoshka",
    };
    props.logInHandler(user);

    // good code starts from here :D
    const payload = {
      login: values.login,
      password: values.password,
    };

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/api/login",
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="login-page">
      <div className="container">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ rememberMe: true }}
          onFinish={onFinish}
          //onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<LoginFormFields>
            label="Username"
            name="login"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<LoginFormFields>
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 6, message: "Password is too short!" },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<LoginFormFields>
            name="rememberMe"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
