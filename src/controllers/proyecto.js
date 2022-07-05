const client = require('../database/client.js')

const proyectoCtrl = {}


//create
proyectoCtrl.createProyecto = async (req, res) => {
    const {
        id, 
        id_investigatorPrincipal, 
        nombre_proyecto,
        presupuesto_proyecto, 
        programa_financia_proyecto,
        fecha_inicio_proyecto,
        fecha_fin_proyecto
    } = req.body
    
    await client.query('insert into proyecto values ($1, $2, $3, $4, $5, $6, $7)', [id, id_investigatorPrincipal, nombre_proyecto, presupuesto_proyecto, programa_financia_proyecto, fecha_inicio_proyecto,fecha_fin_proyecto])

    res.redirect('/')
}

//read
proyectoCtrl.readProyecto = async (req, res) => {
    const response = await client.query('select * from Proyecto order by id_proyecto asc')

    res.redirect('/', {response})
}


//update
proyectoCtrl.updateProyecto = async (req, res) => {
    const id = parseInt(req.params.id)

    const {        
        id_investigatorPrincipal, 
        nombre_proyecto,
        presupuesto_proyecto, 
        programa_financia_proyecto,
        fecha_inicio_proyecto,
        fecha_fin_proyecto
    } = req.body

    const {telfono, nombre, apellido, despacho, grado} = req.body

    await client.query('update Proyecto set id_investigatorPrincipal = $1, nombre_proyecto = $2, presupuesto_proyecto = $3, programa_financia_proyecto = $4, fecha_inicio_proyecto = $5, fecha_fin_proyecto = $6 where id_proyecto = $7', [
        id_investigatorPrincipal, 
        nombre_proyecto,
        presupuesto_proyecto, 
        programa_financia_proyecto,
        fecha_inicio_proyecto,
        fecha_fin_proyecto,
        id
    ])
    res.redirect('back')
}


//delete
proyectoCtrl.deleteProyecto = async (req, res) => {
    const id = req.params.id

    await client.query('delete from proyecto where id_proyecto = $1', [id])

    res.redirect('back')
}

module.exports = proyectoCtrl