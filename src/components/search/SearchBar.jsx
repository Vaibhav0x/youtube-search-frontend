import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useVideoSearch } from '../../hooks/useVideoSearch';
import Button from '../common/Button';
import Input from '../common/Input';
import { ANIMATION_VARIANTS } from '../../utils/constants';

const SearchBar = () => {
    const { query, loading, dispatch } = useApp();
    const { search } = useVideoSearch();
    const [localQuery, setLocalQuery] = useState(query);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'SET_QUERY', payload: localQuery });
        search(localQuery);
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
            <div className="relative mb-4">
                <Input
                    type="text"
                    value={localQuery}
                    onChange={(e) => setLocalQuery(e.target.value)}
                    placeholder="Search for coding tutorials, web development, and more..."
                    icon={<Search className="w-5 h-5" />}
                />
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