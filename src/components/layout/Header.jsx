import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS } from '../../utils/constants';

const Header = () => {
    return (
        <motion.header
            variants={ANIMATION_VARIANTS.fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center py-12 px-4"
        >
            <motion.h1
                className="text-4xl md:text-6xl font-black gradient-text bg-gradient-animate mb-4 leading-tight"
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                YouTube Best Search
            </motion.h1>
            <motion.p
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                variants={ANIMATION_VARIANTS.fadeInUp}
                transition={{ delay: 0.3 }}
            >
                Discover the highest-rated videos tailored to your interests
            </motion.p>
        </motion.header>
    );
};

export default Header;