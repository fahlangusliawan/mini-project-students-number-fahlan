const DBQUery = require("../config/DBQuery");
const FacultiesDto = require("../model/facultiesDTO");

const FacultiesRepository = (db)=>{
    const list= async ()=>{
        console.log('Getting all Faculties list...');
        try {
            const dataArr=[];
            const data = await db.query(DBQUery().SELECT_FACULTY_LIST)
            for (let i = 0; i < data.rows.length; i++) {
                dataArr.push(FacultiesDto(data,i));
            }
            return dataArr
        } catch (error) {
            console.error(error)
        }
    }
    
    const create = async (faculty) =>{
        console.log('Adding new faculty... ');
        try{
            const data = await db.query(DBQUery().INSERT_FACULTY,[faculty.id,faculty.name])
            return FacultiesDto(data)
        }catch(error){
            console.error(error)
        }
    }

    const getById = async (id)=>{
        console.log('Search faculty... ');
        try {
            const data = await db.query(DBQUery().SELECT_FACULTY_ID, [id]);
            if(data.rowCount === 0){
                return `Faculties with ID ${id} not found`
            }
            return FacultiesDto(data)
        } catch (error) {
            console.log(error);
        }
    }

    const update = async (faculty)=>{
        console.log('Faculty update process...');
        try{
            const data = await db.query(DBQUery().UPDATE_FACULTY,[faculty.name,faculty.id])
            return FacultiesDto(data)
        }catch(error){
            console.error(error)
        }
    }
    
    const remove = async (id)=>{
        console.log('Deleting Faculty... ');
        try {
            const result = await db.query(DBQUery().DELETE_FACULTY,[id]);
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
module.exports=FacultiesRepository