import Link from 'next/link'
import styled from 'styled-components'
import { Caption2, SmallText } from '../styles/Textstyles'

export default function PurchaseButton({ title, subtitle }) {
    return (
        <Link href='/purchase'>
            <Wraper>
                <Ring src='/images/icons/icon-ring.svg' />
                <IconWraper>
                    <Icon src='/images/icons/credit.svg' />
                </IconWraper>
                <TextWraper>
                    <Title>{title || 'Get pro'}</Title>
                    <SubTitle>{subtitle || '$19 per month'}</SubTitle>
                </TextWraper>
            </Wraper>
        </Link>
    )
}

const Wraper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 60px auto;
    align-items: center;
    grid-gap: 10px;
    width: 280px;
    height: 77px;
    background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 20px 40px rgba(23, 0, 102, 0.2),
        inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    padding: 12px;
`
const TextWraper = styled.div``

const Title = styled(Caption2)`
    color: black;
`

const SubTitle = styled(SmallText)`
    color: black;
    opacity: 0.7;
`

const IconWraper = styled.div`
    width: 45px;
    height: 45px;
    background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
    border-radius: 50%;
    display: grid;
    justify-content: center;
    align-content: center;
`

const Icon = styled.img`
    width: 24px;
    height: 24px;
`
const Ring = styled.img`
    position: absolute;
    top: 13px;
    left: -4px;
`
