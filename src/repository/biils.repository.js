const DBQUery = require("../config/DBQuery");
const BillsDto = require("../model/billsDTO");

const BillsRepository = (db)=>{
    const list= async ()=>{
        console.log('Getting all Bills list...');
        try {
            const dataArr=[];
            const data = await db.query(DBQUery().SELECT_BILL_LIST)
            for (let i = 0; i < data.rows.length; i++) {
                dataArr.push(BillsDto(data,i));
            }
            return dataArr
        } catch (error) {
            console.error(error)
        }
    }
    
    const create = async (bill) =>{
        console.log('Adding new bill... ');
        try{
            const data = await db.query(DBQUery().INSERT_BILL,[bill.students_npm,bill.bill_name,bill.amount,bill.status])
            return BillsDto(data)
        }catch(error){
            console.error(error)
        }
    }

    const getByNPM = async (id)=>{
        console.log('Search bill... ');
        try {
            const data = await db.query(DBQUery().SELECT_BILL_NPM, [id]);
            if(data.rowCount === 0){
                return `Bills with ID ${id} not found`
            }
            return BillsDto(data)
        } catch (error) {
            console.log(error);
        }
    }

    const update = async (bill)=>{
        console.log('Bills update process...');
        try{
            const data = await db.query(DBQUery().UPDATE_BILL,[bill.status,bill.students_npm])
            return BillsDto(data)
        }catch(error){
            console.error(error)
        }
    }
    
    const remove = async (id)=>{
        console.log('Deleting Bills... ');
        try {
            const result = await db.query(DBQUery().DELETE_BILL,[id]);
            if(result.rowCount === 0){
                return `Delete with ID ${id} not found`
            }else {
                return `Delete with ID ${id} success`
            }
        } catch (error) {
            console.log(error);
        }
    }

    return{
        create, list, getByNPM, update, remove
    }
}
module.exports=BillsRepository