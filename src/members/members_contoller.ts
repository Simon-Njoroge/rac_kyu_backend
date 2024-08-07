import {membersservice,getmemberservice,createmember,updatemember,deletemember} from './members_service'
import {getController,createallController,deleteallController,updateallController} from '../generics/controller'
import { Context } from 'hono'
export const memberservices = async (c:Context)=>{
    try{
        const member = await membersservice()
        if(member == null || member.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(member,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const getmember=getController(getmemberservice)
export const createmembers=createallController(createmember)
export const updatemembers=updateallController(getmemberservice,updatemember)
export const deletemembers=deleteallController(getmemberservice,deletemember)