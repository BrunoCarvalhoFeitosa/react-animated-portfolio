import { motion } from "framer-motion"

const transitionVariants = {
    initial: {
        x: "100%",
        width: "100%",
    },
    animate: {
        x: "0%",
        width: "0%",
    },
    exit: {
        x: ["0%", "100%"],
        width: ["0%", "100%"],
    }
}

const Transition = () => {
    return (
        <>
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen bg-[#F13024] z-30"
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen bg-[#000] z-20"
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen bg-[#4169E1] z-10"
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
            />
        </>
    )
}
  
export default Transition
  