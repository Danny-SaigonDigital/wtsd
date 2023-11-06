import { DownOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Form, Row, Select } from 'antd';
import className from 'classnames/bind';
import React from 'react';
import { Container } from '../../components';
import styles from './Hero.module.scss';
let cx = className.bind(styles);

export default function Hero({ title, subTitle, popularPlaces = [], className, textAlign = 'center' }) {
	const getLabel = (label) => {
		return <span className='text-black'> {label} <DownOutlined className='ms-2 text-[10px]' /></span>
	}

	return (
		<div className={cx(['component', className, 'bg-stone-800'])}>
			<Container>
				<h1 className={`lg:text-[90px] text-5xl lg:leading-[110px] text-${textAlign} text-white max-w-[614px] font-semibold`}> {title} </h1>
				<p className={`max-w-md text-lg text-${textAlign} text-[#CFCFCF] my-12`}> {subTitle} </p>
				<Form className='bg-white max-w-3xl lg:rounded-full rounded-md p-3 flex md:flex-nowrap flex-wrap'>
					<Row gutter={[10, 10]} className='w-full'>
						<Col lg={8} md={8} sm={24} xs={24}>
							<Form.Item className='mb-0'>
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
						<Col lg={8} md={8} sm={24} xs={24}>
							<Form.Item className='mb-0'>
								<DatePicker
									className='antd-black-placeholder w-full'
									placeholder='Date'
									bordered={false}
									suffixIcon={false}
								/>
							</Form.Item>
						</Col>
						<Col lg={8} md={8} sm={24} xs={24}>
							<Form.Item className='mb-0'>
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
					<Button className='rounded-full bg-black md:mt-0 mt-4' type='primary'>
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
