import styled from 'styled-components'

const WaveBackground = () => {
	return (
		<Wraper>
			<BackGround />
			<Wave
				src='/images/waves/wave1.png'
				style={{ top: '0px', height: '800px', width: '100%' }}
			/>
			<Wave src='/images/waves/hero-wave2.svg' style={{ top: '350px' }} />
			<Wave src='/images/waves/hero-wave3.svg' style={{ top: '550px' }} />
		</Wraper>
	)
}

export default WaveBackground

const Wraper = styled.div`
	position: relative;
`

const Wave = styled.img`
	position: absolute;
	z-index: -1;
`

const BackGround = styled.div`
	background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
	position: absolute;
	z-index: -1;
	width: 100%;
	height: 800px;
`
