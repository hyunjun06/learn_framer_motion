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
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 40px;
    width: 200px;
    height: 200px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: white;
    place-self: center;
`

const variants ={
    initial: {
        scale: 0,
    },
    final: {
        scale: 1,
        transition: {
            delay: .5,
            duration: 1,
            type: "spring",
            bounce: 0.5,
            delayChildren: 1,
            staggerChildren: 0.2,
        }
    }
}

const circleVariants = {
    initial: {
        opacity: 0,
        y: -200,
    },
    final: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            type: "spring",
            bounce: 0.5,
        },
    }
}
function Home() {
    return (
		<Container>
			<Box variants={variants} initial="initial" animate="final">
                <Circle variants={circleVariants} />
                <Circle variants={circleVariants} />
                <Circle variants={circleVariants} />
                <Circle variants={circleVariants} />
            </Box>
		</Container>
	);
}

export default Home;