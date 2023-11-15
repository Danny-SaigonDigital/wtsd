import { FacebookFilled, YoutubeFilled, InstagramOutlined, TwitterCircleFilled, EnvironmentFilled, PhoneFilled, MailOutlined } from '@ant-design/icons';
import { Col, Row, Space } from 'antd';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/images/Logo-white.png';
import { Container } from '../../components';
import styles from './Footer.module.scss';

let cx = classNames.bind(styles);

export default function Footer({ title, menuItems }) {
	const year = new Date().getFullYear();

	return (
		<footer className='pt-[60px]'>
			<Container className={'pb-[60px]'}>
				<Row gutter={[20, 50]}>
					<Col lg={6} md={24} sm={24} xs={24}>
						<Image className='w-full' src={logo} alt='' />
					</Col>
					<Col lg={6} md={24} sm={24} xs={24}>
						<div className='lg:px-12'>
							<h6 className='text-2xl mb-4'>Contact Information</h6>
							<p className='text-lg text-[#6C6C6C] mb-2'> <EnvironmentFilled className='text-black mr-1' /> 732 Despard St, Atlanta</p>
							<p className='text-lg text-[#6C6C6C] mb-2'><PhoneFilled className='text-black mr-1' /> +97 888 8888</p>
							<p className='text-lg text-[#6C6C6C] mb-2'><MailOutlined className='text-black mr-1' /> info@traveller.com</p>
						</div>
					</Col>
					<Col lg={6} md={24} sm={24} xs={24}>
						<div className='lg:px-12 flex flex-col'>
							<h6 className='text-2xl mb-4'>Quick Link</h6>
							<Link href='/'>
								<a className='text-lg text-[#6C6C6C] mb-2'>Home</a>
							</Link>
							<Link href='/'>
								<a className='text-lg text-[#6C6C6C] mb-2'>About Us</a>
							</Link>
							<Link href='/'>
								<a className='text-lg text-[#6C6C6C] mb-2'>Tours</a>
							</Link>
							<Link href='/'>
								<a className='text-lg text-[#6C6C6C] mb-2'>Contact</a>
							</Link>
						</div>
					</Col>
					<Col lg={6} md={24} sm={24} xs={24}>
						<div className='lg:px-12'>
							<h6 className='text-2xl mb-4'>Follow Us</h6>
							<Space size={'middle'}>
								<FacebookFilled className='text-2xl' />
								<TwitterCircleFilled className='text-2xl' />
								<YoutubeFilled className='text-2xl' />
								<InstagramOutlined className='text-2xl' />
							</Space>
						</div>
					</Col>
				</Row>
			</Container>
			<div className='bg-black text-white text-center py-8'>
				<p className={cx('copyright ')}>Copyright © 2023 Danny Saigon Digital</p>
			</div>
		</footer>
	);
}
