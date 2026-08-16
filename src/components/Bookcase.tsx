import styled from 'styled-components';

const Shadow = styled.div`
	position: absolute;
	right: -20px;
	bottom: 226px;
	width: 264px;
	height: 112px;
	background: black;
	filter: blur(21.15px);
	z-index: 2;
`;

const BookcaseImage = styled.img`
	position: absolute;
	top: 145px;
	right: -32px;
	z-index: 2;
`;

export const Bookcase: React.FC = () => {
	return (
		<>
			<Shadow />
			<BookcaseImage src="/bookcase.png" className="table" alt="" draggable={false} />
		</>
	);
};
