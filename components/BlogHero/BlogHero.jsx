import { Breadcrumb } from 'antd';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './BlogHero.module.scss';
import Link from 'next/link';
let cx = classNames.bind(styles);

const BlogHero = ({ breadcrumbItems = [], separator, title = '' }) => {
    return (
        <div className={cx(['container', 'bg-stone-800'])}>
            <div className='flex flex-col justify-center items-center '>
                <h2 className='lg:text-[64px] text-5xl text-white font-bold mb-8 max-w-3xl'>{title}</h2>
                <Breadcrumb
                    separator={separator}
                    itemRender={(item) => {
                        if (item.href) {
                            return (
                                <Link href={item.href}>
                                    <a className='text-2xl font-thin'> <span className='text-white'>{item.title}</span> </a>
                                </Link>
                            )
                        } return (
                            <span className='text-2xl font-thin text-white' > {item.title}</span>
                        )
                    }}
                    items={breadcrumbItems}
                />
            </div>
        </div>
    );
};

export default BlogHero;