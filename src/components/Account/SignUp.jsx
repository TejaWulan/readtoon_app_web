import React from "react";
import { Button, Form, Input, InputNumber, Select, Space, Checkbox, message } from "antd";

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 8 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 16 } },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 },
  },
};

export default function SignUp() {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const body = {
      access: {
        source: "web",
      },
      payload: {
        email: values.email,
        password: values.password,
        name: values.name,
        username: values.username,
        phone: `${values.prefix}${values.phone}`,
        balance: values.balance || 0,
        currency: values.currency || "IDR",
        intro: values.intro,
        gender: values.gender,
      },
    };

    try {
      const res = await fetch("${API_URL}/account/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (data.status !== 7200) {
        message.error(data.message);
        return;
      }

      message.success("Register success!");
      form.resetFields();
    } catch (err) {
      message.error("Failed to register");
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle initialValue="+62">
      <Select
        style={{ width: 90 }}
        options={[
          { label: "+49", value: "+49" },
          { label: "+33", value: "+33" },
          { label: "+44", value: "+44" },
          { label: "+31", value: "+31" },
          { label: "+61", value: "+61" },
          { label: "+62", value: "+62" },
        ]}
      />
    </Form.Item>
  );

  const currencySelector = (
    <Form.Item name="currency" noStyle initialValue="IDR">
      <Select
        style={{ width: 90 }}
        options={[
          { label: "Rp (IDR)", value: "IDR" },
          { label: "$ (USD)", value: "USD" },
          { label: "£ (GBP)", value: "GBP" },
          { label: "€ (EUR)", value: "EUR" },
        ]}
      />
    </Form.Item>
  );

  return (
    <div style={{ minHeight: "100vh", padding: "40px 20px" }}>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
          margin: "0 auto",
          background: "#fff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
        }}
        scrollToFirstError
      >
        {/* Email */}
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            { type: "email", message: "Invalid email!" },
            { required: true, message: "Please input your E-mail!" },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Password */}
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        {/* Confirm Password */}
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match!"));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* Name */}
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please input name!" }]}
        >
          <Input />
        </Form.Item>

        {/* Username */}
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please input username!" }]}
        >
          <Input />
        </Form.Item>

        {/* Phone */}
        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, message: "Please input phone number!" }]}
        >
          <Space.Compact block>
            {prefixSelector}
            <Input />
          </Space.Compact>
        </Form.Item>

        {/* Balance */}
        <Form.Item name="balance" label="Top Up Balance">
          <Space.Compact block>
            <InputNumber style={{ width: "100%" }} />
            {currencySelector}
          </Space.Compact>
        </Form.Item>

        {/* Intro */}
        <Form.Item name="intro" label="Intro">
          <Input.TextArea maxLength={100} showCount />
        </Form.Item>

        {/* Gender */}
        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Please select gender!" }]}
        >
          <Select
            placeholder="select gender"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ]}
          />
        </Form.Item>

        {/* Agreement */}
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("You must accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>I agree to the agreement</Checkbox>
        </Form.Item>

        {/* Submit */}
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
