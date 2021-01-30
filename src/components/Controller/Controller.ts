import React, { useState } from "react";
import { useForm } from "react-hook-form";


const Controller = (props: any) => {
    let [modal, setModal] = useState(false);
    let [patientList, setPatientList] = useState([
        {name:'ram', email:"ram@gmail.com", age:'22',gender:'male'}
    ]);
    let [isAuth, setIsAuth] = useState(false);
    let [searchPatient, setSearchPatient]: any = useState('')
    const {register, handleSubmit, errors, setError, clearErrors} = useForm({mode: 'onBlur',  reValidateMode: 'onBlur',});
    
    const handleInput = ( e: any) =>{
        console.log(e.target.value);
        setSearchPatient({searchPatient: e.target.value})
    }
    const filterPatient = patientList.filter((list) =>{
        return list.name.toLocaleLowerCase().includes(searchPatient.toLocaleLowerCase())
    })
    return{
       
        modal,
        setModal,
        patientList, 
        setPatientList,
        register, 
        handleSubmit, 
        errors, 
        setError, 
        clearErrors,
        isAuth, 
        setIsAuth,
        handleInput,
        filterPatient
    }
}
export default Controller;