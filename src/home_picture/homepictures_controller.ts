import{homepictureservice,gethomepictureservice,createhomepicture,updatehomepic,deletehomepic} from './homepicture_service'
import {getController,createallController,deleteallController,updateallController} from '../generics/controller'

import { Context } from 'hono'
export const homepicsservices = async (c:Context)=>{
    try{
        const homepic = await homepictureservice()
        if(homepic == null || homepic.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(homepic,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const gethomepic=getController(gethomepictureservice)
export const createhomepic=createallController(createhomepicture)
export const updatehomepics=updateallController(gethomepictureservice,updatehomepic)
export const deletehomepics=deleteallController(gethomepictureservice,deletehomepic)