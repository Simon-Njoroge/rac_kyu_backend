import { Context } from "hono";
import {createadminservice,adminloginservice} from './adminservice'
import bcrypt from "bcrypt";
import "dotenv/config" 
import{sign} from "hono/jwt"
export const registeradmin = async(c:Context)=>{
    try{
        const admin=await c.req.json();
        const pass =admin.password;
        const hashedPassword = await bcrypt.hash(pass,10);
        admin.password = hashedPassword
        const createadmin= await createadminservice(admin);
        if(!createadmin){
            return c.text("Failed to create admin", 400)
        }

        return c.json({msg: createadmin},201)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
}}
export const loginadmin = async(c:Context)=>{
    try{
        const admin=await c.req.json();
        const adminlogin = await adminloginservice(admin);
        const adminmatch= await bcrypt.compare(admin.password as string , adminlogin?.password as string)
        if(!adminmatch){
            return c.text("Invalid credentials", 401)
        }else{ 
        let payload ={
            adminemail: adminlogin?.email,
            role: adminlogin?.role,
            exp: Math.floor(Date.now() / 1000 +(60*180))   
        }
        let secret = process.env.JWT_SECRET as string;
        const token = await sign(payload,secret)
        let password = adminlogin?.password;
        let email = adminlogin?.email;
        let role =adminlogin?.role;
        let passsword = adminlogin?.password;

        return c.json({token,admin:{role,admin ,passsword}},200)
    } 
        return c.json({admin:adminlogin, match: adminmatch},200)
        console.log(adminlogin)
    }
    catch (err: any){
        return c.json({err: err?.message},400)
    }
}