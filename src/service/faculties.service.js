const FacultiesService = (facultiesRepository) => {
    const {create, list, getById, update, remove} = facultiesRepository

    const registerFaculty = async (newData) => {
        try {
            return await create(newData)   
        } catch (error) {
            return error.message
        }
    }
    const findAllFaculties = async (text) => {
        try {
            return await list(text)   
        } catch (error) {
            return error.message
        }
    }
    const findByIdFaculties = async (id) => {
        try {
            return await getById(id)
        } catch (error) {
            return error.message
        }
    }
    const updateByIdFaculty = async (id,newUpdate) => {
        try {
            return await update(id,newUpdate)
        } catch (error) {
            return error.message
        }
    }
    const deleteByIdFaculty = async (id) => {
        try {
            return await remove(id)
        } catch (error) {
            return error.message
        }
    }

    return { 
        registerFaculty,findAllFaculties,findByIdFaculties,updateByIdFaculty,deleteByIdFaculty
    }

}

module.exports = FacultiesService;