
import { pgTable, varchar, serial} from 'drizzle-orm/pg-core';
import { relations, sql } from 'drizzle-orm';
import { title } from 'process';

export const Home_pictures_table = pgTable("Home_pictures_table", {
    id: serial("id").primaryKey(),
    picture: varchar("picture"),
    description: varchar("description")
});

export const seven_areas_table = pgTable("seven_areas_table", {
    id: serial("id").primaryKey(),
    area: varchar("area"),
    image: varchar("picture"),
    description: varchar("description")
});

export const Events_table = pgTable("Events_table", {
    id: serial("id").primaryKey(),
    poster:varchar("poster"),
    description: varchar("description")
});

export const Members_table = pgTable("Members_table", {
    id: serial("id").primaryKey(),
    members_name:varchar("members_name"),
    image: varchar("image")
});

export const presidents_table = pgTable("presidents_table", {
    id: serial("id").primaryKey(),
    president_name:varchar("president_name"),
    year: varchar("year"),
    image: varchar("image")
});

export const projects_table = pgTable("projects_table", {
    id: serial("id").primaryKey(),
    project:varchar("project"),
    date:varchar("date"),
    description: varchar("description"),
    image: varchar("image"),
   
});

export const gallery_table = pgTable("gallery_table", {
    id: serial("id").primaryKey(),
    image: varchar("image"),
    link: varchar("link"),
    description: varchar("description")
});


export const blogs_table = pgTable("blogs_table", {
    id: serial("id").primaryKey(),
    title: varchar("image"),
    descrition: varchar("descrition"),
    image: varchar("image")
});


export type TIhomepics=typeof Home_pictures_table.$inferInsert
export type TShomepics=typeof Home_pictures_table.$inferSelect

export type TIsevenareas=typeof seven_areas_table.$inferInsert
export type TSsevenareas=typeof seven_areas_table.$inferSelect

export type TIevents=typeof Events_table.$inferInsert
export type TSevents=typeof Events_table.$inferSelect

export type TImembers=typeof Members_table.$inferInsert
export type TSmembers=typeof Members_table.$inferSelect

export type TIpresident=typeof presidents_table.$inferInsert
export type TSpresident=typeof presidents_table.$inferSelect

export type TIproject=typeof projects_table.$inferInsert
export type TSproject=typeof projects_table.$inferSelect

export type TIgallery=typeof gallery_table.$inferInsert
export type TSgallery=typeof gallery_table.$inferSelect

export type TIblogs=typeof blogs_table.$inferInsert
export type TSblogs=typeof blogs_table.$inferSelect