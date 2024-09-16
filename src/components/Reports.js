// src/components/Reports.js
import React, { useState, useEffect } from 'react';
import { getReports } from '../api/api';
import { Bar } from 'react-chartjs-2';

function Reports() {
  const [reportData, setReportData] = useState({
    employees: [],
    hours: [],
  });

  useEffect(() => {
    const fetchReports = async () => {
      const response = await getReports();
      setReportData(response.data);
    };
    fetchReports();
  }, []);

  const data = {
    labels: reportData.employees,
    datasets: [
      {
        label: 'Hours Worked',
        data: reportData.hours,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h2>Reports</h2>
      <Bar data={data} />
    </div>
  );
}

export default Reports;
