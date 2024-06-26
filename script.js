// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {

  const employees = []
  let ask = true;

  while (ask) {



    // TODO: Get user input to create and return an array of employee objects
    const firstName = prompt('Please provide your first name');
    const lastName = prompt('Please provide your last name');
    let salary = prompt('Please provide your salary');
    salary = parseInt(salary);

    const employeeInfo =
    {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    }
    employees.push(employeeInfo);
    const contorcancel = confirm('Do you want to continue?')
    if (!contorcancel) {
      ask = false;
    }
  }

  return employees;
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  const totalEntries = employeesArray.length;
  // const sum = employeesArray.reduce((a, b) => a.salary + b.salary, 0)

  let total = 0;

  for (let i = 0; i < totalEntries; i++) {
    total = total + employeesArray[i].salary;
  }

  const averageSalary = total / totalEntries;

  console.log(`the average salary is: ${averageSalary}`);

  return averageSalary;
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
