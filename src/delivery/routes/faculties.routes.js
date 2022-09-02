const express = require('express')
const router = express.Router()

const FacultiesRoutes = (facultiesController)=>{
    const {create,list,findById,update,remove} =  facultiesController;
    router.get('/',list)
    router.post('/',create)
    router.get('/:id', findById);
    router.put('/', update);
    router.delete('/:id', remove);
    return router
}

module.exports = FacultiesRoutes;