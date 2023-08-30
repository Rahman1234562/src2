import Link from "next/link"


export const Header = () => {
    return(
        <div className="w-full h-20 flex justify-between items-center shadow-md px-10">
             <h1 className="font-bold">Hunting Coder</h1>
           <div className="flex gap-4">
            
             <Link className="shadow-md py-2 px-6 border[1px] border-black rounded-full font-semibold
             hover: bg-[#efefef]"
             href={"/profile"}>
                Profile
                </Link>
             <Link className="shadow-md py-2 px-6 border[1px] border-black rounded-full font-semibold hover: bg-[#efefef]"
             href={"/auth/signin"}>
                sign in</Link>

             <div className="shadow-md py-2 px-6 bg-black rounded-full cursor-pointer text-white font-semibold hove: opacity-70">
               Log out
             </div>
           </div>

           
        </div>
    )
}