import * as React from "react";
import CustomTable from "../DynamicTable/shared_table_CustomTable";
import * as FeatherIcon from "react-feather";

const tableHeaders: any[] = [
    { key: "number", value: "SR NO. " },
    { key: "name", value: "Name"  },
    { key: "email", value: "Email" },
    { key: "age", value: "Age" },
    { key: "gender", value: "Gender" },
    { key: "", value: "Action", component: "Action" },
  ];

  const Action = (props: any) => {
    const {patientList} = props
    console.log('props actions',patientList);
     
    const deletePatient = () =>{
      
    }
    return (
      <td className="px-6 py-4 whitespace-no-wrap border-b font-medium border-gray-200 text-sm leading-5 text-gray-700">
        <div className="flex">
          <button  onClick={() => deletePatient()}/>
            <FeatherIcon.Trash2
              data-tip
              data-for="view"
              size="16"
              className="mr-3"
            />
       
          <button  onClick={() => deletePatient()}/>
            <FeatherIcon.Download
              data-tip
              data-for="view"
              size="16"
              className="mr-3"
            />
        </div>
      </td>
    );
  };
  
const PatientTable = (props: any) =>{
   
  const  { modal, setModal,patientList, setPatientList,register, handleSubmit, errors,filterPatient } = props
console.log('data', patientList);

        const CustomTableProps = {
          headers: tableHeaders,
          data: filterPatient,
          components: { Action },
          patientList,
          setPatientList,
          /*  pagination: { limit, numbersToshow, activeClass, totalPages, totalRecords, page },
          functions: { changePage },
          loading: loader */
          /*  isLoading,
           loading,
           pagination,
           functions: { changePage, openModal, openDialog, openResetModal, filter } */
        };
    return(
        <div className="flex flex-col m-2 py-8">
        <div className="-my-2 py-2  ">
          {/*sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8  */}
          <div className="align-middle w-full inline-block min-w-full shadow sm:rounded-lg  border border-gray-200">
            <CustomTable {...CustomTableProps} />
          </div>
        </div>
      </div>
    )
}
export default PatientTable;