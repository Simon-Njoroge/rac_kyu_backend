import {blogsservices,getblog,createblogs,updateblogs,deleteblogs} from './blogs_contoller'
import {Hono} from "hono"
export const blogsrouters=new Hono();
blogsrouters.get("/allblogs",blogsservices)
blogsrouters.get("/blog/:id",getblog)
blogsrouters.post("/addblog",createblogs)
blogsrouters.put("/updateblog/:id",updateblogs)
blogsrouters.delete("/deleteblog/:id",deleteblogs)