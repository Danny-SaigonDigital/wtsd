import { EnvironmentFilled, MailOutlined, PhoneFilled } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';

const ContactForm = ({ model }) => {
    return (
        <div className='lg:px-[60px] py-[100px] px-[20px]'>
            <Row gutter={[20, 20]}>
                <Col lg={8} md={24} sm={24} xs={24}>
                    <Form className='lg:px-8 px-4 py-12 rounded-md app-shadow'>
                        <Form.Item name={'name'}>
                            <Input className='rounded-md' placeholder='Your name' size='large' />
                        </Form.Item>
                        <Form.Item name={'email'}>
                            <Input className='rounded-md' placeholder='Your Email' size='large' />
                        </Form.Item>
                        <Form.Item name={'subject'}>
                            <Input className='rounded-md' placeholder='Subject' size='large' />
                        </Form.Item>
                        <Form.Item name={'message'}>
                            <Input.TextArea className='rounded-md' placeholder='Your Message' rows={4} />
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' className='bg-black text-white rounded-full px-8 py-6 flex items-center justify-center text-2xl w-full mt-6'>Send Message</Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col lg={16} md={24} sm={24} xs={24}>
                    <div className='lg:px-12 py-8 px-4'>
                        <h3 className='text-6xl mb-4'>{model?.title}</h3>
                        <p className='text-lg text-[#343434] mb-12 font-thin'>{model?.description}</p>
                        <h6 className="text-2xl mt-12 mb-4">Contact Information</h6>
                        <p className='text-lg mb-4'><PhoneFilled className='mr-1' />{model?.phoneNumber}</p>
                        <p className='text-lg mb-4'><MailOutlined className='mr-1' /> {model?.email}</p>
                        <p className='text-lg mb-4'> <EnvironmentFilled className='mr-1' /> {model?.address}</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ContactForm;