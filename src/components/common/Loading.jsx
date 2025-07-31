import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12"
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-4"
            />
            <p className="text-gray-300 text-lg">Searching for the best videos...</p>
        </motion.div>
    );
};

export default Loading;