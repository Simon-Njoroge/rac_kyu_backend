import {areaservice,getaraeservice,createarea,updatearea,deletearea} from './seven_areas_service'
import {getController,createallController,deleteallController,updateallController} from '../generics/controller'
import { Context } from 'hono'
export const areasservices = async (c:Context)=>{
    try{
        const area = await areaservice()
        if(area == null || area.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(area,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const getarea=getController(getaraeservice)
export const createareas=createallController(createarea)
export const updateareas=updateallController(getaraeservice,updatearea)
export const deleteareas=deleteallController(getaraeservice,deletearea)