import React from 'react';
import { Container, Main, SEO } from '../../components';
import { BlogHero } from '../../components/BlogHero';
import { RightOutlined } from '@ant-design/icons';
import ContactForm from '../../components/ContactForm/ContactForm';
import SubcribeBlock from '../../components/SubcribeBlock/SubcribeBlock';

const Contact = () => {
    return (
        <>
            <SEO title={'WTSD'} description={''} />
            <Main>
                <BlogHero
                    title='Contact'
                    separator={<RightOutlined className='text-white flex items-center h-full' />}
                    breadcrumbItems={[
                        {
                            title: 'Home',
                            href: '/',
                        },
                        {
                            title: 'Contact',
                        },
                    ]}
                />
                <Container>
                    <ContactForm />
                </Container>
                <SubcribeBlock title={'Subcribe to get special price'} subtitle={'Dont wanna miss something? subscribe right now and get special promotion and monthly newsletter'}/>
            </Main>
        </>
    );
};

export default Contact;