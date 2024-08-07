import { eq } from "drizzle-orm" 
import {db} from '../drizzle/db'
import {  seven_areas_table, TIsevenareas} from "../drizzle/schema"
import { memoryUsage } from "process";

export const areaservice = async (limit?: number)=>{
    if(limit){
        return await db.query.seven_areas_table.findMany({
            limit: limit,
        });
     }
     return await db.query.seven_areas_table.findMany({
      orderBy: seven_areas_table.id
     })
}
export const getaraeservice =async(id: number)=>{
    return await db.query.seven_areas_table.findFirst({
        where: eq(seven_areas_table.id,id),
      
    })
 }

 export const createarea= async<T>(area: TIsevenareas):Promise<string | any>=>{
    await db.insert(seven_areas_table).values(area)
    return "ordermenu created successfiully"
 }

 export const updatearea = async<T>(id:number ,area:TIsevenareas):Promise<string | any>=>{
    await db.update(seven_areas_table).set(area).where(eq(seven_areas_table.id,id))
    return "updated successfully"
 }

 export const deletearea= async<T>(id:number):Promise<string | any>=>{
    await db.delete(seven_areas_table).where(eq(seven_areas_table.id,id))
    return "deleted successfully"
 }