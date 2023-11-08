import { ArrowRightOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import classNames from 'classnames/bind';
import Image from 'next/image';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from '../Container';
import styles from './ServiceBlock.module.scss';

const Services = ({ model }) => {
    const swiperRef = useRef();
    let cx = classNames.bind(styles);

    const prevAction = () => {
        swiperRef.current?.slidePrev();
    };

    const nextAction = () => {
        swiperRef.current?.slideNext();
    }
    return (
        <div style={{ backgroundImage: `url(${model?.backgroundImage?.sourceUrl})` }}
            className={cx(['services', 'md:px-[60px] py-8 px-4 relative bg-bottom mask'])}>
            <div className='relative z-20'>
                <h2 className='font-semibold max-w-3xl md:text-6xl text-4xl text-center m-auto mb-8 text-white'>{model?.title}</h2>
                <p className='text-center m-auto text-[#EFEFEF] text-lg md:mb-0 mb-4'>{model?.subtitle}</p>
                <div className='w-full flex justify-between mb-5'>
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
            <Container>
                <Swiper
                    ref={swiperRef}
                    slidesPerView={1}
                    spaceBetween={10}
                    className={cx(['md:p-[15px] px-[5px] z-40'])}
                    loop={model.services.length > 3}
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
                    {model.services.map((slide, i) => (
                        <SwiperSlide key={'service-' + i} className='overflow-hidden shadow-lg rounded-lg'>
                            <div className='bg-white'>
                                <div className=' mx-4 py-10'>
                                    <div className='p-4 bg-black rounded-lg w-fit overflow-hidden'>
                                        <Image src={slide.icon?.sourceUrl} width={slide.icon?.mediaDetails?.width || 100} height={slide.icon?.mediaDetails?.height || 100} alt={''} />
                                    </div>
                                </div>
                                <div className='p-4 pt-0 slide-body'>
                                    <h6 className={cx(['font-semibold lg:text-2xl text-lg mb-3'])}>{slide.name}</h6>
                                    <p className='text-lg text-[#858585] font-normal max-w-[300px]'>{slide.description}</p>
                                    <Button className='my-10 font-bold text-lg border-none ps-0 flex items-center shadow-none'>
                                        <span className='mr-2'>Learn more</span>
                                        <ArrowRightOutlined />
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div>
    );
};

export default Services;