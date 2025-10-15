import React, { useEffect, useState } from "react";

function PaginationApp() {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Fetch data with error handling
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("failed to fetch data");
      }
    };

    fetchEmployees();
  }, []);

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = employees.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(employees.length / rowsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", textAlign: "center" }}>
      <h1>Employee Data Table</h1>

      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead style={{ backgroundColor: "green", color: "white" }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div style={{ marginTop: "20px", textAlign: "center"}}>
        <button onClick={handlePrevious}
        style = {{backgroundColor: "green", padding: "10px", color: "white"}}>
          Previous
        </button>
        <span style={{ margin: "0 15px" , padding: "10px", backgroundColor: "green", color: "white" }}>
           {currentPage} 
        </span>
        <button onClick={handleNext}
        style ={{backgroundColor: "green", padding: "10px", color: "white"}}>
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginationApp;
