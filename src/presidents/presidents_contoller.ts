import {presidentservice,getpresidentservice,createpresident,updatepresident,deletepresident} from './presidents_service'
import {getController,createallController,deleteallController,updateallController} from '../generics/controller'
import { Context } from 'hono'
export const presidentsservices = async (c:Context)=>{
    try{
        const president = await presidentservice()
        if(president == null || president.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(president,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const getpresidents=getController(getpresidentservice)
export const createpresidents=createallController(createpresident)
export const updatepresidents=updateallController(getpresidentservice,updatepresident)
export const deletepresidents=deleteallController(getpresidentservice,deletepresident)