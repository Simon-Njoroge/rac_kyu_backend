import {blogservice,getblogservice,createblog,updateblog,deleteblog} from './blogs_service'
import {getController,createallController,deleteallController,updateallController} from '../generics/controller'

import { Context } from 'hono'
export const blogsservices = async (c:Context)=>{
    try{
        const blogs = await blogservice()
        if(blogs == null || blogs.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(blogs,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const getblog=getController(getblogservice)
export const createblogs=createallController(createblog)
export const updateblogs=updateallController(getblogservice,updateblog)
export const deleteblogs=deleteallController(getblogservice,deleteblog)