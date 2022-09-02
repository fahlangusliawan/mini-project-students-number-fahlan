const StudentsService = (studentsRepository) => {
    const {create, list, getByNPM, update, remove} = studentsRepository

    const registerStudents = async (newData) => {
        try {
            return await create(newData)   
        } catch (error) {
            return error.message
        }
    }
    const findAllStudents = async (text) => {
        try {
            return await list(text)   
        } catch (error) {
            return error.message
        }
    }
    const findByIdStudents = async (id) => {
        try {
            return await getByNPM(id)
        } catch (error) {
            return error.message
        }
    }
    const updateByIdStudents = async (id,newUpdate) => {
        try {
            return await update(id,newUpdate)
        } catch (error) {
            return error.message
        }
    }
    const deleteByIdStudents = async (id) => {
        try {
            return await remove(id)
        } catch (error) {
            return error.message
        }
    }

    return { 
        registerStudents,findAllStudents,findByIdStudents,updateByIdStudents,deleteByIdStudents
    }

}

module.exports = StudentsService;