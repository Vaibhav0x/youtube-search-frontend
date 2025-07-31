import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ThumbsUp, MessageCircle } from 'lucide-react';
import { formatNumber } from '../../utils/formatters';

const VideoStats = ({ statistics }) => {
    const stats = [
        {
            icon: <Eye className="w-4 h-4" />,
            value: formatNumber(statistics.viewCount),
            label: 'Views',
            color: 'text-green-400'
        },
        {
            icon: <ThumbsUp className="w-4 h-4" />,
            value: formatNumber(statistics.likeCount),
            label: 'Likes',
            color: 'text-blue-400'
        },
        {
            icon: <MessageCircle className="w-4 h-4" />,
            value: formatNumber(statistics.commentCount),
            label: 'Comments',
            color: 'text-purple-400'
        }
    ];

    return (
        <div className="grid grid-cols-3 gap-4 mb-4">
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                >
                    <div className={`flex items-center justify-center space-x-1 ${stat.color}`}>
                        {stat.icon}
                        <span className="text-sm font-medium">{stat.value}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default VideoStats;