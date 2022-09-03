const BillsService = (billsRepository) => {
    const {create, list, getByNPM, update, remove} = billsRepository

    const registerBills = async (newData) => {
        try {
            return await create(newData)   
        } catch (error) {
            return error.message
        }
    }
    const findAllBills = async (text) => {
        try {
            return await list(text)   
        } catch (error) {
            return error.message
        }
    }
    const findByIdBills = async (id) => {
        try {
            return await getByNPM(id)
        } catch (error) {
            return error.message
        }
    }
    const updateByIdBills = async (id,newUpdate) => {
        try {
            return await update(id,newUpdate)
        } catch (error) {
            return error.message
        }
    }
    const deleteByIdBills = async (id) => {
        try {
            return await remove(id)
        } catch (error) {
            return error.message
        }
    }

    return { 
        registerBills,findAllBills,findByIdBills,updateByIdBills,deleteByIdBills
    }

}

module.exports = BillsService;