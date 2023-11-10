import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import { Footer, Header, NavigationMenu } from '../components';
import * as MENUS from '../constants/menus';

const Layout = ({ children }) => {
	const { data } = useQuery(Layout.query, {
		variables: Layout.variables(),
	});

	const menuItems = data?.headerMenuItems?.nodes ?? [];
	const footerMenu = data?.footerMenuItems?.nodes ?? [];
	return (
		<>
			<Header menuItems={menuItems} />
			{children}
			<Footer title={'WTSD'} menuItems={footerMenu} />
		</>
	);
};
Layout.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  query GetPageData(
    $headerLocationa: MenuLocationEnum
    $footerLocation: MenuLocationEnum
  ) {
    generalSettings {
      ...BlogInfoFragment
    }
    headerMenuItems: menuItems(where: { location: $headerLocationa }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;

Layout.variables = () => {
	return {
		headerLocationa: MENUS.PRIMARY_LOCATION,
		footerLocation: MENUS.FOOTER_LOCATION,
	};
};
export default Layout;