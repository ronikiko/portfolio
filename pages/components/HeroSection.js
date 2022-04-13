import styled from 'styled-components'
import { H1 } from './styles/Textstyles'
import PurchaseButton from './buttons/PurchaseButton'
import MockupAnimations from './animations/MockupAnimations'

export default function HeroSection() {
	return (
		<Wraper>
			<ContentWrapper>
				<TextWrapper>
					<Title>
						Design <br />
						and code React app!
					</Title>
					<Description>
						Don’t skip design. Learn design and code, by building real apps
						with React and Swift. Complete courses about the best tools.
					</Description>
					<PurchaseButton
						title='Start learning !'
						subtitle='120+ hours of video'
					/>
				</TextWrapper>
				<MockupAnimations />
			</ContentWrapper>
		</Wraper>
	)
}

const Wraper = styled.div`
	background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
	overflow: hidden;
`

const ContentWrapper = styled.div`
	max-width: 1234px;
	margin: 0 auto;
	padding: 200px 30px;
	display: grid;
	grid-template-columns: 360px auto;
`
const TextWrapper = styled.div`
	max-width: 360px;
	display: grid;
	gap: 30px;
`

const Title = styled(H1)`
	color: #fff;
`
const Description = styled.p`
	font-size: 16px;
	line-height: 130%;
`
