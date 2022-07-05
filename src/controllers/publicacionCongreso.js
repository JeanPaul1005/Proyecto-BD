const client = require('../database/client.js')

const publicacionCongresoCtrl = {}

publicacionCongresoCtrl.createpublicacionCongreso = async (req, res) => {
    const id_profesor = res.params.id 

    const {        
        titulo, 
        tipo_congreso_publicacionCongreso,
        editorial_publicacionCongreso,
        fecha_inicio_publicacionCongreso,
        fecha_fin_publicacionCongreso,
        id_publicacion
    } = req.body

    await client.query('insert into publicacion values ($1, $2, $3)', [id_publicacion, titulo, id_profesor])

    await client.query('insert into publicacionCongreso values ($1, $2, $3, $4, $5)',[tipo_congreso_publicacionCongreso, editorial_publicacionCongreso, fecha_inicio_publicacionCongreso, fecha_fin_publicacionCongreso, id_publicacion])


    res.redirect('/')

}
publicacionCongresoCtrl.readpublicacionCongreso = async (req, res) => {

    const response = await client.query('select * from publicacionCongreso  order by id_publicacion')

    res.redirect('/', {response})

}

publicacionCongresoCtrl.updatepublicacionCongreso = async (req, res) => {

    const id_publicacion = parseInt(req.params.id)

    const {        
        titulo, 
        tipo_congreso_publicacionCongreso,
        editorial_publicacionCongreso,
        fecha_inicio_publicacionCongreso,
        fecha_fin_publicacionCongreso
    } = req.body

    await client.query('update publicacion set titulo_publicacion = $1,  where id_publicacion = $2',  [titulo, id_publicacion])

    await client.query('update publicacionCongreso set tipo_congreso_publicacionCongreso = $1, editorial_publicacionCongreso = $2, fecha_inicio_publicacionCongreso = $3, fecha_fin_publicacionCongreso = $4  where id_publicacion = $5', [tipo_congreso_publicacionCongreso, editorial_publicacionCongreso, fecha_inicio_publicacionCongreso, fecha_fin_publicacionCongreso, id_publicacion])

    res.redirect('back')

}

publicacionCongresoCtrl.deletepublicacionCongreso = async (req, res) => {

    const id = req.params.id

    await client.query('delete from publicacion where id_publicacion = $1', [id])

    await client.query('delete from publicacionCongreso where id_publicacion = $1', [id])

    res.redirect('back')

}

module.exports = publicacionCongresoCtrl