import { useState } from "react";
import "./styles.css";

import { Table } from "./Table";

export default function App() {
  const [columns,setColumns] = useState([
    { accessor: "sno", label: "S.No" },
    { accessor: "name", label: "Name" },
    { accessor: "age", label: "Age" },
    { accessor: "start_date", label: "Join Date" },
    { accessor: "designation", label: "Designation" },
    { accessor: "salary", label: "Salary" },
  ]);

  const rows = [
    {
      sno: 1,
      name: "Liz Lemon",
      age: 36,
      start_date: "02-28-1999",
      designation: "Full Stack Developer",
      salary: 50000,
    },
    {
      sno: 2,
      name: "Jack Donaghy",
      age: 40,
      start_date: "03-05-1997",
      designation: "Backend Developer",
      salary: 55000,
    },
    {
      sno: 3,
      name: "Tracy Morgan",
      age: 39,
      start_date: "07-12-2002",
      designation: "Graphic Designer",
      salary: 75000,
    },
    {
      sno: 4,
      name: "Jenna Maroney",
      age: 40,
      start_date: "02-28-1999",
      designation: "Developer",
      salary: 65000,
    },
    {
      sno: 5,
      name: "Kenneth Parcell",
      age: 45,
      start_date: "01-01-1970",
      designation: "UI Designer",
      salary: 55000,
    },
    {
      sno: 6,
      name: "Pete Hornberger",
      age: 42,
      start_date: "04-01-2000",
      designation: "Frontend Developer",
      salary: 70000,
    },
    {
      sno: 7,
      name: "Frank Rossitano",
      age: 36,
      start_date: "06-09-2004",
      designation: "Tester",
      salary: 58000,
    },
    {
      sno: 8,
      name: "Jack Donaghy",
      age: 42,
      start_date: "05-12-1995",
      designation: "CEO",
      salary: 530000,
    },
    {
      sno: 9,
      name: "Tracy Jordan",
      age: 39,
      start_date: "01-23-1998",
      designation: "Actor",
      salary: 100000,
    },
    {
      sno: 10,
      name: "Jenna Maroney",
      age: 35,
      start_date: "06-21-2002",
      designation: "Singer",
      salary: 80000,
    },
    {
      sno: 11,
      name: "Kenneth Parcell",
      age: 28,
      start_date: "03-15-2010",
      designation: "Page",
      salary: 45000,
    },
    {
      sno: 12,
      name: "Pete Hornberger",
      age: 40,
      start_date: "07-10-1995",
      designation: "Producer",
      salary: 90000,
    },
    {
      sno: 13,
      name: "Frank Rossitano",
      age: 32,
      start_date: "02-01-2008",
      designation: "Copy Writer",
      salary: 55000,
    },
    {
      sno: 14,
      name: "Lemonades Hazel",
      age: 38,
      start_date: "04-21-1997",
      designation: "Financial Analyst",
      salary: 75000,
    },
    {
      sno: 15,
      name: "Dot Com Slattery",
      age: 41,
      start_date: "05-23-1994",
      designation: "Web Developer",
      salary: 85000,
    },
    {
      sno: 16,
      name: "Grizz Chapman",
      age: 36,
      start_date: "01-12-2000",
      designation: "Security Guard",
      salary: 50000,
    },
    {
      sno: 17,
      name: "Toofer Spurlock",
      age: 34,
      start_date: "03-15-2006",
      designation: "TV Writer",
      salary: 60000,
    },
    {
      sno: 18,
      name: "Katie Holms",
      age: 29,
      start_date: "07-10-2010",
      designation: "Editor",
      salary: 65000,
      },
      {
      sno: 19,
      name: "Robert Green",
      age: 41,
      start_date: "02-01-2001",
      designation: "Software Engineer",
      salary: 75000,
      },
      {
      sno: 20,
      name: "Sarah Johnson",
      age: 38,
      start_date: "05-05-2005",
      designation: "Data Scientist",
      salary: 80000,
      },
      {
      sno: 21,
      name: "John Doe",
      age: 31,
      start_date: "09-15-2011",
      designation: "Marketing Manager",
      salary: 75000,
      },
      {
      sno: 22,
      name: "Jane Doe",
      age: 27,
      start_date: "01-20-2013",
      designation: "Product Manager",
      salary: 80000,
      },
      {
      sno: 23,
      name: "Tom Cruise",
      age: 48,
      start_date: "07-01-1998",
      designation: "Actor",
      salary: 100000,
      },
      {
      sno: 24,
      name: "Emma Watson",
      age: 32,
      start_date: "12-12-2010",
      designation: "Actress",
      salary: 90000,
      },
      {
      sno: 25,
      name: "Brad Pitt",
      age: 56,
      start_date: "08-01-1994",
      designation: "Actor",
      salary: 110000,
      },
      {
        sno: 26,
        name: "Bradman",
        age: 56,
        start_date: "08-01-1994",
        designation: "Actor",
        salary: 110000,
        },
      {
      sno: 27,
      name: "Duke",
      age: 51,
      start_date: "01-01-1999",
      designation: "Actress",
      salary: 90000,
      },
      {
        sno: 28,
        name: "Aniston",
        age: 51,
        start_date: "01-01-1999",
        designation: "Actress",
        salary: 90000,
        },
        {
          sno: 29,
          name: "Charles",
          age: 51,
          start_date: "01-01-1999",
          designation: "Actress",
          salary: 90000,
          },
          {
            sno: 30,
            name: "Tommy",
            age: 51,
            start_date: "01-01-1999",
            designation: "Actress",
            salary: 90000,
            },
  ];

  return (
    <div className="App">
      <h1>React Employee Table</h1>
      <br />
      <Table rows={rows} columns={columns}/>
    </div>
  );
}






// import { useState } from "react";
// import "./styles.css";

// import { Table } from "./Table";

// export default function App() {
//   const [columns, setColumns] = useState([
//     { accessor: "sno", label: "S.No" },
//     { accessor: "name", label: "Name" },
//     { accessor: "age", label: "Age" },
//     { accessor: "start_date", label: "Join Date" },
//     { accessor: "designation", label: "Designation" },
//     { accessor: "salary", label: "Salary" },
//     { accessor: "actions", label: "Actions" },
//   ]);

//   const [rows, setRows] = useState([
//     {
//       sno: 1,
//       name: "Liz Lemon",
//       age: 36,
//       start_date: "02-28-1999",
//       designation: "Full Stack Developer",
//       salary: 50000,
//       actions: null,
//     },
//     {
//       sno: 2,
//       name: "Jack Donaghy",
//       age: 40,
//       start_date: "03-05-1997",
//       designation: "Backend Developer",
//       salary: 55000,
//       actions: null,
//     },
//     {
//       sno: 3,
//       name: "Tracy Morgan",
//       age: 39,
//       start_date: "07-12-2002",
//       designation: "Graphic Designer",
//       salary: 75000,
//       actions: null,
//     },
//     {
//       sno: 4,
//       name: "Jenna Maroney",
//       age: 40,
//       start_date: "02-28-1999",
//       designation: "Developer",
//       salary: 65000,
//       actions: null,
//     }
//   ]);

//   const handleDeleteRow = (index) => {
//     const newRows = [...rows];
//     newRows.splice(index, 1);
//     setRows(newRows);
//   };

//   const handleEditRow = (index) => {
//     const newRows = [...rows];
//     newRows[index].editing = true;
//     setRows(newRows);
//   };

//   const handleSaveRow = (index) => {
//     const newRows = [...rows];
//     newRows[index].editing = false;
//     setRows(newRows);
//   };

//   const handleCancelEdit = (index) => {
//     const newRows = [...rows];
//     newRows[index].editing = false;
//     setRows(newRows);
//   };

//   return (
//     <div className="App">
//       <h1>React Employee Table</h1>
//       <br />
//       <Table
//         rows={rows}
//         columns={columns}
//         handleDeleteRow={handleDeleteRow}
//         handleEditRow={handleEditRow}
//         handleSaveRow={handleSaveRow}
//         handleCancelEdit={handleCancelEdit}
//       />
//     </div>
//   );
// }

     







    




