import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Rate } from 'antd';
import Image from 'next/image';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonial = ({ model }) => {
    const swiperRef = useRef();

    const prevAction = () => {
        swiperRef.current?.slidePrev();
    };

    const nextAction = () => {
        swiperRef.current?.slideNext();
    }

    return (
        <div className='lg:px-[60px] px-[20px] py-[100px]'>
            <h5 className=' uppercase tracking-widest lg:text-[30px] text-2xl'>Testimonial</h5>
            <h2 className='font-semibold max-w-3xl lg:text-6xl text-4xl mb-8'>{model.title}</h2>
            <p className='text-[#878787] lg:text-lg text-md max-w-2xl mb-8'>{model.subtitle}</p>
            <div className='md:p-[15px] px-[5px] flex justify-end'>
                <div className='flex w-full max-w-[200px] justify-between'>
                    <Button
                        onClick={prevAction}
                        className='flex items-center justify-center text-lg shadow-lg md:w-[70px] md:h-[70px] w-[50px] h-[50px] rounded-lg location-prev border-none bg-white'>
                        <LeftOutlined />
                    </Button>
                    <Button onClick={nextAction} className='flex items-center justify-center text-lg shadow-lg md:w-[70px] md:h-[70px] w-[50px] h-[50px] rounded-lg location-next border-none bg-white'>
                        <RightOutlined />
                    </Button>
                </div>
            </div>
            <Swiper
                ref={swiperRef}
                slidesPerView={1}
                spaceBetween={10}
                className={'md:p-[15px] px-[5px]'}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    '@1.00': {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    '@1.50': {
                        slidesPerView: 3,
                        spaceBetween: 80,
                    }
                }}
            >
                {model.testimonials && model.testimonials.map(testimonial => (
                    <SwiperSlide key={testimonial._id} className='mt-[70px]'>
                        <div className='bg-white app-shadow rounded-lg lg:p-6 p-4'>
                            <div className='flex flex-col justify-center items-center -translate-y-[90px]'>
                                <Image src={testimonial.userAvatar?.sourceUrl} height={130} width={130} className='h-[130px] w-[130px] object-cover' alt='' />
                                <h6 className='text-2xl font-semibold mt-6'> {testimonial.userName} </h6>
                                <p className='text-lg text-[#858585]'> {testimonial.userPosition} </p>
                            </div>
                            <div>
                                <Rate value={testimonial.rate} className='text-[#F4BC61] mb-4' disabled />
                                <p className='text-[#858585] text-lg max-w-xs'>{testimonial.comment}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonial;