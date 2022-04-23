import styled from 'styled-components'
import { H1 } from './styles/Textstyles'
import PurchaseButton from './buttons/PurchaseButton'
import MockupAnimations from './animations/MockupAnimations'
import WaveBackground from './backgrounds/WaveBackground'
import { keyframes } from 'styled-components'

export default function HeroSection() {
	return (
		<Wraper>
			<WaveBackground />
			<ContentWrapper>
				<TextWrapper>
					<Title>
						Design <br />
						and code <span>React</span> app!
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

const animations = keyframes`
    from { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
    to { opacity: 1; transform: translateY(0px); filter: blur(0px);}
`

const Wraper = styled.div`
	position: relative;
	width: 100%;
	overflow: hidden;
`

const ContentWrapper = styled.div`
	position: relative;
	max-width: 1234px;
	margin: 0 auto;
	padding: 200px 20px;
	display: grid;
	grid-template-columns: 360px auto;

	@media (max-width: 450px) {
		grid-template-columns: auto;
		gap: 60px;
		padding: 100px 20px 250px;
	}
`
const TextWrapper = styled.div`
	max-width: 360px;
	display: grid;
	gap: 30px;

	> * {
		opacity: 0;
		animation: ${animations} ease-in-out forwards;

		:nth-child(1) {
			animation-delay: 0s;
		}
		:nth-child(2) {
			animation-delay: 0.2s;
		}
		:nth-child(3) {
			animation-delay: 0.4s;
		}
	}
`

const Title = styled(H1)`
	color: #fff;
	background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;

	span {
		font-size: 60px;
		background: linear-gradient(180deg, #ffd7ff 0%, #ffb7ff 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}

	@media (max-width: 450px) {
		font-size: 40px;

		span {
			font-size: 40px;
			display: block;
		}
	}
`
const Description = styled.p`
	font-size: 16px;
	line-height: 130%;
`
