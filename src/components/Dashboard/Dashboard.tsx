import React from 'react';
import * as FeatherIcon from 'react-feather';
import AddPatient from './addPatient';
import PatientTable from './patientTable';
import Controller from '../Controller/Controller';
import DashboardHeader from './dashboardHeader';
import { withRouter } from 'react-router-dom';

const Dashboard = (props: any) => {
  const {
    modal,
    setModal,
    patientList,
    setPatientList,
    register,
    handleSubmit,
    errors,
    setError,
    clearErrors,
    handleInput,
    filterPatient
  } = Controller(props);

  const addPatientProps = {
    modal,
    setModal,
    patientList,
    setPatientList,
    register,
    handleSubmit,
    errors
  };
  const patientTableProps = {
    modal,
    setModal,
    patientList,
    setPatientList,
    register,
    handleSubmit,
    errors,
    filterPatient
  };

  const dashboardHeadersProps = { setModal, handleInput };

  return (
    <>
      <DashboardHeader {...dashboardHeadersProps} />
      <PatientTable {...patientTableProps} />
      {modal && <AddPatient {...addPatientProps} />}
    </>
  );
};
export default withRouter(Dashboard);
