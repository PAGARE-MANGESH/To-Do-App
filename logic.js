// function updateClock() {
//     let time = new Date()
//     let nowTime = time.toLocaleTimeString()
//     let date = time.toLocaleDateString()
//     // console.log(date)


//     document.getElementById('clock').textContent = nowTime

//     document.getElementById('date').innerHTML = date
// }


// // Update the clock every second
// setInterval(updateClock, 1000);

// // Initial call to display the clock
// updateClock();



let serialNumber = 1;
const taskHistory = [];

function Add() {
    // Get the input text and trim it
    let txt = document.getElementById('taskInput').value.trim();

    if (txt.length === 0) {
        alert('Please enter a task.');
        return;
    }

    // Check if the table already has 30 rows
    let table = document.getElementById('table');
    if (table.rows.length >= 30) {
        alert('You can only add up to 30 tasks.');
        return;
    }

    // Create a new row
    let row = table.insertRow(-1);

    // Create cells for the row
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    // Add data to the cells
    // let removebtn = ``
    cell1.innerHTML = serialNumber++; // Serial number
    cell2.innerHTML = txt;
    cell3.innerHTML = `<button onclick="removeRow(this)">Delete</button>`;
    // Add the task to the task history
    taskHistory.push(txt);

    // Clear the input field
    document.getElementById('taskInput').value = '';
}

function removeRow(button) {
    let row = button.parentNode.parentNode; // Get the parent row of the clicked button
    row.parentNode.removeChild(row); // Remove the row from the table
}

function viewTaskHistory() {
    const taskHistoryList = document.getElementById('taskHistory');
    taskHistoryList.innerHTML = ''; // Clear the existing task history

    // Display the task history in a list
    taskHistory.forEach((task, index, row) => {
        const listItem = document.createElement('tr');
        listItem.innerHTML = `
            <td>${index + 1}</td>
            <td>${task}</td>
            <td><button onclick="removeRow(this)">Delete</button></td>
        `;
        taskHistoryList.appendChild(listItem);
    });
}
