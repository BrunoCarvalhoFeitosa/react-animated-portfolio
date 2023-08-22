import Layout from "../components/Layout"
import { useRouter } from "next/router"
import { AnimatePresence, motion } from "framer-motion"
import Transition from "../components/Transition"
import 'react-toastify/dist/ReactToastify.css'
import "../styles/globals.css"

const  App = ({ Component, pageProps }) => {
  const router = useRouter()

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default App