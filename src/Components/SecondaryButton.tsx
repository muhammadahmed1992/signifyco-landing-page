import { motion, Variants } from 'framer-motion';
import { useState } from "react";

interface PrimaryButtonProps {
    text: string;
    customClassName?: any;  // Changed from Object to any for more flexibility
}

const SecondaryButton = (props: PrimaryButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const text = props.text;
    const characters: string[] = [];

    let currentWord = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === ' ' || char === "'") {
            if (currentWord.length > 0) {
                characters.push(currentWord);
                currentWord = '';
            }
            characters.push(char);
        } else {
            currentWord += char;
        }
    }
    if (currentWord.length > 0) {
        characters.push(currentWord);
    }

    const containerVariants: Variants = {
        initial: {},
        hover: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const characterVariants: Variants = {
        initial: { y: '0%', opacity: 1 },
        hover: {
            y: ['0%', '-100%', '-100%', '0%'],
            opacity: [1, 0, 0, 1],
            transition: { duration: 1.0, times: [0, 0.3, 0.3, 0.7] }
        }
    };

    const arrowVariants: Variants = {
        initial: { rotate: -30 },
        hover: { rotate: 0, transition: { duration: 0.7 } }
    };

    const spanStyle = {
        display: 'inline-block',
        minWidth: '0.6em',
        color: 'white',  // Ensuring text color is white
    };

    return (
        <div className=''>
            <motion.button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ ...props.customClassName, color: 'white' }} // Ensuring text color is white
            >
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate={isHovered ? 'hover' : 'initial'}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontFamily: "SFProDisplay, sans-serif",
                        color: 'white'  // Ensuring text color is white
                    }}
                >
                    {characters.map((char, index) => (
                        <motion.span key={index} variants={characterVariants} style={spanStyle}>
                            {char}
                        </motion.span>
                    ))}
                </motion.div>
                <motion.div
                    variants={arrowVariants}
                    initial="initial"
                    animate={isHovered ? 'hover' : 'initial'}
                    style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L22 12L12 22" style={{ stroke: "#ffffff !important" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12H22" style={{ stroke: "#ffffff !important" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </motion.button>
        </div>
    );
}

export default SecondaryButton;