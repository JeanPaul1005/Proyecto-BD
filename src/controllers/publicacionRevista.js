const client = require('../database/client.js')

const publicacionRevistaCtrl = {}

publicacionRevistaCtrl.createpublicacionRevista = async (req, res) => {
    const id_profesor = res.params.id 

    const {        
        titulo, 
        volumen_publicacionRevista,
        numero_publicacionRevista,
        fecha_inicio_publicacionRevista,
        fecha_fin_publicacionRevista,
        id_publicacion
    } = req.body

    await client.query('insert into publicacion values ($1, $2, $3)', [id_publicacion, titulo, id_profesor])

    await client.query('insert into publicacionRevista values ($1, $2, $3, $4, $5)',[volumen_publicacionRevista, numero_publicacionRevista, fecha_inicio_publicacionRevista, fecha_fin_publicacionRevista, id_publicacion])


    res.redirect('/')

}
publicacionRevistaCtrl.readpublicacionRevista = async (req, res) => {

    const response = await client.query('select * from publicacionRevista  order by id_publicacion')

    res.redirect('/', {response})

}

publicacionRevistaCtrl.updatepublicacionRevista = async (req, res) => {

    const id_publicacion = parseInt(req.params.id)

    const {        
        titulo, 
        volumen_publicacionRevista,
        numero_publicacionRevista,
        fecha_inicio_publicacionRevista,
        fecha_fin_publicacionRevista
    } = req.body

    await client.query('update publicacion set titulo_publicacion = $1,  where id_publicacion = $2',  [titulo, id_publicacion])

    await client.query('update publicacionRevista set volumen_publicacionRevista = $1, numero_publicacionRevista = $2, fecha_inicio_publicacionRevista = $3, fecha_fin_publicacionRevista = $4  where id_publicacion = $5', [volumen_publicacionRevista, numero_publicacionRevista, fecha_inicio_publicacionRevista, fecha_fin_publicacionRevista, id_publicacion])

    res.redirect('back')

}

publicacionRevistaCtrl.deletepublicacionRevista = async (req, res) => {

    const id = req.params.id

    await client.query('delete from publicacion where id_publicacion = $1', [id])

    await client.query('delete from publicacionRevista where id_publicacion = $1', [id])

    res.redirect('back')

}

module.exports = publicacionRevistaCtrl