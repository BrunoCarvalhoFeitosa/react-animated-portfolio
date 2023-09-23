import React, { useState } from "react"
import Avatar from "../../components/Avatar"
import Circles from "../../components/Circles"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
import {
    FaHtml5,
    FaCss3,
    FaSass,
    FaJs,
    FaReact,
    FaFigma
} from "react-icons/fa"
import {
    SiJquery,
    SiGraphql,
    SiNextdotjs,
    SiGatsby,
    SiAdobexd,
    SiAdobephotoshop,
    SiVtex
} from "react-icons/si"

const aboutData = [
    {
        title: "Habilidades",
        info: [
            {
                title: "Desenvolvimento Web",
                icons: [
                    <FaHtml5 key="html" />,
                    <FaCss3 key="css" />,
                    <FaSass key="scss" />,
                    <FaJs key="javascript" />,
                    <SiJquery key="jquery" />,
                    <FaReact key="react.js" />,
                    <SiNextdotjs key="next.js" />,
                    <SiGatsby key="gatsby" />,
                    <SiGraphql key="graphql" />,
                ],
            },
            {
                title: "Plataformas",
                icons: [
                    <SiVtex key="vtex" />,
                ],
            },
            {
                title: "UI/UX Design",
                icons: [
                    <FaFigma key="figma" />,
                    <SiAdobexd key="adobexd" />,
                    <SiAdobephotoshop key="photoshop" />
                ],
            },
        ],
    },
    {
        title: "Experiência",
        info: [
            {
                title: "Desenvolvedor Front-End Sênior",
                stage: "Novembro 2021 - Agosto 2023",
            },
            {
                title: "Desenvolvedor Front-End Pleno II",
                stage: "Julho 2021 - Novembro 2021",
            },
            {
                title: "Desenvolvedor Front-End Júnior II",
                stage: "Dezembro 2020 - Julho 2021",
            },
            {
                title: "Desenvolvedor Front-End Júnior",
                stage: "Junho 2019 - Dezembro 2020",
            },
        ],
    },
    {
        title: "Certificações",
        info: [
            {
                title: "Audience Dials - Mercado Ads",
                stage: "2022",
            },
            {
                title: "Brand Building - Mercado Ads",
                stage: "2022",
            },
            {
                title: "Advanced VTEX Implementation Certification (Enterprise)",
                stage: "2021",
            },
        ],
    },
]

const About = () => {
    const [index, setIndex] = useState(0)

    return (
        <div className="h-full md:h-[100vh] py-32 lg:py-0 bg-primary/30 text-center lg:text-left">
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
            <div className="w-[85%] mx-auto h-full flex flex-col items-center xl:flex-row gap-x-16">
                <div className="flex flex-col lg:flex-row items-baseline gap-x-24">
                    <div className="relative flex-1 flex flex-col justify-center lg:h-[100vh] z-10">
                        <div className="flex justify-center lg:justify-normal items-baseline gap-x-4">
                            <motion.h2
                                className="h2 text-center lg:text-left"
                                variants={fadeIn("down", 0.8)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                            >
                                Minha história
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
                            Formado em Análise e Desenvolvimento de Sistemas, foi em uma
                            consultoria que pude me desenvolver como profissional e trabalhar
                            em diversos projetos Vtex, cada qual com sua tecnologia e dificuldades, 
                            foi assim que conheci o Javascript e todo o seu ecossistema.
                        </motion.p>
                    </div>
                    <motion.div
                        className="flex-1 flex flex-col w-full mt-12"
                        variants={fadeIn("down", 1)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                            {aboutData.map((item, itemIndex) => (
                                <div
                                    key={itemIndex}
                                    className={`${index === itemIndex && "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"} relative xl:text-lg capitalize cursor-pointer after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                    onClick={() => setIndex(itemIndex)}
                                >
                                    {item.title}
                                </div>
                            ))}
                        </div>
                        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center lg:items-baseline xl:items-start text-center lg:text-left">
                            {aboutData[index].info.map((item, itemIndex) => (
                                <div key={itemIndex}>
                                    <div className="font-light">
                                        {item.title}
                                    </div>
                                    <div className="flex items-center justify-center lg:justify-start gap-x-2">
                                        <div>
                                            -
                                        </div>
                                        <div>
                                            {item.stage}
                                        </div>
                                        <div className="flex gap-x-4">
                                            {item.icons?.map((icon, itemIndex) => (
                                                <div key={itemIndex} className="text-2xl">
                                                    {icon}
                                                </div>
                                            ))}
                                        </div>
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
  
export default About