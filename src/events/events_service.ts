import { eq } from "drizzle-orm" 
import {db} from '../drizzle/db'
import {  Events_table, TIevents} from "../drizzle/schema"
import { promises } from "dns";

export const eventservice = async (limit?: number)=>{
    if(limit){
        return await db.query.Events_table.findMany({
            limit: limit,
        });
     }
     return await db.query.Events_table.findMany()
}
export const geteventservice =async(id: number)=>{
    return await db.query.Events_table.findFirst({
        where: eq(Events_table.id,id),
      
    })
 }

 export const createevent= async<T>(event: TIevents):Promise<string | any>=>{
    await db.insert(Events_table).values(event)
    return "ordermenu created successfiully"
 }

 export const updateevent= async<T>(id:number ,event:TIevents):Promise<string | any>=>{
    await db.update(Events_table).set(event).where(eq(Events_table.id,id))
    return "updated successfully"
 }

 export const deleteevent= async<T>(id:number):Promise<string | any>=>{
    await db.delete(Events_table).where(eq(Events_table.id,id))
    return "deleted successfully"
 }