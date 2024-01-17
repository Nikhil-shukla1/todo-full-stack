const zod = require("zod");

const createTodo = zod.object({
    title:zod.string(),
    discription:zod.string()
})

const updateTodo = zod.object({
    id: zod.string(),
})

module.exports = {
    updateTodo:updateTodo,
    createTodo:createTodo
}