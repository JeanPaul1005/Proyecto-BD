const { Pool } = require('pg');


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'jeanpaul',
    database: 'proyecto',
    port: '5432'
});

const profesorCtrl = {}

profesorCtrl.renderCrear = (req, res) => {
    res.render('profesor-create')
}

//create
profesorCtrl.createProfesor = async (req, res) => {
    const {
        telefono,
        nombre,
        apellidos,
        despacho,
        grado
    } = req.body
    try {
        
        await pool.query('insert into profesor (telefono_profesor, nombre_profesor, apellido_profesor, despacho_profesor, grado_profesor ) values ($1, $2, $3, $4, $5)', [telefono, nombre, apellidos, despacho, grado])

    } catch (error) {

        console.error(error)

    }

    res.redirect('/')
}

//read
profesorCtrl.readProfesor = async (req, res) => {
    try {
        
        const profs = await pool.query('select * from profesor')
    
        const profesores = profs.rows
        console.log(profesores)
        res.render('profesor', {profesores})

    } catch (err) {
        console.error(err)
    }
}

profesorCtrl.renderUpdate = async (req, res) => {    

    const profesor = await pool.query('select * from profesor where id_profesor = $1', [req.params.id])

    prof = profesor.rows[0]

    console.log(prof)

    res.render('profesor-update', {prof})
}

//update
profesorCtrl.updateProfesor = async (req, res) => {
    const id = parseInt(req.params.id)

    const {telefono, nombre, apellido, despacho, grado} = req.body

    await pool.query('update profesor set telefono_profesor = $1, nombre_profesor = $2, apellido_profesor = $3, despacho_profesor = $4, grado_profesor = $5 where id_profesor = $6', [telefono, nombre, apellido, despacho, grado, id])
    res.redirect('/')

}


//delete
profesorCtrl.deleteProfesor = async (req, res) => {
    const id = parseInt(req.params.id)

    try {
        
        await pool.query('delete from profesor where id_profesor = $1', [id])

    } catch (error) {
        console.error(error)
    }

    res.redirect('/')
}

module.exports = profesorCtrl