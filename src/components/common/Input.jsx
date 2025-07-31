import React from 'react';

const Input = ({
    type = 'text',
    value,
    onChange,
    placeholder,
    icon,
    className = '',
    ...props
}) => {
    return (
        <div className={`relative ${className}`}>
            {icon && (
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
                    {icon}
                </div>
            )}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full px-6 py-4 text-lg bg-gray-800/80 text-white rounded-2xl border border-gray-600 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 backdrop-blur-sm transition-all duration-200 ${icon ? 'pl-12' : ''
                    }`}
                {...props}
            />
        </div>
    );
};

export default Input;