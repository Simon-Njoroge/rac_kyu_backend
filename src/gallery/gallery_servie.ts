import { eq } from "drizzle-orm" 
import {db} from '../drizzle/db'
import {  gallery_table, TIgallery} from "../drizzle/schema"

export const galleryservice = async (limit?: number)=>{
    if(limit){
        return await db.query.gallery_table.findMany({
            limit: limit,
        });
     }
     return await db.query.gallery_table.findMany({
      orderBy: gallery_table.id
     })
}
export const getgalleryservice =async(id: number)=>{
    return await db.query.gallery_table.findFirst({
        where: eq(gallery_table.id,id),
      
    })
 }

 export const creategallery = async<T>(gallery: TIgallery):Promise<string | any>=>{
    await db.insert(gallery_table).values(gallery)
    return "ordermenu created successfiully"
 }

 export const updategallery = async<T>(id:number ,gallery:TIgallery):Promise<string | any>=>{
    await db.update(gallery_table).set(gallery).where(eq(gallery_table.id,id))
    return "updated successfully"
 }

 export const deletegallery= async<T>(id:number):Promise<string | any>=>{
    await db.delete(gallery_table).where(eq(gallery_table.id,id))
    return "deleted successfully"
 }