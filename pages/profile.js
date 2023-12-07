import { getSession } from "next-auth/react"


export default function Profile  () {
    return(
        <>
          <div>this is a div</div>
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