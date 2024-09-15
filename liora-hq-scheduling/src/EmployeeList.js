import React, { useState, useEffect } from 'react';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  return (
    <div>
      <h2>Employees</h2>
      {employees.map((employee, index) => (
        <div key={index}>
          <p>Name: {employee.name}</p>
          <p>Role: {employee.role}</p>
          <p>Min Hours: {employee.minHours}</p>
          <p>Max Hours: {employee.maxHours}</p>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
