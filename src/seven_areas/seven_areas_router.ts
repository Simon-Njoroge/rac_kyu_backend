import {areasservices,getarea,createareas,updateareas,deleteareas} from './seven_areas_controller'
import {Hono} from "hono"
export const sevenareasrouters=new Hono();
sevenareasrouters.get("/allareas",areasservices)
sevenareasrouters.get("/area/:id",getarea)
sevenareasrouters.post("/addarea",createareas)
sevenareasrouters.put("/updatearea/:id",updateareas)
sevenareasrouters.delete("/deletearea/:id",deleteareas)