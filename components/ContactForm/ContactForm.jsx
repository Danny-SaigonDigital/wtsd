import { EnvironmentFilled, MailOutlined, PhoneFilled } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';
import HubspotForm from 'react-hubspot-form';

const ContactForm = ({ model }) => {

    return (
        <div className='lg:px-[60px] py-[100px] px-[20px] main-container'>
            <Row gutter={[20, 20]}>
                <Col lg={8} md={24} sm={24} xs={24}>
                    <div className='w-full bg-white app-shadow lg:px-[41px] py-[74px] px-4 rounded-[10px]'>
                        <HubspotForm
                            portalId='44361458'
                            formId='dec9484c-544d-4cb5-99ba-fda5c6e8e4b3'
                            onReady={(form) => console.log('Form ready!')}
                            onSubmit={() => console.log('okokoko')}
                            loading={<p>Loading...</p>}
                        />
                    </div>
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