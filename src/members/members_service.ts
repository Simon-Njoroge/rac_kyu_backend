import { eq } from "drizzle-orm" 
import {db} from '../drizzle/db'
import {  Members_table, TImembers} from "../drizzle/schema"
import { memoryUsage } from "process";

export const membersservice = async (limit?: number)=>{
    if(limit){
        return await db.query.Members_table.findMany({
            limit: limit,
        });
     }
     return await db.query.Members_table.findMany()
}
export const getmemberservice =async(id: number)=>{
    return await db.query.Members_table.findFirst({
        where: eq(Members_table.id,id),
      
    })
 }

 export const createmember = async<T>(member: TImembers):Promise<string | any>=>{
    await db.insert(Members_table).values(member)
    return "ordermenu created successfiully"
 }

 export const updatemember = async<T>(id:number ,member:TImembers):Promise<string | any>=>{
    await db.update(Members_table).set(member).where(eq(Members_table.id,id))
    return "updated successfully"
 }

 export const deletemember= async<T>(id:number):Promise<string | any>=>{
    await db.delete(Members_table).where(eq(Members_table.id,id))
    return "deleted successfully"
 }