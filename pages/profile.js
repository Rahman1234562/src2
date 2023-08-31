import { getSession } from "next-auth/react"


export default function Profile  () {
    return(
        <>
        <div className="flex justify-center mt-6 font-semibold text-xl">this is my profile</div>
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