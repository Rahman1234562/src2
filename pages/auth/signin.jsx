
import { Form } from "@/components/form";
import { signIn } from 'next-auth/react';

export default function SignIn () {

    const onSubmit = (email, password) => {
       signIn("credentials", {redirect: false, email, password})
    }
    return (
        <>

        <Form signIn={true} onSubmitForm={onSubmit}/>
        
        </>

        
    )
}