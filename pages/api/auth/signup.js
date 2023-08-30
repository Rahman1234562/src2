import { registerUser } from "@/services/user";


export default function handler(req, res) {
   if(req.method !== "POST"){
    res.status(404).send();
   }

   const {email, password} = req.body;
   try{
       const data = registerUser(email, password);
       res.status(201).send();
       console.log(data);
   }catch (err) {
     res.status(401).json({message: err})
   }

  }