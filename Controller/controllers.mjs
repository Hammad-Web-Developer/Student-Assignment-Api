import { assignments  } from "../Data.mjs"

export const home = (req,res) => {
    res.status(200).send("Welcome to Student Assignment Api")
}
export const getAst = (req,res) => {
    res.status(200).send(assignments)
}
export const getOne = (req,res)=> {
    let found = false;
    const reqAst = assignments.find((item)=>{ 
        if(item.id === Number(req.params.id)){
            found = true;
            return item;
        }
        })
    if (!found) 
        res.status(404).send("Assignment not found!")
    else
    res.status(200).send(reqAst)
}
export const createAst = (req,res)=> {
    const id = assignments.length + 1;
    const newAst = {
        "id": id,
        "title": req.body.title,
        "description": req.body.description,
        "subject": req.body.subject,
        "dueDate": req.body.dueDate,
        "marks": req.body.marks,
        "priority": req.body.priority
    }
    assignments.push(newAst)
    res.status(201).send(assignments)
}
export const delAst = (req,res)=>{
    const reqAst = assignments.filter((item) => item.id !== Number(req.params.id))
    res.status(200).send(reqAst)
}
export const updateAst = (req,res) => {
    const reqAst = assignments.find((item)=> item.id === Number(req.params.id))
    if (!reqAst){
        res.status(404).send("Assignment not found!")
        res.end()
    }
    const body = req.body
    for (let [key1,val1] of Object.entries(body)){
        for (let [key2,val2] of Object.entries(reqAst)){
            if (key1 === key2){
                reqAst[key1] = val1
                continue
            }
        }
    }
    const updated = assignments.map((item)=> {
        if (item.id === reqAst.id)
            return reqAst
        return item
    })
    res.status(200).send(updated)
}
export const findAst = (req,res) => {
    let filtered = [...assignments]
    for (let [key1,val1] of Object.entries(req.query)){
        filtered = filtered.filter((item) => String(item[key1]) === val1)
    }
    if (filtered.length === 0)
        res.status(404).send("No resource found!")
    else
    res.status(200).send(filtered)
}