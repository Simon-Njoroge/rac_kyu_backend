import {memberservices,getmember,createmembers,updatemembers,deletemembers} from './members_contoller'
import {Hono} from "hono"
export const membersrouters=new Hono();
membersrouters.get("/allmembers",memberservices)
membersrouters.get("/member/:id",getmember)
membersrouters.post("/addmember",createmembers)
membersrouters.put("/updatemember:id",updatemembers)
membersrouters.delete("/deletemember/:id",deletemembers)