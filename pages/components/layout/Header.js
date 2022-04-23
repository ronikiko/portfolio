import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { menuData } from '../../data/menuData'
import MenuButton from '../buttons/MenuButton'
import MenuTooltip from '../tooltips/Menutooltip'

const Header = () => {
	const [isOpen, setIsopen] = useState(false)
	const ref = useRef()
	const tooltipRef = useRef()

	// this function called when the user click on the menu button
	// or outside the menu
	const handleClickOutside = (event) => {
		if (
			ref.current &&
			!ref.current.contains(event.target) &&
			!tooltipRef.current.contains(event.target)
		) {
			setIsopen(false)
		}
	}
	// handle click outside of the menu to close it
	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	const handleMenu = (event) => {
		setIsopen(!isOpen)
		event.preventDefault()
	}
	return (
		<Wraper>
			<img src='/images/logos/logo.svg' alt='' />

			<MenuWraper items={menuData.length} ref={ref}>
				{menuData.map((item, index) =>
					item.link === '/account' ? (
						<MenuButton
							item={item}
							key={index}
							onClick={(event) => handleMenu(event)}
						/>
					) : (
						<MenuButton item={item} key={index} />
					)
				)}
				<HamburgerMenu>
					<MenuButton
						item={{
							title: '',
							icon: '/images/icons/hamburger.svg',
							link: '',
						}}
						onClick={(event) => handleMenu(event)}
					/>
				</HamburgerMenu>
				<div ref={tooltipRef}>
					<MenuTooltip isOpen={isOpen} />
				</div>
			</MenuWraper>
		</Wraper>
	)
}

export default Header

const Wraper = styled.div`
	position: absolute;
	top: 60px;
	width: 95%;
	display: grid;
	grid-template-columns: 44px auto;
	justify-content: space-between;
	align-items: center;
	padding: 0px 30px;
	z-index: 1;

	@media (max-width: 768px) {
		top: 20px;
		grid-template-rows: auto;
		padding: 0px 20px;
	}
`
const MenuWraper = styled.div`
	display: grid;
	gap: 30px;
	grid-template-columns: repeat(${(props) => props.items}, auto);

	@media (max-width: 768px) {
		> div > a {
			display: none;
		}
		grid-template-rows: auto;
		gap: 5px;
	}
`

const HamburgerMenu = styled.div`
	display: none;

	@media (max-width: 768px) {
		display: block;
	}
`
