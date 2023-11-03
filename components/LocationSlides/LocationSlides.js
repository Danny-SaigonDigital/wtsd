import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import classNames from 'classnames/bind';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './LocationSlides.module.scss';

const LocationSlides = ({ model }) => {
    const swiperRef = useRef();
    let cx = classNames.bind(styles);

    const prevAction = () => {
		swiperRef.current?.slidePrev();
	};

	const nextAction = () => {
		swiperRef.current?.slideNext();
	}

    return (
        <div className='lg:px-[60px] py-[100px] px-[20px]'>
            <h2 className='font-semibold max-w-3xl lg:text-6xl text-4xl text-center m-auto mb-8'> {model.title} </h2>
            <p className='text-center m-auto text-[#878787] text-lg'>{model.subtitle}</p>
            <div className='w-full flex justify-between mb-5'>
                <Button
                    onClick={prevAction}
                    className='shadow-lg md:w-[70px] md:h-[70px] w-[50px] h-[50px] rounded-lg location-prev border-none'>
                    <LeftOutlined />
                </Button>
                <Button onClick={nextAction} className='shadow-lg w-[70px] h-[70px] rounded-lg location-next border-none'>
                    <RightOutlined />
                </Button>
            </div>
            <Swiper
                ref={swiperRef}
                slidesPerView={1}
                spaceBetween={10}
                className={cx(['p-[15px]'])}
                loop={model.locations.length > 3}
                centeredSlides={model.locations.length > 3}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper
                    // swiperRef.current.on('slideChange', (s) => {console.log(s)})
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.50': {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    }
                }}
            >
                {model.locations.map((location, index) => (
                    <SwiperSlide key={'location-' + index} className={'overflow-hidden shadow-lg rounded-lg location-slide'}>
                        <div className='bg-white'>
                            {location.thumbnail?.sourceUrl && <img src={location.thumbnail?.sourceUrl} alt='' />}
                            <div className='p-4 slide-body'>
                                <h6 className={cx(['font-semibold lg:text-2xl text-lg mb-2'])}>{location.name}, {location.country}</h6>
                                <p className='text-sm'>{location.description} {index}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default LocationSlides;