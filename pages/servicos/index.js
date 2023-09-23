import React from "react"
import Avatar from "../../components/Avatar"
import Circles from "../../components/Circles"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
import { RxCrop, RxPencil2, RxDesktop } from "react-icons/rx"
import { SiVtex } from "react-icons/si"
import { RiSeoLine } from "react-icons/ri"

const serviceData = [
    {
        icon: <RxCrop />,
        title: "Branding",
        description: "Idealização de marca, logotipos, ideias e valores para seu negócio.",
    },
    {
        icon: <RxPencil2 />,
        title: "Design",
        description: "Criação de layouts utilizando Photoshop, XD e Figma.",
    },
    {
        icon: <RiSeoLine />,
        title: "SEO",
        description: "Rankeamento e melhora das buscas do seu site no Google",
    },
    {
        icon: <RxDesktop />,
        title: "Desenvolvimento",
        description: "Desenvolvimento de sites e aplicativos para celular Android e IOS.",
    },
    {
        icon: <SiVtex />,
        title: "Suporte Vtex",
        description: "Suporte e manutenção de lojas desenvolvidas na plataforma VTEX.",
    },
]

const Services = () => {
    return (
        <div className="h-full md:h-[100vh] py-32 xl:py-0 bg-primary/30 text-center xl:text-left">
            <Circles />
            <div className="opacity-100 xl:opacity-80">
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
            <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-16">
                <div className="flex flex-col xl:flex-row items-baseline gap-x-24">
                    <div className="relative flex-1 xl:flex-none xl:w-[33%] flex flex-col justify-center xl:h-[100vh] z-10">
                        <div className="flex justify-center xl:justify-normal items-baseline gap-x-4">
                            <motion.h2
                                className="h2 text-center xl:text-left"
                                variants={fadeIn("down", 0.8)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                            >
                                Serviços
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
                            Com mais de 7 anos de experiência, pude trabalhar 
                            exclusivamente com Javascript, a principal linguagem utilizada
                            por navegadores e aplicativos de celular. Pude ao decorrer deste
                            tempo aprimorar conceitos de Branding, Design, Desenvolvimento, Suporte à lojas VTEX.
                        </motion.p>
                    </div>
                    <motion.div
                        className="flex-1 mt-6 xl:pr-[80px]"
                        variants={fadeIn("down", 1)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-2">
                            {serviceData.map((item, index) => (
                                <div key={index} className="bg-red-200/20 p-4">
                                    <div className="flex flex-col justify-center items-center md:min-h-[120px]">
                                        <div className="flex justify-center items-center gap-x-3 xl:mb-2">
                                            <h3>
                                                {item.title}
                                            </h3>
                                            <div className="text-2xl">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <p className="text-[12px] text-center">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
  
export default Services