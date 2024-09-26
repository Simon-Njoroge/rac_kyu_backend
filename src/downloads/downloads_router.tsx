import {downloadsservices,getdownload,createdownloads,updatedownloads,deletedownloads} from './downloads_container'
import {Hono} from "hono"
export const downloadrouters=new Hono();
downloadrouters.get("/alldownloads",downloadsservices)
downloadrouters.get("/download/:id",getdownload)
downloadrouters.post("/adddownload",createdownloads)
downloadrouters.put("/updatedownload/:id",updatedownloads)
downloadrouters.delete("/deletedownload/:id",deletedownloads)