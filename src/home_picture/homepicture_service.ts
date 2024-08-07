import { eq } from "drizzle-orm" 
import {db} from '../drizzle/db'
import {  Home_pictures_table, TIhomepics} from "../drizzle/schema"

export const homepictureservice = async (limit?: number)=>{
    if(limit){
        return await db.query.Home_pictures_table.findMany({
            limit: limit,
        });
     }
     return await db.query.Home_pictures_table.findMany()
}
export const gethomepictureservice =async(id: number)=>{
    return await db.query.Home_pictures_table.findFirst({
        where: eq(Home_pictures_table.id,id),
      
    })
 }

 export const createhomepicture = async<T>(picture: TIhomepics):Promise<string | any>=>{
    await db.insert(Home_pictures_table).values(picture)
    return "ordermenu created successfiully"
 }

 export const updatehomepic = async<T>(id:number ,gallery:TIhomepics):Promise<string | any>=>{
    await db.update(Home_pictures_table).set(gallery).where(eq(Home_pictures_table.id,id))
    return "updated successfully"
 }

 export const deletehomepic= async<T>(id:number):Promise<string | any>=>{
    await db.delete(Home_pictures_table).where(eq(Home_pictures_table.id,id))
    return "deleted successfully"
 }