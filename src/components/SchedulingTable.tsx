import React, { useState, useMemo } from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

type Employee = {
  type: string
  name: string
  schedule: {
    [key: string]: { start: string; end: string; hours: number } | null
  }
}

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const timeOptions = Array.from({ length: 41 }, (_, i) => {
  const hours = Math.floor(i / 4) + 8
  const minutes = (i % 4) * 15
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
})

function TimeSelector({ value, onChange }: { value: string; onChange: (time: string) => void }) {
  return (
    <FormControl fullWidth>
      <InputLabel>Select time</InputLabel>
      <Select value={value} onChange={(e) => onChange(e.target.value as string)}>
        {timeOptions.map((time) => (
          <MenuItem key={time} value={time}>
            {time}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default function SchedulingTable() {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      type: 'Provider',
      name: 'Dr. Rhee',
      schedule: {}
    },
    {
      type: 'MA',
      name: 'Jane Smith',
      schedule: {}
    },
    {
      type: 'FD',
      name: 'Bob Johnson',
      schedule: {}
    },
    {
      type: 'MA',
      name: 'Emily Davis',
      schedule: {}
    },
    {
      type: 'MA',
      name: 'Michael Brown',
      schedule: {}
    },
    {
      type: 'FD',
      name: 'Sarah Wilson',
      schedule: {}
    },
    {
      type: 'FD',
      name: 'David Lee',
      schedule: {}
    }
  ])

  const [tempSchedule, setTempSchedule] = useState<{ start: string; end: string } | null>(null)
  const [openDialog, setOpenDialog] = useState<{ index: number; day: string } | null>(null)

  const handleTimeChange = (index: number, day: string, schedule: { start: string; end: string } | null) => {
    const updatedEmployees = [...employees]
    if (schedule) {
      const startTime = new Date(`2023-01-01T${schedule.start}:00`)
      const endTime = new Date(`2023-01-01T${schedule.end}:00`)
      const hours = (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60)
      updatedEmployees[index].schedule[day] = { ...schedule, hours }
    } else {
      updatedEmployees[index].schedule[day] = null
    }
    setEmployees(updatedEmployees)
  }

  const calculateTotalHours = (employee: Employee) => {
    return Object.values(employee.schedule).reduce((total, day) => total + (day?.hours || 0), 0)
  }

  const calculateOvertimeHours = (employee: Employee) => {
    const totalHours = calculateTotalHours(employee)
    return totalHours > 40 ? totalHours - 40 : 0
  }

  const handleOpenDialog = (index: number, day: string) => {
    setOpenDialog({ index, day })
    setTempSchedule(employees[index].schedule[day] || { start: '08:00', end: '18:00' })
  }

  const handleCloseDialog = () => {
    setOpenDialog(null)
    setTempSchedule(null)
  }

  const handleAccept = () => {
    if (openDialog && tempSchedule) {
      handleTimeChange(openDialog.index, openDialog.day, tempSchedule)
      handleCloseDialog()
    }
  }

  const summaryData = useMemo(() => {
    const summary: { [key: string]: { [key: string]: number } } = {}
    employees.forEach(employee => {
      if (!summary[employee.type]) {
        summary[employee.type] = {}
      }
      daysOfWeek.forEach(day => {
        if (!summary[employee.type][day]) {
          summary[employee.type][day] = 0
        }
        if (employee.schedule[day]) {
          summary[employee.type][day]++
        }
      })
    })
    return summary
  }, [employees])

  const sortedEmployees = useMemo(() => {
    const order = ['Provider', 'MA', 'FD']
    return [...employees].sort((a, b) => {
      const indexA = order.indexOf(a.type)
      const indexB = order.indexOf(b.type)
      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB
      } else if (indexA !== -1) {
        return -1
      } else if (indexB !== -1) {
        return 1
      } else {
        return a.type.localeCompare(b.type)
      }
    })
  }, [employees])

  return (
    <Paper className="container mx-auto p-4">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employee Type</TableCell>
            <TableCell>Employee Name</TableCell>
            {daysOfWeek.map(day => (
              <TableCell key={day}>{day}</TableCell>
            ))}
            <TableCell>Total Hours</TableCell>
            <TableCell>Overtime Hours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedEmployees.map((employee, index) => (
            <TableRow key={index}>
              <TableCell>{employee.type}</TableCell>
              <TableCell>{employee.name}</TableCell>
              {daysOfWeek.map(day => (
                <TableCell key={day}>
                  <Button variant="outlined" onClick={() => handleOpenDialog(index, day)}>
                    {employee.schedule[day] 
                      ? `${employee.schedule[day]?.start} - ${employee.schedule[day]?.end}`
                      : 'Set Time'
                    }
                  </Button>
                  {employee.schedule[day] && (
                    <div className="mt-2 text-sm text-gray-500 flex justify-between items-center">
                      <span>Hours: {employee.schedule[day]?.hours.toFixed(2)}</span>
                      <IconButton 
                        size="small"
                        onClick={() => handleTimeChange(index, day, null)}
                      >
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </div>
                  )}
                </TableCell>
              ))}
              <TableCell>{calculateTotalHours(employee).toFixed(2)}</TableCell>
              <TableCell>{calculateOvertimeHours(employee).toFixed(2)}</TableCell>
            </TableRow>
          ))}
          
          {Object.entries(summaryData).map(([type, days]) => (
            <TableRow key={type}>
              <TableCell className="font-bold">{type}</TableCell>
              <TableCell>FTE Count</TableCell>
              {daysOfWeek.map(day => (
                <TableCell key={day}>{days[day]}</TableCell>
              ))}
              <TableCell colSpan={2}></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={!!openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          Set Time for {openDialog ? employees[openDialog.index].name : ''} on {openDialog?.day}
        </DialogTitle>
        <DialogContent>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <InputLabel htmlFor="start" className="text-right">
                Start Time
              </InputLabel>
              <TimeSelector
                value={tempSchedule?.start || '08:00'}
                onChange={(time) => setTempSchedule(prev => ({ ...prev!, start: time }))}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <InputLabel htmlFor="end" className="text-right">
                End Time
              </InputLabel>
              <TimeSelector
                value={tempSchedule?.end || '18:00'}
                onChange={(time) => setTempSchedule(prev => ({ ...prev!, end: time }))}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleAccept}>Accept</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  )
}