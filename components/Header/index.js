import Link from "next/link"
import Socials from "../../components/Socials"

const Header = () => {
    return (
        <header className="absolute w-full px-16 py-4 lg:px-0 xl:h-[90px] z-50">
            <div className="flex flex-col items-center lg:items-start w-[88%] mx-auto">
                <div>
                    <Link href="/" className="font-bold outline-none">
                        <h1>bruno <span className="text-accent">carvalho</span></h1>
                    </Link>
                </div>
                <Socials />
            </div>
        </header>
    )
}

export default Header