import { RightOutlined } from '@ant-design/icons';
import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { SEO } from '../components';
import { BlogHero } from '../components/BlogHero';
import { BlogList } from '../components/BlogList';
import SubcribeBlock from '../components/SubcribeBlock/SubcribeBlock';
const PostsPage = () => {
  const { data } = useQuery(PostsPage.query);
  const posts = data?.posts?.nodes || [];
  return (
    <>
      <SEO title={'WTSD'} description={''} />
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
      <div className='main-container'>
        <BlogList posts={posts} />
      </div>
      <SubcribeBlock />
    </>
  );
};
PostsPage.query = gql`
    query getPosts {
        posts {
            nodes {
              id
              title
              content
              slug
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
export default PostsPage;