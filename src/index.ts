import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import {sevenareasrouters} from './seven_areas/seven_areas_router'
import { projectsrouters } from './projects/projects_router'
import { presidentsrouters } from './presidents/presidents_router'
import { membersrouters } from './members/memebers_router'
import { homepicrouters } from './home_picture/homepicutres_router'
import { galleryrouters } from './gallery/gallery_router'
import { eventrouters } from './events/events_router'
import { blogsrouters } from './blogs/blogs_router'
import { adminrouter } from './admin/adminrouter'
import { downloadrouters } from './downloads/downloads_router'
const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Member!')
})
app.use('/*', cors())
app.route("/",sevenareasrouters)
app.route("/",projectsrouters)
app.route("/",presidentsrouters)
app.route("/",membersrouters)
app.route("/",homepicrouters)
app.route("/",galleryrouters)
app.route("/",eventrouters)
app.route("/",blogsrouters)
app.route("/",adminrouter)
app.route("/",downloadrouters)
const port = 8000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
