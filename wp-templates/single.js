import { ArrowRightOutlined, CalendarOutlined, FacebookFilled, FolderOpenOutlined, LinkedinFilled, MailOutlined, PhoneFilled, TwitterCircleFilled, UserOutlined } from '@ant-design/icons';
import { gql } from '@apollo/client';
import { Button, Checkbox, Col, Divider, Form, Input, List, Row, Space } from 'antd';
import {
	Container,
	FeaturedImage,
	SEO
} from '../components';
import { BlogHero } from '../components/BlogHero';
import SubcribeBlock from '../components/SubcribeBlock/SubcribeBlock';
import { blogs } from '../mock/blogs';

export default function Component(props) {
	// Loading state for previews
	if (props.loading) {
		return <>Loading...</>;
	}

	const { title: siteTitle, description: siteDescription } =
		props?.data?.generalSettings || { title: '', description: ''};

	const { title, content, featuredImage, date, author } = props.data.post;
    const categories = props.data?.categories?.nodes ?? [];

	const months = ['January, February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobor', 'November', 'December']
	const getDate = (d) => {
		if (d) {
			const date = new Date(d);
			return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
		}
		const date = new Date();
		return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
	};

	return (
		<>
			<SEO
				title={siteTitle}
				description={siteDescription}
				imageUrl={featuredImage?.node?.sourceUrl}
			/>
			<BlogHero
				separator={<div className='w-[40px]'></div>}
				title={title}
				breadcrumbItems={[
					{
						title: <>
							<UserOutlined className='mr-2' style={{ fontSize: 24 }} />
							<span className='uppercase'>{author?.node?.name || ''}</span>
						</>,
					},
					{
						title: <>
							<CalendarOutlined className='mr-2' style={{ fontSize: 24 }} />
							<span> {getDate(date)} </span>
						</>,
					},
					{
						title: <>
							<FolderOpenOutlined className='mr-2' style={{ fontSize: 24 }} />
							<span> Stories, Tips </span>
						</>,
					},
				]}
			/>
			<Container>
				<div className='py-[100px] px-[10px] relative'>
					<Row gutter={[40, 40]}>
						<Col lg={16} md={24} sm={24} xs={24}>
							<div className='font-thin text-lg' dangerouslySetInnerHTML={{ __html: content }} />
							<div className="flex flex-wrap justify-between mt-12">
								<p className='text-lg text-[#343434] sm:mb-0 mb-4'><span className='font-thin'>Tags: </span> Destination, Travel </p>
								<div className="flex items-center sm:mb-0 mb-4">
									<p className="text-lg font-thin text-[#343434]">Share this: </p>
									<Space size={'middle'} className="flex ml-4 items-center">
										<FacebookFilled className='text-2xl' />
										<TwitterCircleFilled className='text-2xl' />
										<LinkedinFilled className='text-2xl' />
									</Space>
								</div>
							</div>
							<Divider />
							<h5 className="text-4xl font-semibold mt-[100px] mb-6">Leave a Reply</h5>
							<p className="font-thin text-lg">Your email address will not be published. Required fields are marked *</p>
							<Form
								name="basic"
								initialValues={{
									remember: true,
								}}
								layout='vertical'
								autoComplete="off"
								className='mt-12'
							>
								<Form.Item
									label={<p className='text-lg'>Comment</p>}
									name="comment"
									rules={[
										{
											required: true,
											message: 'Please input your comment!',
										},
									]}
								>
									<Input.TextArea rows={6} />
								</Form.Item>
								<Form.Item
									label={<p className='text-lg'>Name *</p>}
									name="name"
									rules={[
										{
											required: true,
											message: 'Please input your name!',
										},
									]}
								>
									<Input size='large' />
								</Form.Item>
								<Form.Item
									label={<p className='text-lg'>Email *</p>}
									name="email"
									rules={[
										{
											required: true,
											message: 'Please input your email!',
										},
									]}
								>
									<Input size='large' />
								</Form.Item>
								<Form.Item
									label={<p className='text-lg'>Website</p>}
									name="website"
									rules={[
										{
											required: true,
											message: 'Please input your website!',
										},
									]}
								>
									<Input size='large' />
								</Form.Item>
								<Form.Item
									name="remember"
									valuePropName="checked"
								>
									<Checkbox><span className='text-lg'>Save my name, email, and website in this browser for the next time I comment.</span></Checkbox>
								</Form.Item>
								<Form.Item>
									<Button type='primary' className='bg-black text-white rounded-full px-8 py-6 flex font-thin items-center text-2xl'>Post Comment</Button>
								</Form.Item>
							</Form>
						</Col>
						<Col lg={8} md={24} sm={24} xs={24}>
							<div className="bg-white shadow-lg p-4">
								<h6 className="text-3xl">Recent Post</h6>
								{blogs.map((blog) => (
									<div key={blog._id} className='flex mt-4 w-full'>
										<div className="w-1/3 overflow-hidden">
											<img className='w-full h-full object-cover' src={blog.image} alt='' />
										</div>
										<div className="flex flex-col justify-between px-4">
											<h6 className="text-lg font-semibold max-w-xs">{blog.title}</h6>
											<p className='font-light text-lg'> {getDate()} </p>
										</div>
									</div>
								))}
							</div>
							<div className="bg-white shadow-lg my-12 p-4">
								<h6 className="text-3xl mb-6">Categories</h6>
								<List itemLayout='horizontal'>
									{categories.map(c => (
										<List.Item key={c.id}>
											<div className="flex">
												<ArrowRightOutlined className='mr-4' /> <p className='text-lg'>{c.name}</p>
											</div>
										</List.Item>
									))}
								</List>
							</div>
							<div className="bg-stone-700 shadow-lg my-12 p-8 rounded-lg">
								<h6 className="text-3xl mb-6 text-white">Have Any Question?</h6>
								<p className="text-lg text-white font-thin mb-12">Do not hesitage to give us a call. We are an expert team and we are happy to talk to you.</p>
								<p className='text-lg text-white mb-2'><PhoneFilled className='mr-3' /> +97 888 8888</p>
								<p className='text-lg text-white mb-2'><MailOutlined className='mr-3' /> info@traveller.com</p>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
			<SubcribeBlock title={'Subcribe to get special price'} subtitle={'Dont wanna miss something? subscribe right now and get special promotion and monthly newsletter'} />
		</>
	);
}

Component.query = gql`
  ${FeaturedImage.fragments.entry}
  query GetPost(
    $databaseId: ID!
    $asPreview: Boolean = false
  ) {
    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      date
      author {
        node {
          name
        }
      }
      ...FeaturedImageFragment
    }
    categories {
        nodes {
            name
            id
        }
    }
  }
`;

Component.variables = ({ databaseId }, ctx) => {
	return {
		databaseId,
		asPreview: ctx?.asPreview,
	};
};
