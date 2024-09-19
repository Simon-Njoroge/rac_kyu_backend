import{Admin} from '../drizzle/schema'
import {db} from '../drizzle/db'
import {sql} from "drizzle-orm"

export const createadminservice = async (admin: any): Promise< string | null> => {
    await db.insert(Admin).values(admin)
    return "admin created successfully"
}
        
export const adminloginservice = async(admin:any) =>{
 const {email,password} =admin;
 return db.query.Admin.findFirst({
    columns:{
        email: true,
        role:true,
        password:true
    }, where: sql`${admin.email}=${email}`,
//     with:{
//     admin:{
//         columns:{
//             id:true,
//             restaurant_id:true,
//             owner_id:true,
//             users:true,
//             restaurant:true
//         }
//     }
// }
 })
}