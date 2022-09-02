const DBQUery = require("../config/DBQuery");
const StudentsDto = require("../model/studentsDTO");

const StudentsRepository = (db)=>{
    const list= async ()=>{
        console.log('Getting all Students list...');
        try {
            const dataArr=[];
            const data = await db.query(DBQUery().SELECT_STUDENT_LIST)
            for (let i = 0; i < data.rows.length; i++) {
                dataArr.push(StudentsDto(data,i));
            }
            return dataArr
        } catch (error) {
            console.error(error)
        }
    }
    
    const create = async (student) =>{
        console.log('Adding new student... ');
        try{
            let year = student.year.toString();
            let npm = year[year.length-2] + year[year.length-1]+ student.faculties_id + student.programs_id + student.id;
            const data = await db.query(DBQUery().INSERT_STUDENT,[student.id,npm,student.name,
                student.gender,student.semester,student.year,student.address,student.faculties_id,student.programs_id]);
            return StudentsDto(data)
        }catch(error){
            console.error(error)
        }
    }

    const getByNPM = async (id)=>{
        console.log('Search student... ');
        try {
            const data = await db.query(DBQUery().SELECT_STUDENT_NPM, [id]);
            if(data.rowCount === 0){
                return `Students with NPM ${id} not found`
            }
            return StudentsDto(data)
        } catch (error) {
            console.log(error);
        }
    }

    const update = async (student)=>{
        console.log('Student update process...');
        try{
            const data = await db.query(DBQUery().UPDATE_STUDENT,[student.name,student.gender,student.address,student.id])
            return StudentsDto(data)
        }catch(error){
            console.error(error)
        }
    }

    // const nextSemester = async (student)=>{
    //     console.log('Student semester update process...');
    //     try{
    //         const data = await db.query(DBQUery().UPDATE_STUDENT,[student.semester,student.id])
    //         return StudentsDto(data)
    //     }catch(error){
    //         console.error(error)
    //     }
    // }
    
    const remove = async (id)=>{
        console.log('Deleting Students... ');
        try {
            const result = await db.query(DBQUery().DELETE_STUDENT,[id]);
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
module.exports=StudentsRepository