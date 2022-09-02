const Response = require("../../utils/response");

const FacultiesController = (facultyService)=>{
    const{registerFaculty,findAllFaculties,findByIdFaculties,updateByIdFaculty,deleteByIdFaculty} = facultyService;

    const create = async (req,res)=>{
        try {
            console.log(('create faculty....'));
            const payLoad = req.body;
            const data = await registerFaculty(payLoad)
            res.json(Response().successMessage(res.statusCode,'Success',data))
        } catch (error) {
            res.status(400).json(Response().errorMessage(res.statusCode,error.message))
        }
    }
    
    const list = async (req,res)=>{
        try {
            
            console.log('list faulties....');
            const data = await findAllFaculties();
            res.json(Response().successMessage(res.statusCode,'Success',data))
        } catch (error) {
            res.json(Response().errorMessage(res.statusCode,error.message))
        }
    }

    const findById = async (req, res) => {
        try {
            const { id } = req.params;
            const data = await findByIdFaculties(id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', data))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }

    const update = async (req, res) => {
        try {
            const payload = req.body;
            const data = await updateByIdFaculty(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', data))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }

    const remove = async (req, res) => {
        try {
            const { id } = req.params;
            const data = await deleteByIdFaculty(id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', data))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }

    return{
        create,list,findById,update,remove
    }
}

module.exports=FacultiesController;