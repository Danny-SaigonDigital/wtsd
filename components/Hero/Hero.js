import { DownOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Form, Row, Select } from 'antd';
import className from 'classnames/bind';
import React, { useLayoutEffect, useRef } from 'react';
import { Container } from '../../components';
import styles from './Hero.module.scss';
import { gsap } from 'gsap';
let cx = className.bind(styles);
React.useLayoutEffect = React.useEffect 

export default function Hero({ title, description, popularPlaces = [], className, textAlign = 'center', backgroundImage }) {
	const getLabel = (label) => {
		return <span className='text-black'> {label} <DownOutlined className='ms-2 text-[10px]' /></span>
	}
	const titleRef = useRef();
	const descriptionRef = useRef();

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo(titleRef.current, {
				y: 300
			}, {
				y: 0,
				duration: 0.5,
			})
			gsap.fromTo(descriptionRef.current, {
				y: 300
			}, {
				y: 0,
				duration: 0.5,
				delay: 0.5
			})
		})
		return () => ctx.revert();
	}, []);
	return (
		<div
			style={{ backgroundImage: `url(${backgroundImage})`}}
		 	className={cx(['component', className, 'bg-stone-800 pt-[200px] bg-no-repeat bg-center mask bg-cover'])}
		>
			<Container className={'relative z-10'}>
				<h1 
					ref={titleRef} 
					className={`lg:text-[90px] text-5xl lg:leading-[110px] text-${textAlign} text-white max-w-[614px] font-bold`}> 
						{title}
				</h1>
				<p 
					ref={descriptionRef} 
					className={`max-w-md text-lg text-${textAlign} text-[#CFCFCF] mt-9 mb-7 leading-9 font-medium`}> 
					{description} 
				</p>
				<Form className='bg-white lg:rounded-full rounded-md pl-6 p-2 flex md:flex-nowrap flex-wrap max-w-[736px]'>
					<Row gutter={[10, 10]} className='w-full'>
						<Col lg={8} md={8} sm={8} xs={24}>
							<Form.Item className='mb-0 h-full flex items-center'>
								<Select
									className='w-min text-start'
									bordered={false}
									placeholder={getLabel('Location')}
									suffixIcon={false}
									options={[
										{ value: 'hcm', label: 'HCM City' },
										{ value: 'dalat', label: 'Da Lat' },
										{ value: 'phanthiet', label: 'Phan Thiet'},
									]}
								/>
							</Form.Item>
						</Col>
						<Col lg={8} md={8} sm={8} xs={24}>
							<Form.Item className='mb-0 h-full flex items-center'>
								<DatePicker
									className='antd-black-placeholder w-full'
									placeholder='Date'
									bordered={false}
									suffixIcon={false}
								/>
							</Form.Item>
						</Col>
						<Col lg={8} md={8} sm={8} xs={24}>
							<Form.Item className='mb-0 h-full flex items-center'>
								<Select
									className='w-full text-start'
									placeholder={getLabel('People')}
									suffixIcon={false}
									bordered={false}
									options={[
										{ value: 'danny', label: 'Danny' },
										{ value: 'chow', label: 'Chow' },
									]}
								/>
							</Form.Item>
						</Col>
					</Row>
					<Button className='rounded-full bg-black md:mt-0 mt-4 px-8 py-3 h-full border-none shadow-none' type='primary'>
						Explore now
					</Button>
				</Form>
				<p className='text-white my-12 text-start'>Popular Place: {" "}
					<span className='text-[#CFCFCF]'>{popularPlaces.join(', ')}</span> 
				</p>
			</Container>
		</div>
	);
}
