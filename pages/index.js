import Link from "next/link"
import { motion } from "framer-motion"
import { fadeIn } from "../variants"
import ParticlesContainer from "../components/Particles"
import Avatar from "../components/Avatar"

const Home = () => {
    return (
        <div className="h-full bg-primary/30">
            <div className="w-full h-[100vh] lg:h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
                <div className="flex flex-col justify-center h-full container mx-auto py-32 text-center xl:text-left">
                    <div className="relative z-50">
                        <motion.h1
                            className="h1"
                            variants={fadeIn("down", 0.8)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                        >
                            Transformo ideias <br />
                            <span className="text-accent">Em realidade digital</span>
                        </motion.h1>
                        <motion.p
                            variants={fadeIn("down", 1)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-12"
                        >
                            Possuo 7 anos de experiênca em desenvolvimento de sites e 4 anos de experiência em e-commerce VTEX, 
                            trabalhei em projetos de alta escalabilidade e importância como Trousseau, Loungerie, Toy Mania, 
                            Malwee, Khelf, Zinzane, Café Pilão, Mob Online, Bauducco, Wine Brands, The North Face, 
                            Segredos de Salão, Greenpeace, Drogaria Araújo e Avon.
                        </motion.p>
                        <motion.div
                            variants={fadeIn("down", 1.2)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                        >
                            <Link
                                href=""
                                className="bg-red-600 p-4 px-8 rounded-full"
                            >
                                Meu curriculum
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="lg:w-[1200px] h-full absolute right-0 bottom-0">
                <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
                </div>
                <ParticlesContainer />
                <div className="opacity-30 lg:opacity-100">
                    <motion.div
                        className="w-full md:h-full max-w-[737px] max-h-[670px] lg:absolute lg:bottom-0 lg:right-[0] sm:opacity-25"
                        variants={fadeIn("up", 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        <Avatar />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
  
export default Home
  