import {eventservice,geteventservice,createevent,updateevent,deleteevent} from './events_service'
import {getController,createallController,deleteallController,updateallController} from '../generics/controller'

import { Context } from 'hono'
export const eventsservices = async (c:Context)=>{
    try{
        const events = await eventservice()
        if(events == null || events.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(events,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const getevent=getController(geteventservice)
export const createevents=createallController(createevent)
export const updateevents=updateallController(geteventservice,updateevent)
export const deleteevents=deleteallController(geteventservice,deleteevent)