import Link from "next/link"
import { useRouter } from "next/router"
import { HiHome, HiUser, HiViewColumns, HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope } from 'react-icons/hi2'

export const navData = [
    {
      name: 'Home',
      path: '/',
      icon: <HiHome />
    },
    {
      name: 'Sobre',
      path: '/sobre-mim',
      icon: <HiUser />
    },
    {
      name: 'Serviços',
      path: '/servicos',
      icon: <HiRectangleGroup />
    },
    {
      name: 'Trabalhos',
      path: '/trabalhos',
      icon: <HiViewColumns />
    },
    {
      name: 'Testemunhos',
      path: '/testemunhos',
      icon: <HiChatBubbleBottomCenterText />,
    },
    {
      name: 'Contato',
      path: '/contato',
      icon: <HiEnvelope />,
    },
]
  
const Nav = () => {
    const router = useRouter()
    const pathname = router.pathname

    return (
      <nav className="flex flex-col xl:justify-center items-center gap-y-4 fixed top-0 bottom-0 mt-auto xl:right-[2%] w-full xl:w-16 xl:max-w-md xl:h-screen h-max z-50">
        <div className="flex justify-between xl:justify-center items-center xl:flex-col gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-red-200/10 xl:h-max w-full py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
          {navData.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${link.path === pathname && "text-accent"
            } relative flex items-center group hover:text-accent transition-all duration-300 outline-none`}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex items-center p-[6px] text-primary rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2">

                  </div>
                </div>
              </div>
              <div>
                {link.icon}
              </div>
            </Link>
          ))}
        </div>
      </nav>
    )
}
  
export default Nav  