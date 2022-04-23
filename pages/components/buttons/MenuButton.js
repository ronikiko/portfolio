import Link from 'next/link'
import styled from 'styled-components'

const MenuButton = (props) => {
	const { link, title, icon } = props.item
	const { onClick } = props
	return (
		<Link href={link}>
			<MenuItem title={title}>
				<a onClick={onClick}>
					<img src={icon} alt={title} />
					{title}
				</a>
			</MenuItem>
		</Link>
	)
}

export default MenuButton

const MenuItem = styled.div`
	a {
		color: rgba(255, 255, 255, 0.7);
		display: grid;
		grid-template-columns: 24px auto;
		gap: ${(props) => (props.title ? '10px' : '0')};
		align-items: center;
		justify-content: center;
		padding: 10px;
		border-radius: 10px;
		transition: 0.5s ease-in-out;

		:hover {
			background: rgba(255, 255, 255, 0.1);
			box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
				inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
			border-radius: 10px;
			cursor: pointer;
		}
	}
`
