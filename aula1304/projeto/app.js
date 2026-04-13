const express = require('express')
const app = express()
const port = 3000

const tasks = []

//tratar o cors - pois ele impede que um site 
// faça requisições para outro site sem permissão explícita.
const cors = require('cors')
app.use(cors())

app.get('/tasks', (req, resp) => {
    resp.json(tasks)
})

app.post('/tasks',express.json(), (req, resp) => {
    const task = req.body
    tasks.push(task) //adicionar a nova tarefa na lista de tarefas
    resp.status(201).json(tasks) //retorno a lista com a tarefa inclusa
})

app.listen(port, () => {
    console.log('Servidor inicializado com sucesso')
})
