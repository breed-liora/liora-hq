import React, { useState, useEffect } from 'react';
import './EmployeeList.css';
import EmployeeModal from './EmployeeModal';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const handleAddEmployee = (newEmployee) => {
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    setIsModalOpen(false);
  };

  const handleEditEmployee = (editedEmployee) => {
    const updatedEmployees = employees.map(employee => 
      employee.name === editingEmployee.name ? editedEmployee : employee
    );
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    setIsModalOpen(false);
    setEditingEmployee(null);
  };

  const handleDeleteEmployee = (employeeToDelete) => {
    const updatedEmployees = employees.filter(employee => employee.name !== employeeToDelete.name);
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <div className="employee-list">
      <h2>Employees</h2>
      <button onClick={() => setIsModalOpen(true)} className="add-button">Add New Employee</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Min Hours</th>
            <th>Max Hours</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.role}</td>
              <td>{employee.minHours}</td>
              <td>{employee.maxHours}</td>
              <td>
                <button onClick={() => { setEditingEmployee(employee); setIsModalOpen(true); }}>Edit</button>
                <button onClick={() => handleDeleteEmployee(employee)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <EmployeeModal
          employee={editingEmployee}
          onSave={editingEmployee ? handleEditEmployee : handleAddEmployee}
          onClose={() => { setIsModalOpen(false); setEditingEmployee(null); }}
        />
      )}
    </div>
  );
};

export default EmployeeList;
