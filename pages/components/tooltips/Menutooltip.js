import styled from 'styled-components'
import MenuButton from '../buttons/MenuButton'
import { shearchTooltipData } from '../../data/menuData'

const MenuTooltip = ({ isOpen }) => {
	return (
		<Wraper isOpen={isOpen}>
			{shearchTooltipData.map((item, index) => (
				<MenuButton item={item} key={index} />
			))}
		</Wraper>
	)
}

export default MenuTooltip

const Wraper = styled.div`
	position: absolute;
	top: 60px;
	right: 30px;
	width: 150px;
	padding: 20px 10px;
	opacity: ${(props) => (props.isOpen ? 1 : 0)};
	background: rgba(15, 14, 71, 0.3);
	box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
		inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(40px);
	transition: 0.3s ease-in-out;
	/* Note: backdrop-filter has minimal browser support */

	border-radius: 20px;
	visibility: hidden;
	visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
`
