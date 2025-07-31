import React from 'react';
import { motion } from 'framer-motion';
import VideoCard from './VideoCard';
import { ANIMATION_VARIANTS } from '../../utils/constants';

const VideoGrid = ({ videos }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-7xl mx-auto px-4 pb-12"
        >
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
            >
                Top Suggestions ({videos.length} videos found)
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={ANIMATION_VARIANTS.staggerContainer}
                initial="initial"
                animate="animate"
            >
                {videos.map((video, index) => (
                    <VideoCard key={video.id} video={video} index={index} />
                ))}
            </motion.div>
        </motion.div>
    );
};

export default VideoGrid;