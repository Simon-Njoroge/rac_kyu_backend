import {galleryservices,getgallery,creategallerys,updategallerys,deletegallerys} from './gallery_controller'
import {Hono} from "hono"
export const galleryrouters=new Hono();
galleryrouters.get("/allgalley",galleryservices)
galleryrouters.get("/gallery/:id",getgallery)
galleryrouters.post("/addgallery",creategallerys)
galleryrouters.put("/updategallery/:id",updategallerys)
galleryrouters.delete("/deletegallery/:id",deletegallerys)