import React from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, User } from 'lucide-react';
import VideoStats from './VideoStats';
import Button from '../common/Button';
import { formatDate } from '../../utils/formatters';
import { ANIMATION_VARIANTS } from '../../utils/constants';

const VideoCard = ({ video, index }) => {
    const handleWatchVideo = () => {
        window.open(`https://youtube.com/watch?v=${video.id}`, '_blank');
    };

    return (
        <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
            }}
            whileHover={{
                scale: 1.02,
                rotateY: 2,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 backdrop-blur-sm"
        >
            <div className="relative group">
                <img
                    src={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high.url}
                    alt={video.snippet.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Play className="w-16 h-16 text-primary-500 fill-current cursor-pointer" />
                    </motion.div>
                </motion.div>
                <div className="absolute top-4 right-4 bg-black/70 px-2 py-1 rounded text-white text-sm font-medium">
                    Score: {video.score.toLocaleString()}
                </div>
            </div>

            <div className="p-6">
                <motion.h3
                    className="text-xl font-bold text-white mb-3 line-clamp-2 leading-tight"
                    whileHover={{ color: "#ef4444" }}
                >
                    {video.snippet.title}
                </motion.h3>

                <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span className="truncate">{video.snippet.channelTitle}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(video.snippet.publishedAt)}</span>
                    </div>
                </div>

                <VideoStats statistics={video.statistics} />

                <Button
                    onClick={handleWatchVideo}
                    className="w-full"
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(239, 68, 68, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    Watch Video
                </Button>
            </div>
        </motion.div>
    );
};

export default VideoCard;