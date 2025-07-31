import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ error }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto mb-8 px-4"
        >
            <div className="bg-red-900/80 border border-red-600 text-red-200 px-6 py-4 rounded-lg backdrop-blur-sm flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                    <p className="font-medium">Error: {error}</p>
                    <p className="text-sm mt-1 text-red-300">

                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default ErrorMessage;