const Response = require("../../utils/response");

const BillsController = (Service)=>{
    const{registerBills,findAllBills,findByIdBills,updateByIdBills,deleteByIdBills} = Service;

    const create = async (req,res)=>{
        try {
            const payLoad = req.body;
            const data = await registerBills(payLoad)
            res.json(Response().successMessage(res.statusCode,'Success',data))
        } catch (error) {
            res.status(400).json(Response().errorMessage(res.statusCode,error.message))
        }
    }
    
    const list = async (req,res)=>{
        try {
            const data = await findAllBills();
            res.json(Response().successMessage(res.statusCode,'Success',data))
        } catch (error) {
            res.json(Response().errorMessage(res.statusCode,error.message))
        }
    }

    const findByNPM = async (req, res) => {
        try {
            const { id } = req.params;
            const data = await findByIdBills(id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', data))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }

    const update = async (req, res) => {
        try {
            const payload = req.body;
            const data = await updateByIdBills(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', data))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }

    const remove = async (req, res) => {
        try {
            const { id } = req.params;
            const data = await deleteByIdBills(id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', data))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }

    return{
        create,list,findByNPM,update,remove
    }
}

module.exports=BillsController;