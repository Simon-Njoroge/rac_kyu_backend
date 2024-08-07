import {eventsservices,getevent,createevents,updateevents,deleteevents} from './events_contoller'
import {Hono} from "hono"
export const eventrouters=new Hono();
eventrouters.get("/allevents",eventsservices)
eventrouters.get("/event/:id",getevent)
eventrouters.post("/addevent",createevents)
eventrouters.put("/updateevent/:id",updateevents)
eventrouters.delete("/deleteevent/:id",deleteevents)