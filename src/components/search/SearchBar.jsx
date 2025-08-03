import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useVideoSearch } from '../../hooks/useVideoSearch';
import Button from '../common/Button';
import Input from '../common/Input';
import { ANIMATION_VARIANTS } from '../../utils/constants';

const SearchBar = () => {
    const { query, loading, dispatch, selectedLanguage } = useApp();
    const { search } = useVideoSearch();
    const [localQuery, setLocalQuery] = useState(query);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'SET_QUERY', payload: localQuery });
        search(localQuery, selectedLanguage);
    };

    const handleLanguageChange = (e) => {
        const videoLanguage = e.target.value;
        dispatch({ type: 'SET_LANGUAGE', payload: videoLanguage });
        if (query) {
            search(query, videoLanguage);
        }
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto relative px-4"
            variants={ANIMATION_VARIANTS.scaleIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5 }}
        >
            <div className="flex gap-4 items-center mb-4">
                <div className="flex-1">
                    <Input
                        type="text"
                        value={localQuery}
                        onChange={(e) => setLocalQuery(e.target.value)}
                        placeholder="Search for coding tutorials, web development, and more..."
                        icon={<Search className="w-5 h-5" />}
                    />
                </div>
                {/* <select
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 
                    focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                    <option value="all">All Languages</option>
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                </select> */}
            </div>
            <div className="text-center">
                <Button
                    type="submit"
                    disabled={loading}
                    loading={loading}
                    className="w-full sm:w-auto"
                >
                    {loading ? 'Searching...' : 'Search Videos'}
                </Button>
            </div>
        </motion.form>
    );
};

export default SearchBar;