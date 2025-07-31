import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import Header from '../components/layout/Header';
import SearchBar from '../components/search/SearchBar';
import VideoGrid from '../components/video/VideoGrid';
import Loading from '../components/common/Loading';
import ErrorMessage from '../components/common/ErrorMessage';
import Background3D from '../components/three/Background3D';

const HomePage = () => {
    const { videos, loading, error, query } = useApp();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
            <Background3D />

            <div className="relative z-10">
                <Header />
                <SearchBar />

                <AnimatePresence mode="wait">
                    {error && <ErrorMessage key="error" error={error} />}

                    {loading && <Loading key="loading" />}

                    {videos.length > 0 && (
                        <VideoGrid key="videos" videos={videos} />
                    )}

                    {!loading && !error && videos.length === 0 && query && (
                        <div className="text-center py-12" key="empty">
                            <p className="text-gray-400 text-lg">
                                No videos found. Try a different search term.
                            </p>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default HomePage;