import styled from 'styled-components'

import { menuData } from '../../data/menuData'
import MenuButton from '../buttons/MenuButton'

const Header = () => {
    return (
        <Wraper>
            <img src='/images/logos/logo.svg' alt='' />
            <MenuWraper items={menuData.length}>
                {menuData.map((item, index) => (
                    <MenuButton item={item} index={index} key={index} />
                ))}
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
`
const MenuWraper = styled.div`
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(${(props) => props.items}, auto);
`
