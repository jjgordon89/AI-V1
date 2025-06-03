import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import styles from './Home.module.css'; // Import CSS Module

const { TextArea } = Input;

const AppContact = () => {
    // Assuming 'block', 'container-fluid', 'titleHolder', and 'login-form' (and its button) are global or antd specific
    return (
        <div className={`block ${styles.contactBlock}`} style={{marginTop:'70px'}}> {/* Applied styles.contactBlock */}
          <div className="container-fluid">
            <div className="titleHolder">
              <h2>Get In Touch</h2>
              <p>We would love to hear from you. Tell us what's on your mind. </p>
            </div>
            {/* The styling for .ant-form and textarea within contactBlock will be applied via styles.contactBlock from the CSS module */}
            <Form
              name="normal_login"
              className="login-form" // This class is kept, might be for global styling or antd's own purposes
              initialValues={{ remember: true }}
        >
        <Form.Item
            name="fullname"
            rules={[{ required: true, message: 'Please input your full name!' }]}
        >
            <Input placeholder="Full Name" />
        </Form.Item>

        <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
        >
            <Input
            type="email"
            placeholder="Email"
            />
        </Form.Item>

        <Form.Item
            name="subject"        >
            <Input placeholder="Subject Name" />
        </Form.Item>

        <Form.Item
            name="message"        >
            <TextArea placeholder="Message" />
        </Form.Item>
        
        <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject('Should accept agreement'),
          },
        ]}
      >
        <Checkbox>
          I agree with terms and conditions
        </Checkbox>
      </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
            Submit
            </Button>
        </Form.Item>
        </Form>
        </div>
        </div>
    );
}

export default AppContact;
