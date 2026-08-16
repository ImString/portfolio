import styled from 'styled-components';

const ShadowFeetLeft = styled.div`
	position: absolute;
	left: 202px;
	bottom: 116px;
	width: 152px;
	height: 80px;
	background: black;
	border-radius: 9999px;
	filter: blur(21.15px);
	z-index: 2;
`;

const ShadowFeetRight = styled.div`
	position: absolute;
	right: 406px;
	bottom: 116px;
	width: 152px;
	height: 80px;
	background: black;
	border-radius: 9999px;
	filter: blur(21.15px);
	z-index: 2;
`;

const TableImage = styled.img`
	position: absolute;
	top: 293px;
	left: 178px;
	z-index: 2;
`;

export const Table: React.FC = () => {
	return (
		<>
			<ShadowFeetLeft />
			<ShadowFeetRight />
			<TableImage src="/table.png" className="table" alt="" draggable={false} />
		</>
	);
};
