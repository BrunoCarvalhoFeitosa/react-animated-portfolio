import React from "react"
import Avatar from "../../components/Avatar"
import Circles from "../../components/Circles"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
import TestimonialSlider from "../../components/TestimonialSlider"


const Testimonials = () => {
    return (
        <div className="h-full py-32 lg:py-0 bg-primary/30 text-center lg:text-left">
            <Circles />
            <div className="opacity-100 lg:opacity-80">
                <motion.div
                    className="hidden xl:flex absolute bottom-0 -left-[320px]"
                    variants={fadeIn("right", 1.3)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <Avatar />
                </motion.div>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-x-12 ">
                    <div className="relative lg:flex-none lg:w-[40%] flex flex-col justify-center lg:h-[100vh] z-10">
                        <div className="flex justify-center lg:justify-normal items-baseline gap-x-4">
                            <motion.h2
                                className="h2 text-center lg:text-left"
                                variants={fadeIn("down", 0.8)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                            >
                                Testemunhos
                            </motion.h2>
                            <motion.div
                                variants={fadeIn("down", 1)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="w-4 h-4 rounded-full bg-accent animate-[bounce_0.5s_ease-in-out_infinite]"
                            />
                        </div>
                        <motion.p
                            variants={fadeIn("down", 1)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                        >
                            Depoimentos de colegas com quem já tive a oportunidade de trabalhar
                            e opiniões de clientes que pude oferecer serviços personalizados de Branding, 
                            Design, SEO, Desenvolvimento e VTEX.
                        </motion.p>
                    </div>
                    <div className="w-full md:w-[56%]">
                        <motion.div
                            className="flex-1 mt-6 lg:pr-[80px]"
                            variants={fadeIn("down", 1)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                        >
                            <TestimonialSlider />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
  
export default Testimonials