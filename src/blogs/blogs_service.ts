import { eq } from "drizzle-orm" 
import {db} from '../drizzle/db'
import {  blogs_table, TIblogs} from "../drizzle/schema"

export const blogservice = async (limit?: number)=>{
    if(limit){
        return await db.query.blogs_table.findMany({
            limit: limit,
        });
     }
     return await db.query.blogs_table.findMany()
}
export const getblogservice =async(id: number)=>{
    return await db.query.blogs_table.findFirst({
        where: eq(blogs_table.id,id),
      
    })
 }

 export const createblog = async<T>(blog: TIblogs):Promise<string | any>=>{
    await db.insert(blogs_table).values(blog)
    return "ordermenu created successfiully"
 }

 export const updateblog = async<T>(id:number ,blog:TIblogs):Promise<string | any>=>{
    await db.update(blogs_table).set(blog).where(eq(blogs_table.id,id))
    return "updated successfully"
 }

 export const deleteblog= async<T>(id:number):Promise<string | any>=>{
    await db.delete(blogs_table).where(eq(blogs_table.id,id))
    return "deleted successfully"
 }