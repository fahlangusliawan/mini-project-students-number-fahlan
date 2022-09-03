const express = require('express')
const router = express.Router()

const BillsRoutes = (billsController)=>{
    const {create,list,findByNPM,update,remove} =  billsController;
    router.get('/',list);
    router.post('/',create);
    router.get('/:id', findByNPM);
    router.put('/', update);
    router.delete('/:id', remove);
    return router
}

module.exports = BillsRoutes;