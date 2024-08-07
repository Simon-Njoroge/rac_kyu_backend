import { eq } from "drizzle-orm" 
import {db} from '../drizzle/db'
import {  projects_table, TIproject} from "../drizzle/schema"
import { memoryUsage } from "process";

export const projectservice = async (limit?: number)=>{
    if(limit){
        return await db.query.projects_table.findMany({
            limit: limit,
        });
     }
     return await db.query.projects_table.findMany({
      orderBy: projects_table.id
     })
}
export const getprojectservice =async(id: number)=>{
    return await db.query.presidents_table.findFirst({
        where: eq(projects_table.id,id),
      
    })
 }

 export const createproject= async<T>(project: TIproject):Promise<string | any>=>{
    await db.insert(projects_table).values(project)
    return "ordermenu created successfiully"
 }

 export const updateproject = async<T>(id:number ,project:TIproject):Promise<string | any>=>{
    await db.update(projects_table).set(project).where(eq(projects_table.id,id))
    return "updated successfully"
 }

 export const deleteproject= async<T>(id:number):Promise<string | any>=>{
    await db.delete(projects_table).where(eq(projects_table.id,id))
    return "deleted successfully"
 }
