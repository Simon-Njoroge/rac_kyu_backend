import {projectservices,getproject,createprojects,updateprojects,deleteprojects} from './projects_controller'
import {Hono} from "hono"
export const projectsrouters=new Hono();
projectsrouters.get("/allprojects",projectservices)
projectsrouters.get("/project/:id",getproject)
projectsrouters.post("/addproject",createprojects)
projectsrouters.put("/updateproject/:id",updateprojects)
projectsrouters.delete("/deleteproject/:id",deleteprojects)