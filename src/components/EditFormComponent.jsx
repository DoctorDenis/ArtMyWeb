import { useLocation, useNavigate } from "react-router-dom";
import { submitUser } from "../services/usersAPI";
import { Button, Form, Input, Select } from "antd";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const { Option } = Select;

function EditFormComponent() {
  const location = useLocation();
  const navigate = useNavigate();

  const { id, name, email, gender, status } = location.state;

  const onSubmit = (values) => {
    toast
      .promise(submitUser({ ...values, id }), {
        pending: "Working on that. Please wait ... ⏳",
        success: "User info successfully submited 👌",
        error: "Oops! Something went wrong. Try again in a moment 😔",
      })
      .then(navigate("/users"));
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onSubmit}
      >
        <Form.Item label="Name" name="name" initialValue={name}>
          <Input placeholder="Your name" />
        </Form.Item>

        <Form.Item label="Email" name="email" initialValue={email}>
          <Input placeholder="Your email" />
        </Form.Item>

        <Form.Item name="gender" label="Gender" initialValue={gender}>
          <Select placeholder="Select your gender">
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>

        <Form.Item name="status" label="Status" initialValue={status}>
          <Select placeholder="Select your status">
            <Option value="active">active</Option>
            <Option value="inactive">inactive</Option>
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default EditFormComponent;
