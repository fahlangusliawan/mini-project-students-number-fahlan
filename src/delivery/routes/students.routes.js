const express = require('express')
const router = express.Router()

const StudentsRoutes = (studentsController)=>{
    const {create,list,findById,update,remove} =  studentsController;
    router.get('/',list)
    router.post('/',create)
    router.get('/:id', findById);
    router.put('/', update);
    router.delete('/:id', remove);
    return router
}

module.exports = StudentsRoutes;