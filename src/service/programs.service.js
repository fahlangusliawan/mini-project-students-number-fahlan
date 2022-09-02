const ProgramsService = (programRepository) => {
    const {create, list, getById, update, remove} = programRepository

    const registerPrograms = async (newData) => {
        try {
            return await create(newData)   
        } catch (error) {
            return error.message
        }
    }
    const findAllPrograms = async (text) => {
        try {
            return await list(text)   
        } catch (error) {
            return error.message
        }
    }
    const findByIdPrograms = async (id) => {
        try {
            return await getById(id)
        } catch (error) {
            return error.message
        }
    }
    const updateByIdPrograms = async (id,newUpdate) => {
        try {
            return await update(id,newUpdate)
        } catch (error) {
            return error.message
        }
    }
    const deleteByIdPrograms = async (id) => {
        try {
            return await remove(id)
        } catch (error) {
            return error.message
        }
    }

    return { 
        registerPrograms,findAllPrograms,findByIdPrograms,updateByIdPrograms,deleteByIdPrograms
    }

}

module.exports = ProgramsService;