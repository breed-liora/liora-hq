// src/components/EmployeeList.js
import React, { useState, useEffect } from 'react';
import { getEmployees } from '../../api/api';
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Select,
  MenuItem,
  DialogActions,
} from '@mui/material';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [open, setOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    role: '',
    minHours: '',
    maxHours: '',
  });

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await getEmployees();
      setEmployees(response.data);
    };
    fetchEmployees();
  }, []);

  const handleAddEmployee = async () => {
    // Implement addEmployee API call
    // Refresh the employee list
    setOpen(false);
  };

  return (
    <div>
      <h2>Employees</h2>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add Employee
      </Button>
      <List>
        {employees.map((employee) => (
          <ListItem key={employee.id}>
            <ListItemText
              primary={employee.name}
              secondary={`Role: ${employee.role}, Min Hours: ${employee.minHours}, Max Hours: ${employee.maxHours}`}
            />
          </ListItem>
        ))}
      </List>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add Employee</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={newEmployee.name}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, name: e.target.value })
            }
            fullWidth
          />
          <Select
            label="Role"
            value={newEmployee.role}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, role: e.target.value })
            }
            fullWidth
          >
            <MenuItem value="Medical Assistant">Medical Assistant</MenuItem>
            <MenuItem value="Front Desk">Front Desk</MenuItem>
          </Select>
          <TextField
            label="Min Hours"
            type="number"
            value={newEmployee.minHours}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, minHours: e.target.value })
            }
            fullWidth
          />
          <TextField
            label="Max Hours"
            type="number"
            value={newEmployee.maxHours}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, maxHours: e.target.value })
            }
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddEmployee} color="primary">
            Add
          </Button>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EmployeeList;
