export const slideUp = {
    initial: {
        y: "100%",
        opacity: 0,
        scale: 0.9
    },
    open: (i) => ({
        y: "0%",
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            delay: 0.02 * i,
            ease: [0.25, 1, 0.5, 1]
        }
    }),
    closed: {
        y: "100%",
        opacity: 0,
        scale: 0.9,
        transition: {
            duration: 0.5,
            ease: [0.25, 1, 0.5, 1]
        }
    }
}

export const fadeIn = {
    initial: {
        opacity: 0,
        scale: 0.95,
        y: 20
    },
    animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 1, 0.5, 1]
        }
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        y: 20,
        transition: {
            duration: 0.5,
            ease: [0.25, 1, 0.5, 1]
        }
    }
}