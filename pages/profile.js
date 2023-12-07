import { getSession } from "next-auth/react";
import classes from "./profile.module.css";
import Link from "next/link";


export default function Profile  () {
    return(
        <>
        <nav className={classes.header}>
            <div>
                <Link href={"/"}></Link>
            </div>
            <div>
                <ul>
                    <Link href={"/"}><li>Home</li></Link>
                    <Link href={"/about"}><li>About</li></Link>
                    <Link href={"/service"}><li>Service</li></Link>
                    <Link href={"/contact me"}><li>Contact me</li></Link>
                </ul>
            </div>
        </nav>
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