import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background: #b993d6; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to right,
		#8ca6db,
		#b993d6
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to right,
		#8ca6db,
		#b993d6
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const BoxContainer = styled.div`
    display: flex;
    overflow: hidden;
    width: 300px;
    height: 300px;
    background-color: rgba(141, 80, 201, 0.1);
    border-radius: 40px;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

const Box = styled(motion.div)`
    background-color: white;
    border-radius: 40px;
    width: 200px;
    height: 200px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

function Home() {
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-800, 800], [-360, 360]);

    return (
		<Container>
            <Box style={{ x, rotate }} drag="x" dragSnapToOrigin />
		</Container>
	);
}

export default Home;