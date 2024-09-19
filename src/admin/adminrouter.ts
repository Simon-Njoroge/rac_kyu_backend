import { Hono } from "hono";
// import { zValidator} from "@hono/zod-validator";
// import{regesterrestaurantschema,loginrestaurantschema} from '../validator'
import {registeradmin,loginadmin} from './admincontroller'
 export const adminrouter = new Hono();
 adminrouter.post('/register', registeradmin)

 adminrouter.post('/login',loginadmin)
