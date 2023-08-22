import Image from "next/image"

const Avatar = () => {
    return (
        <div className="h-[100vh] xl:flex xl:max-w-none">
            <Image
                src={"/avatar.png"}
                width={737}
                height={580}
                alt="Avatar"
                className="w-full h-full object-cover lg:object-none translate-z-0"
            />
        </div>
    )
}
  
export default Avatar
  