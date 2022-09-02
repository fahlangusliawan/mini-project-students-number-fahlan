const express = require('express')
const router = express.Router()

const ProgramsRoutes = (programsController)=>{
    const {create,list,findById,update,remove} =  programsController;
    router.get('/',list)
    router.post('/',create)
    router.get('/:id', findById);
    router.put('/', update);
    router.delete('/:id', remove);
    return router
}

module.exports = ProgramsRoutes;