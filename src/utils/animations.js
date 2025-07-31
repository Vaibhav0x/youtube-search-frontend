// Custom animation configurations for Framer Motion
export const springConfig = {
    type: "spring",
    stiffness: 260,
    damping: 20
};

export const slideVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
    })
};

export const modalVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        y: 100
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
        }
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        y: 100,
        transition: {
            duration: 0.2
        }
    }
};

export const staggerAnimation = {
    container: {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    },
    item: {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    }
};