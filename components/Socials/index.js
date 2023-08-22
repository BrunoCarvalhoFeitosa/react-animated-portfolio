import Link from "next/link"
import { 
    RiYoutubeLine,
    RiInstagramLine,
    RiFacebookLine,
    RiDribbbleLine,
    RiBehanceLine,
    RiLinkedinLine,
    RiGithubLine
} from "react-icons/ri"

const Socials = () => {
    return (
        <div className="flex items-center gap-x-4 text-xl">
            <Link href="https://github.com/BrunoCarvalhoFeitosa" className="hover:text-accent transition-all duration-300">
                <RiGithubLine />
            </Link>
            <Link href="https://br.linkedin.com/in/bruno-carvalho-feitosa" className="hover:text-accent transition-all duration-300">
                <RiLinkedinLine />
            </Link>
            <Link href="https://br.linkedin.com/in/bruno-carvalho-feitosa" className="hover:text-accent transition-all duration-300">
                <RiYoutubeLine />
            </Link>
            <Link href="https://br.linkedin.com/in/bruno-carvalho-feitosa" className="hover:text-accent transition-all duration-300">
                <RiInstagramLine />
            </Link>
            <Link href="https://br.linkedin.com/in/bruno-carvalho-feitosa" className="hover:text-accent transition-all duration-300">
                <RiFacebookLine />
            </Link>
            <Link href="https://br.linkedin.com/in/bruno-carvalho-feitosa" className="hover:text-accent transition-all duration-300">
                <RiDribbbleLine />
            </Link>
            <Link href="https://br.linkedin.com/in/bruno-carvalho-feitosa" className="hover:text-accent transition-all duration-300">
                <RiBehanceLine />
            </Link>
        </div>
    )
}
  
export default Socials
  