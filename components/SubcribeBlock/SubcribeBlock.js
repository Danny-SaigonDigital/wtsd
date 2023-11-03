import { Button, Input } from 'antd';
import React from 'react';

const SubcribeBlock = ({ title, subtitle }) => {
    return (
        <div className='bg-black py-12 flex flex-col justify-center items-center lg:px-8 px-4'>
            <h2 className='font-semibold max-w-4xl md:text-6xl text-4xl text-center m-auto mb-8 text-white'>{title}</h2>
            <p className='text-center m-auto max-w-2xl text-[#EFEFEF] text-lg md:mb-0 mb-4'>{subtitle}</p>
            <div className='relative lg:my-[100px] my-[64px] max-w-2xl w-full bg-white rounded-full overflow-hidden'>
                <Input placeholder='Type your email here' className='rounded-full w-full p-4 px-8 lg:text-xl text-lg' />
                <Button type='primary' className='bg-black text-white text-xl lg:px-8 px-4 shadow-none border-none rounded-full absolute right-2 top-[50%] h-4/5 -translate-y-1/2'>
                    Subcribe
                </Button>
            </div>
        </div>
    );
};

export default SubcribeBlock;