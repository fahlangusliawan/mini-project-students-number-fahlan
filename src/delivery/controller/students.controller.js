const Response = require("../../utils/response");

const StudentsController = (studentsService)=>{
    const{registerStudents,findAllStudents,findByIdStudents,updateByIdStudents,deleteByIdStudents} = studentsService;

    const create = async (req,res)=>{
        try {
            console.log(('create faculty....'));
            const payLoad = req.body;
            const data = await registerStudents(payLoad)
            res.json(Response().successMessage(res.statusCode,'Success',data))
        } catch (error) {
            res.status(400).json(Response().errorMessage(res.statusCode,error.message))
        }
    }
    
    const list = async (req,res)=>{
        try {
            
            console.log('list faulties....');
            const data = await findAllStudents();
            res.json(Response().successMessage(res.statusCode,'Success',data))
        } catch (error) {
            res.json(Response().errorMessage(res.statusCode,error.message))
        }
    }

    const findById = async (req, res) => {
        try {
            const { id } = req.params;
            const data = await findByIdStudents(id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', data))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }

    const update = async (req, res) => {
        try {
            const payload = req.body;
            const data = await updateByIdStudents(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', data))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }

    const remove = async (req, res) => {
        try {
            const { id } = req.params;
            const data = await deleteByIdStudents(id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', data))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }

    return{
        create,list,findById,update,remove
    }
}

module.exports=StudentsController;