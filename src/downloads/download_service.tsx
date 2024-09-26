import { eq } from "drizzle-orm" 
import {db} from '../drizzle/db'
import {  download_table, TIdownloads} from "../drizzle/schema"

export const downloadsservice = async (limit?: number)=>{
    if(limit){
        return await db.query.download_table.findMany({
            limit: limit,
        });
     }
     return await db.query.download_table.findMany({
      orderBy: download_table.id
     })
}
export const getdownloadservice =async(id: number)=>{
    return await db.query.download_table.findFirst({
        where: eq(download_table.id,id),
      
    })
 }

 export const createdownload= async(download: TIdownloads):Promise<string | any>=>{
    await db.insert(download_table).values(download)
    return "download created successfiully"
 }

 export const updatedownload = async(id:number ,download:TIdownloads):Promise<string | any>=>{
    await db.update(download_table).set(download).where(eq(download_table.id,id))
    return "updated successfully"
 }

 export const deletedownload= async(id:number):Promise<string | any>=>{
    await db.delete(download_table).where(eq(download_table.id,id))
    return "deleted successfully"
 }