import React from 'react';
import { BlogHero } from '../../components/BlogHero';
import { Main, SEO } from '../../components';
import SubcribeBlock from '../../components/SubcribeBlock/SubcribeBlock';
import { BlogList } from '../../components/BlogList';
import { RightOutlined } from '@ant-design/icons';
import { gql, useQuery } from '@apollo/client';

const Blog = () => {
    const { data } = useQuery(Blog.query);
    const posts = data?.posts?.nodes || [];
    return (
        <>
            <SEO title={'WTSD'} description={''} />
            <Main>
                <BlogHero
                    title='Tipe & Article'
                    separator={<RightOutlined className='text-white flex items-center h-full' />}
                    breadcrumbItems={[
                        {
                            title: 'Home',
                            href: '/',
                        },
                        {
                            title: 'Blog',
                        },
                    ]} />
                <BlogList posts={posts} />
                <SubcribeBlock title={'Subcribe to get special price'} subtitle={'Dont wanna miss something? subscribe right now and get special promotion and monthly newsletter'} />
            </Main>
        </>
    );
};
Blog.query = gql`
    query getPosts {
        posts {
            nodes {
              id
              title
              content
              blogFields {
                isHighlight
                blogDetail {
                  overview
                  tags {
                    tag
                  }
                  thumbnail {
                    sourceUrl
                    mediaDetails {
                      width
                      file
                    }
                  }
                }
              }
            }
          }
    }
`
export default Blog;