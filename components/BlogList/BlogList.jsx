import { Breadcrumb, Button, Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogList = ({ posts }) => {
    const getBreadCrumb = (list) => {
        if (!list) {
            return [];
        }
        return list.map(t => {
            return {
                title: <span key={t.tag} className='text-2xl text-black font-thin'> {t.tag} </span>
            }
        })
    }
    return (
        <div className='lg:px-[60px] py-[100px] px-[20px]'>
            <h2 className='font-semibold max-w-3xl text-6xl text-center m-auto mb-8'>Tips & Article</h2>
            <p className='text-center m-auto text-[#878787] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-y-5 gap-x-0 mt-12" style={{ gridTemplateRows: 'masonry' }}>
                {posts.map((post, i) => (
                    <div
                        key={post.id}
                        className={"bg-white shadow-lg h-full"
                            + (i > 0 ? 'mt-8 ' : ' ')
                            + ((i + 1) % 2 === 0 ? 'col-span-2 row-span-2' : '')
                        }>
                        {((i + 1) % 2 === 0 && (
                            <div className='bg-stone-400 p-0'>
                                <img className='w-full mb-0' src={post.blogFields.blogDetail?.thumbnail?.sourceUrl} />
                            </div>
                        ))}
                        <div className="p-8">
                            <Breadcrumb
                                className='mb-4'
                                separator={<span className='text-black text-2xl font-thin'>|</span>}
                                items={getBreadCrumb(post.blogFields.blogDetail?.tags)}
                            />
                            <h5 className='text-4xl mb-6'>{post.title}</h5>
                            <p className='text-lg text-[#343434] font-light mb-12'>{post.blogFields.blogDetail?.overview}</p>
                            <Link href={'/blog/' + post.id}>
                                <a><Button type='primary' className='bg-black text-white rounded-full px-8 py-6 flex items-center text-2xl'>Read More</Button></a>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;