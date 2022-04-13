import styled from 'styled-components'
import Link from 'next/link'

const menuData = [
	{ title: 'Courses', icon: '/images/icons/courses.svg', link: '/courses' },
	{
		title: 'Tutorials',
		icon: '/images/icons/tutorials.svg',
		link: '/tutorials',
	},
	{ title: 'Pricing', icon: '/images/icons/pricing.svg', link: '/pricing' },
]

const Header = () => {
	return (
		<Wraper>
			<img src='/images/logos/logo.svg' alt='' />
			<MenuWraper>
				{menuData.map((item, index) => (
					<MenuItem>
						<Link href={item.link} key={index}>
							<a>
								<img src={item.icon} alt={item.title} />
								{item.title}
							</a>
						</Link>
					</MenuItem>
				))}
			</MenuWraper>
		</Wraper>
	)
}

export default Header

const Wraper = styled.div`
	position: absolute;
	top: 60px;
	width: 100%;
	display: grid;
	grid-template-columns: 44px auto;
	justify-content: space-between;
	align-items: center;
	padding: 0px 50px;
`
const MenuWraper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, auto);
	gap: 30px;
`

const MenuItem = styled.div``
