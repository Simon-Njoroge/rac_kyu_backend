import {homepicsservices,gethomepic,createhomepic,updatehomepics,deletehomepics} from './homepictures_controller'
import {Hono} from "hono"
export const homepicrouters=new Hono();
homepicrouters.get("/allhomepic",homepicsservices)
homepicrouters.get("/homepic/:id",gethomepic)
homepicrouters.post("/addhomepic",createhomepic)
homepicrouters.put("/updatehomepic/:id",updatehomepics)
homepicrouters.delete("/deletehomepic/:id",deletehomepics)