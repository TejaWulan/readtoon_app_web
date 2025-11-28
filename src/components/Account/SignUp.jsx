import React, { useState } from "react";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
} from "antd";

const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [{ value: "xihu", label: "West Lake" }],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [{ value: "zhonghuamen", label: "Zhong Hua Men" }],
      },
    ],
  },
];

// Layout label dan input
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

  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{ width: 70 }}
        defaultValue={"86"}
        options={[
          { label: "+86", value: "86" },
          { label: "+87", value: "87" },
        ]}
      />
    </Form.Item>
  );

  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{ width: 70 }}
        defaultValue={"USD"}
        options={[
          { label: "$", value: "USD" },
          { label: "¥", value: "CNY" },
        ]}
      />
    </Form.Item>
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F8F9FA",
        padding: "40px 20px",
      }}
    >
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        style={{
          maxWidth: 600,
          margin: "0 auto",
          background: "#fff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.06)",
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
                return Promise.reject(
                  new Error("Passwords do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* Nickname */}
        <Form.Item
          name="nickname"
          label="Nickname"
          rules={[{ required: true, message: "Please input nickname!" }]}
        >
          <Input />
        </Form.Item>

        {/* Residence */}
        <Form.Item
          name="residence"
          label="Residence"
          rules={[{ required: true, message: "Please select residence!" }]}
        >
          <Cascader options={residences} />
        </Form.Item>

        {/* Phone */}
        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, message: "Please input phone!" }]}
        >
          <Space.Compact block>
            {prefixSelector}
            <Input />
          </Space.Compact>
        </Form.Item>

        {/* Balance */}
        <Form.Item name="balance" label="TopUp Balance">
          <Space.Compact block>
            <InputNumber style={{ width: "100%" }} />
            {suffixSelector}
          </Space.Compact>
        </Form.Item>

        {/* Intro */}
        <Form.Item
          name="intro"
          label="Intro"
          rules={[{ required: true, message: "Please input Intro!" }]}
        >
          <Input.TextArea showCount maxLength={100} />
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
          <Checkbox>
            I agree to the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
            className="register-btn"
          >
            Register
          </Button>
        </Form.Item>
      </Form>

      {/* CUSTOM CSS BUTTON ACTIVE */}
      <style>{`
        .register-btn:active {
          background-color: #66C7FF !important;
          border-color: #66C7FF !important;
        }
      `}</style>
    </div>
  );
}
