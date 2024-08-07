import {galleryservice,getgalleryservice,creategallery,updategallery,deletegallery} from './gallery_servie'
import {getController,createallController,deleteallController,updateallController} from '../generics/controller'

import { Context } from 'hono'
export const galleryservices = async (c:Context)=>{
    try{
        const gallery = await galleryservice()
        if(gallery == null || gallery.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(gallery,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const getgallery=getController(getgalleryservice)
export const creategallerys=createallController(creategallery)
export const updategallerys=updateallController(getgalleryservice,updategallery)
export const deletegallerys=deleteallController(getgalleryservice,deletegallery)