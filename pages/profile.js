import { getSession } from "next-auth/react"


export default function Profile  () {
    return(
        <>
        <div className="flex justify-center mt-6 font-semibold text-xl">My Profile</div>
        <div className="h-96 bg-black w-2/4 flex justify-center mt-4 pr-10">
            <div className="h-52 bg-white w-96 flex justify-start mt-2 relative right-64"></div>
        </div>
        </>
    )
}


export async function  getServerSideProps({req}) {
   const session = await getSession({req});
   if(!session) {
    return{
        redirect: {
            destination: "/auth/signin",
            permanent: false
        }
    }
   }
   return{
    props: {
        session
    }
   }
}