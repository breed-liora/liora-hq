import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const handleEdit = (index) => {
    // Implement edit functionality
    console.log('Edit employee at index:', index);
  };

  const handleDelete = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <div className="employee-list">
      <h2>Employees</h2>
      <Link to="/employees/add" className="add-button">Add New Employee</Link>
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
                <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
