import { useState } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { Container, NavigationMenu, SkipNavigationLink } from '../../components';
import styles from './Header.module.scss';
import logo from '../../assets/images/Logo.png';
import Image from 'next/image';
let cx = classNames.bind(styles);

export default function Header({
  menuItems
}) {
  const [isNavShown, setIsNavShown] = useState(false);

  return (
    <header className={cx('component bg-black')}>
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
            ☰
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
