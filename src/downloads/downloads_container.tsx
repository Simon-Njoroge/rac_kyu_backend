import {downloadsservice,getdownloadservice,createdownload,updatedownload,deletedownload} from './download_service'
import {getController,createallController,deleteallController,updateallController} from '../generics/controller'
import { Context } from 'hono'
export const downloadsservices = async (c:Context)=>{
    try{
        const download = await downloadsservice()
        if(download == null || download.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(download,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const getdownload=getController(getdownloadservice)
export const createdownloads=createallController(createdownload)
export const updatedownloads=updateallController(getdownloadservice,updatedownload)
export const deletedownloads=deleteallController(getdownloadservice,deletedownload)