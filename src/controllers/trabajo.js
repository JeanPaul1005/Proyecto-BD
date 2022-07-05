const client = require('../database/client.js')

const trabajoCtrl = {}


//create
trabajoCtrl.createTrabajo = async (req, res) => {
    const {id, telfono, nombre, apellido, despacho, grado} = req.body
    
    await client.query('insert into trabajo values ($1, $2, $3, $4, $5, $6)', [id, telfono, nombre, apellido, despacho, grado])

    res.redirect('/')
}

//read
trabajoCtrl.readTrabajo = async (req, res) => {
    const response = await client.query('select * from trabajo order by id_trabajo asc')

    res.redirect('/', {response})
}


//update
trabajoCtrl.updateTrabajo = async (req, res) => {
    const id = parseInt(req.params.id)

    const {telfono, nombre, apellido, despacho, grado} = req.body

    await client.query('update trabajo set telefono_trabajo = $1, nombre_trabajo = $2, apellido_trabajo = $3, despacho_trabajo = $4, grado_trabajo = $5 where id_trabajo = $6', [telfono, nombre, apellido, despacho, grado, id])
    res.redirect('back')
}


//delete
trabajoCtrl.deleteTrabajo = async (req, res) => {
    const id = req.params.id

    await client.query('delete from trabajo where id_trabajo = $1', [id])

    res.redirect('back')
}

module.exports = trabajoCtrl