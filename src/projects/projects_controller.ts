import {projectservice,getprojectservice,createproject,updateproject,deleteproject} from './projects_service'
import {getController,createallController,deleteallController,updateallController} from '../generics/controller'
import { Context } from 'hono'
export const projectservices = async (c:Context)=>{
    try{
        const project = await projectservice()
        if(project == null || project.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(project,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const getproject=getController(getprojectservice)
export const createprojects=createallController(createproject)
export const updateprojects=updateallController(getprojectservice,updateproject)
export const deleteprojects=deleteallController(getprojectservice,deleteproject)