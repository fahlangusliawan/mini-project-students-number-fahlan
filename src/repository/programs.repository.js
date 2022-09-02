const DBQUery = require("../config/DBQuery");
const FacultiesDto = require("../model/facultiesDTO");
const ProgramsDto = require("../model/programsDTO");

const ProgramsRepository = (db)=>{
    const list= async ()=>{
        console.log('Getting all Programs list...');
        try {
            const dataArr=[];
            const data = await db.query(DBQUery().SELECT_PROGRAM_LIST)
            for (let i = 0; i < data.rowCount; i++) {
                const dataFac = await db.query(DBQUery().SELECT_FACULTY_ID, [data.rows[i].faculties_id]);
                data.rows[i].faculties = FacultiesDto(dataFac);
            }
            for (let i = 0; i < data.rows.length; i++) {
                dataArr.push(ProgramsDto(data,i));
            }
            return dataArr
        } catch (error) {
            console.error(error)
        }
    }
    
    const create = async (program) =>{
        console.log('Adding new program... ');
        try{
            const data = await db.query(DBQUery().INSERT_PROGRAM,[program.id,program.name,program.faculties_id])
            const dataFac = await db.query(DBQUery().SELECT_FACULTY_ID, [data.rows[0].faculties_id]);
            data.rows[0].faculties = FacultiesDto(dataFac);
            return ProgramsDto(data)
        }catch(error){
            console.error(error)
        }
    }

    const getById = async (id)=>{
        console.log('Search program... ');
        try {
            const data = await db.query(DBQUery().SELECT_PROGRAM_ID, [id]);
            if(data.rowCount === 0){
                return `Programs with ID ${id} not found`
            }
            const dataFac = await db.query(DBQUery().SELECT_FACULTY_ID, [data.rows[0].faculties_id]);
            data.rows[0].faculties = FacultiesDto(dataFac);
            return ProgramsDto(data)
        } catch (error) {
            console.log(error);
        }
    }

    const update = async (program)=>{
        console.log('Faculty update process...');
        try{
            const data = await db.query(DBQUery().UPDATE_PROGRAM,[program.name,program.faculties_id,program.id])
            const dataFac = await db.query(DBQUery().SELECT_FACULTY_ID, [data.rows[0].faculties_id]);
            data.rows[0].faculties = FacultiesDto(dataFac);
            return ProgramsDto(data)
        }catch(error){
            console.error(error)
        }
    }
    
    const remove = async (id)=>{
        console.log('Deleting Faculty... ');
        try {
            const result = await db.query(DBQUery().DELETE_PROGRAM,[id]);
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
        create, list, getById, update, remove
    }
}
module.exports=ProgramsRepository