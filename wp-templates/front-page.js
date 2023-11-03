import { gql, useQuery } from '@apollo/client';
import {
	Hero,
	Main,
	SEO
} from '../components';
import { BlogInfoFragment } from '../fragments/GeneralSettings';

import { LocationSlides } from '../components/LocationSlides';
import { PartnerBlock } from '../components/PartnerBlock';
import { ServiceBlock } from '../components/ServiceBlock';
import SubcribeBlock from '../components/SubcribeBlock/SubcribeBlock';
import { Testimonial } from '../components/Testimonial';

export default function Component() {
	const { data } = useQuery(Component.query);

	const { title: siteTitle, description: siteDescription } =
		data?.generalSettings;
	const  { hero, locationBlock, serviceBlock, partnerBlock, testimonialBlock } = data?.page?.acfFields
	const popularPlaces = ['HCM City', 'Da Lat', 'Da Nang'];

	return (
		<>
			<SEO title={siteTitle} description={siteDescription} />
			<Main>
				<Hero
					title={hero.title}
					textAlign={'start'}
					subTitle={hero.subTitle}
					popularPlaces={popularPlaces}
				/> 
				<LocationSlides model={locationBlock} />
				<ServiceBlock model={serviceBlock} />
				<PartnerBlock model={partnerBlock} />
				<Testimonial model={testimonialBlock} />
				<SubcribeBlock title={'Subcribe to get special price'} subtitle={'Dont wanna miss something? subscribe right now and get special promotion and monthly newsletter'} />
			</Main>
		</>
	);
}

Component.query = gql`
  ${BlogInfoFragment}
  query GetFrontPageData{
    generalSettings {
      ...BlogInfoFragment
    }
	page(id: "/", idType: URI) {
		title
		acfFields {
		  hero {
			description
			title
		  }
		  locationBlock {
			title
			subtitle
			locations {
			  country
			  description
			  name
			  thumbnail {
				sourceUrl
				mediaDetails {
					width
					height
				}
			  }
			}
		  }
		  serviceBlock {
			subtitle
			title
			services {
			  description
			  name
			  icon {
				sourceUrl
				mediaDetails {
					width
					height
				}
			  }
			}
		  }
		  partnerBlock {
			title
			subtitle
			image {
			  	sourceUrl
				mediaDetails {
					width
					height
				}
			}
		  }
		  testimonialBlock {
			title
			subtitle 
			testimonials {
				userName
				userAvatar {
					sourceUrl
					mediaDetails {
						width
						height
					}
				}
				comment
				rate
				userPosition
			}
		  }
		}
	  }
  	}
`;