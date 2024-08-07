import { desc, eq } from "drizzle-orm" 
import {db} from '../drizzle/db'
import {  presidents_table, TIpresident} from "../drizzle/schema"


export const presidentservice = async (limit?: number)=>{
    if(limit){
        return await db.query.presidents_table.findMany({
            limit: limit,
        });
     }
     return await db.query.presidents_table.findMany({
      orderBy: presidents_table.id
     })
}
export const getpresidentservice =async(id: number)=>{
    return await db.query.presidents_table.findFirst({
        where: eq(presidents_table.id,id),
      
    })
 }

 export const createpresident = async<T>(president: TIpresident):Promise<string | any>=>{
    await db.insert(presidents_table).values(president)
    return "ordermenu created successfiully"
 }

 export const updatepresident = async<T>(id:number ,president:TIpresident):Promise<string | any>=>{
    await db.update(presidents_table).set(president).where(eq(presidents_table.id,id))
    return "updated successfully"
 }

 export const deletepresident= async<T>(id:number):Promise<string | any>=>{
    await db.delete(presidents_table).where(eq(presidents_table.id,id))
    return "deleted successfully"
 }