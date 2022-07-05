const { Router } = require('express')
const router = Router()

const {
    createProfesor,
    readProfesor,
    updateProfesor,
    deleteProfesor,
    renderCrear,
    renderUpdate
} = require('../controllers/profesor')


router.get('/profesor/crear', renderCrear) 
router.post('/profesor/crear', createProfesor) 
router.get('/', readProfesor) 
router.post('/profesor/actualizar/:id', updateProfesor)
router.get('/profesor/actualizar/:id', renderUpdate)
router.get('/profesor/eliminar/:id', deleteProfesor)


module.exports = router