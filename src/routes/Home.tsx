import { motion } from "framer-motion";
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

const Box = styled(motion.div)`
    background-color: white;
    border-radius: 10px;
    width: 200px;
    height: 200px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function Home() {
    return (
        <Container>
            <Box
                transition={{ delay: 0.5, type: "spring" }}
                initial={{ scale: 0 }}
                animate={{ rotateZ: 360, scale: 1 }}
            />
        </Container>
    );
}

export default Home;