import React from 'react';
import { Container, Main, SEO } from '../../components';
import { BlogHero } from '../../components/BlogHero';
import { RightOutlined } from '@ant-design/icons';
import ContactForm from '../../components/ContactForm/ContactForm';
import SubcribeBlock from '../../components/SubcribeBlock/SubcribeBlock';
import { gql, useQuery } from '@apollo/client';

const Contact = () => {
    const { data } = useQuery(Contact.query);
    const { contactPageFields } = data?.page;
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
                    <ContactForm model={contactPageFields} />
                </Container>
                <SubcribeBlock title={'Subcribe to get special price'} subtitle={'Dont wanna miss something? subscribe right now and get special promotion and monthly newsletter'}/>
            </Main>
        </>
    );
};
Contact.query = gql`
    query GetContactPageData {
        page(id: "/contact", idType: URI) {
            contactPageFields {
                title
                description
                email
                phoneNumber
                address
            }
        }
    } 
`
export default Contact;