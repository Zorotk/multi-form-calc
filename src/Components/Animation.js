import React from 'react';
import {motion} from 'framer-motion';

export default function Animation({children}) {
    return (
        <motion.div
            style={{position: 'relative'}}
            initial={{x: 200, scale: 0.8, opacity: 0}}
            animate={{x: 0, scale: 1, opacity: 1}}
            exit={{x: -200, scale: 0.8, opacity: 0}}
        >
            {children}
        </motion.div>
    );
}