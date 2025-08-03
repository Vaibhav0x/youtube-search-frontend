import React from 'react';
import { motion } from 'framer-motion';

const LanguageFilter = ({ selectedLanguage, onLanguageChange }) => {
    const languages = [
        { code: 'all', name: 'All Languages' },
        { code: 'en', name: 'English' },
        { code: 'hi', name: 'Hindi' },
        { code: 'es', name: 'Spanish' },
        { code: 'fr', name: 'French' },
        // Add more languages as needed
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
        >
            <select
                value={selectedLanguage}
                onChange={(e) => onLanguageChange(e.target.value)}
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 
                focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                transition-colors duration-200"
            >
                {languages.map((language) => (
                    <option key={language.code} value={language.code}>
                        {language.name}
                    </option>
                ))}
            </select>
        </motion.div>
    );
};

export default LanguageFilter;