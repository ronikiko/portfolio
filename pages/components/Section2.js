import styled from 'styled-components'

const Section2 = () => {
	return (
		<Wraper>
			<Wave src='/images/waves/tutorial-wave1.svg' />
			<Wave src='/images/waves/tutorial-wave2.svg' style={{ top: '350px' }} />
			<Wave
				src='/images/waves/tutorial-wave3.svg'
				style={{ top: '550px', transform: 'rotate(180deg)', zIndex: '-1' }}
			/>
		</Wraper>
	)
}

export default Section2

const Wraper = styled.div`
	position: relative;
`

const Wave = styled.img`
	position: absolute;
	top: 100px;
`
