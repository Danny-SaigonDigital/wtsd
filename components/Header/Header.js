import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { Container, NavigationMenu, SkipNavigationLink } from '../../components';
import styles from './Header.module.scss';
import logo from '../../assets/images/Logo.png';
import { BarsOutlined } from '@ant-design/icons'
let cx = classNames.bind(styles);

export default function Header({
	menuItems,
}) {
	const [isNavShown, setIsNavShown] = useState(false);
	const [hasBackground, setHasBackground] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setHasBackground(window.scrollY > 400);
		});
	}, []);
	return (
		<header className={'component fixed top-0 left-0 z-50 w-full transition-all ' + (hasBackground ? 'bg-black' : '')}>
			<SkipNavigationLink />
			<Container>
				<div className={cx('navbar')}>
					<Link href="/">
						<a>
							<img className='cursor-pointer' alt='Logo' src={logo.src} />
						</a>
					</Link>
					<button
						type="button"
						className={cx('nav-toggle')}
						onClick={() => setIsNavShown(!isNavShown)}
						aria-label="Toggle navigation"
						aria-controls={cx('primary-navigation')}
						aria-expanded={isNavShown}
					>
						<BarsOutlined className='text-white text-4xl' />
					</button>
					<NavigationMenu
						className={cx(['primary-navigation', isNavShown ? 'show' : undefined])}
						menuItems={menuItems}
					/>
				</div>
			</Container>
		</header>
	);
}
