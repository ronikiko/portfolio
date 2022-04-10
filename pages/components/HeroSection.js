import styled from 'styled-components'
import { H1 } from './styles/Textstyles'
import PurchaseButton from './buttons/PurchaseButton'

function HeroSection() {
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
						title='Start learning'
						subtitle='120+ hours of video'
					/>
				</TextWrapper>
			</ContentWrapper>
		</Wraper>
	)
}

export default HeroSection

const Wraper = styled.div`
	background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`

const ContentWrapper = styled.div`
	max-width: 1234px;
	margin: 0 auto;
	padding: 200px 30px;
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
