import {presidentsservices,getpresidents,createpresidents,updatepresidents,deletepresidents} from './presidents_contoller'
import {Hono} from "hono"
export const presidentsrouters=new Hono();
presidentsrouters.get("/allpresidents",presidentsservices)
presidentsrouters.get("/president/:id",getpresidents)
presidentsrouters.post("/addpresident",createpresidents)
presidentsrouters.put("/updatepresident/:id",updatepresidents)
presidentsrouters.delete("/deletepresident/:id",deletepresidents)