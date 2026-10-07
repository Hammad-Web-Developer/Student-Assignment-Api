import express from "express"
import { home,createAst,getAst,getOne,delAst, updateAst, findAst } from "../Controller/controllers.mjs"
export const idle = express.Router()
export const work = express.Router()

idle.route("/").get(home)
work.route("/").get(getAst).post(createAst)
work.route("/query").get(findAst)
work.route("/:id").get(getOne).delete(delAst).put(updateAst)
