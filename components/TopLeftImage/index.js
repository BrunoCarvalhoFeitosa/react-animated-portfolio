import Image from "next/image"

const TopLeftImage = () => {
    return (
        <div className="hidden lg:flex absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50">
            <Image
                src="/top-left-img.png"
                width={400}
                height={400}
                alt="Decoração"
            />
        </div>
    )
}
  
export default TopLeftImage
  