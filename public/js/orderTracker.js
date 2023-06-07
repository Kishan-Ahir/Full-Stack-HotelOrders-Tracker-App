// Get reference to the submit button
let submitBtn = document.getElementById("submit");

// Get references to the UL elements in the HTML
let ul1 = document.getElementById("ul1");
let ul2 = document.getElementById("ul2");
let ul3 = document.getElementById("ul3");

// Add event listener to UL1 to remove order
ul1.addEventListener("click", removeorder1);

// Add event listener to UL2 to remove order
ul2.addEventListener("click", removeorder2);

// Add event listener to UL3 to remove order
ul3.addEventListener("click", removeorder3);

// Add event listener to UL1 to edit order
ul1.addEventListener("click", editorder1);

// Add event listener to UL2 to edit order
ul2.addEventListener("click", editorder2);

// Add event listener to UL3 to edit order
ul3.addEventListener("click", editorder3);

// Add event listener to the submit button
submitBtn.addEventListener("click", saveItems);

// Add event listener to the window load event
window.addEventListener("load", showorders);


async function saveItems(event) {
  event.preventDefault();

  // Get values from input fields
  let selectTable = document.getElementById("selectTable").value;
  let itemName = document.getElementById("itemName").value;
  let itemPrice = document.getElementById("itemprice").value;

  // Check the selected table and perform the corresponding actions
  if (selectTable === "Table 1") {
    // Prepare item details
    const details = { itemName, itemPrice };

    // Send POST request to add order to Table 1
    const table1response = await axios.post("http://localhost:3000/addorder", details);
    const table1orders = table1response.data.details;

    // Update total amount in Table 1
    if (table1response.data.totalamount !== null) {
      document.getElementById("table1totalamount").value = table1response.data.totalamount;
    } else {
      document.getElementById("table1totalamount").value = 0;
    }

    // Clear existing list items and add new items to UL1
    ul1.innerHTML = "";
    table1orders.forEach((order) => {
      let li = document.createElement("li");
      li.className = "list-group-item";
      li.appendChild(document.createTextNode("Item is " + order.name + ". Price is " + order.price));

      // Create delete button
      let deleteBtn = document.createElement("button");
      deleteBtn.className = "btn btn-outline-danger btn-sm delete";
      deleteBtn.setAttribute("style", "float: right");
      deleteBtn.appendChild(document.createTextNode("X"));
      li.appendChild(deleteBtn);

      // Create edit button
      let editBtn = document.createElement("button");
      editBtn.className = "btn btn-outline-dark btn-sm edit";
      editBtn.setAttribute("style", "float: right; margin-right: 4px;");
      editBtn.appendChild(document.createTextNode("Edit"));

      // Set ID attribute for the list item
      li.setAttribute("id", order.id);

      // Add buttons to the list item
      li.appendChild(editBtn);
      

      // Add the list item to UL1
      ul1.appendChild(li);
    });
  } else if (selectTable === "Table 2") {
    // Prepare item details
    const details = { itemName, itemPrice };

    // Send POST request to add order to Table 2
    const table2response = await axios.post("http://localhost:3000/addorderat2", details);
    const table2orders = table2response.data.details;

    // Update total amount in Table 2
    if (table2response.data.totalamount !== null) {
      document.getElementById("table2totalamount").value = table2response.data.totalamount;
    } else {
      document.getElementById("table2totalamount").value = 0;
    }

    // Clear existing list items and add new items to UL2
    ul2.innerHTML = "";
    table2orders.forEach((order) => {
      let li = document.createElement("li");
      li.className = "list-group-item";
      li.appendChild(document.createTextNode("Item is " + order.name + ". Price is " + order.price));

      // Create delete button
      let deleteBtn = document.createElement("button");
      deleteBtn.className = "btn btn-outline-danger btn-sm delete";
      deleteBtn.setAttribute("style", "float: right");
      deleteBtn.appendChild(document.createTextNode("X"));
      li.appendChild(deleteBtn);

      // Create edit button
      let editBtn = document.createElement("button");
      editBtn.className = "btn btn-outline-dark btn-sm edit";
      editBtn.setAttribute("style", "float: right; margin-right: 4px;");
      editBtn.appendChild(document.createTextNode("Edit"));

      // Set ID attribute for the list item
      li.setAttribute("id", order.id);

      // Add buttons to the list item
      li.appendChild(editBtn);
      

      // Add the list item to UL2
      ul2.appendChild(li);
    });
  } else {
    // Prepare item details
    const details = { itemName, itemPrice };

    // Send POST request to add order to Table 3
    const table3response = await axios.post("http://localhost:3000/addorderat3", details);
    const table3orders = table3response.data.details;

    // Update total amount in Table 3
    if (table3response.data.totalamount !== null) {
      document.getElementById("table3totalamount").value = table3response.data.totalamount;
    } else {
      document.getElementById("table3totalamount").value = 0;
    }

    // Clear existing list items and add new items to UL3
    ul3.innerHTML = "";
    table3orders.forEach((order) => {
      let li = document.createElement("li");
      li.className = "list-group-item";
      li.appendChild(document.createTextNode("Item is " + order.name + ". Price is " + order.price));

      // Create delete button
      let deleteBtn = document.createElement("button");
      deleteBtn.className = "btn btn-outline-danger btn-sm delete";
      deleteBtn.setAttribute("style", "float: right");
      deleteBtn.appendChild(document.createTextNode("X"));
      li.appendChild(deleteBtn);

      // Create edit button
      let editBtn = document.createElement("button");
      editBtn.className = "btn btn-outline-dark btn-sm edit";
      editBtn.setAttribute("style", "float: right; margin-right: 4px;");
      editBtn.appendChild(document.createTextNode("Edit"));

      // Set ID attribute for the list item
      li.setAttribute("id", order.id);

      // Add buttons to the list item
      li.appendChild(editBtn);
     

      // Add the list item to UL3
      ul3.appendChild(li);
    });
  }
};


async function showorders() {
  // Retrieve orders from Table 1
  const table1response = await axios.get("http://localhost:3000/getorderfrom1");
  let orders = table1response.data.orders;

  // Update total amount in Table 1
  if (table1response.data.totalamount !== null) {
    document.getElementById("table1totalamount").value = table1response.data.totalamount;
  } else {
    document.getElementById("table1totalamount").value = 0;
  }

  // Clear existing list items and add new items to UL1
  ul1.innerHTML = "";
  orders.forEach((order) => {
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode("Item is " + order.name + ". Price is " + order.price));

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-outline-danger btn-sm delete";
    deleteBtn.setAttribute("style", "float: right");
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);

    // Create edit button
    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-outline-dark btn-sm edit";
    editBtn.setAttribute("style", "float: right; margin-right: 4px;");
    editBtn.appendChild(document.createTextNode("Edit"));

    // Set ID attribute for the list item
    li.setAttribute("id", order.id);

    // Add buttons to the list item
    li.appendChild(editBtn);
    

    // Add the list item to UL1
    ul1.appendChild(li);
  });

  // Retrieve orders from Table 2
  const table2response = await axios.get("http://localhost:3000/getorderfrom2");
  orders = table2response.data.orders;

  // Update total amount in Table 2
  if (table2response.data.totalamount !== null) {
    document.getElementById("table2totalamount").value = table2response.data.totalamount;
  } else {
    document.getElementById("table2totalamount").value = 0;
  }

  // Clear existing list items and add new items to UL2
  ul2.innerHTML = "";
  orders.forEach((order) => {
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode("Item is " + order.name + ". Price is " + order.price));

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-outline-danger btn-sm delete";
    deleteBtn.setAttribute("style", "float: right");
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);

    // Create edit button
    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-outline-dark btn-sm edit";
    editBtn.setAttribute("style", "float: right; margin-right: 4px;");
    editBtn.appendChild(document.createTextNode("Edit"));

    // Set ID attribute for the list item
    li.setAttribute("id", order.id);

    // Add buttons to the list item
    li.appendChild(editBtn);
   

    // Add the list item to UL2
    ul2.appendChild(li);
  });

  // Retrieve orders from Table 3
  const table3response = await axios.get("http://localhost:3000/getorderfrom3");
  orders = table3response.data.orders;

  // Update total amount in Table 3
  if (table3response.data.totalamount !== null) {
    document.getElementById("table3totalamount").value = table3response.data.totalamount;
  } else {
    document.getElementById("table3totalamount").value = 0;
  }

  // Clear existing list items and add new items to UL3
  ul3.innerHTML = "";
  orders.forEach((order) => {
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode("Item is " + order.name + ". Price is " + order.price));

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-outline-danger btn-sm delete";
    deleteBtn.setAttribute("style", "float: right");
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);

    // Create edit button
    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-outline-dark btn-sm edit";
    editBtn.setAttribute("style", "float: right; margin-right: 4px;");
    editBtn.appendChild(document.createTextNode("Edit"));

    // Set ID attribute for the list item
    li.setAttribute("id", order.id);

    // Add buttons to the list item
    li.appendChild(editBtn);

    // Add the list item to UL3
    ul3.appendChild(li);
  });
};

async function removeorder1(event) {
  // Check if the clicked element is the delete button
  if (event.target.classList.contains("delete")) {
    const li = event.target.parentNode;
    const id = li.getAttribute("id");

    // Send DELETE request to remove order from Table 1
    const totalamount = await axios.delete(`http://localhost:3000/deleteorderfromtable1/${id}`);

    // Update total amount in Table 1
    if (totalamount.data !== null) {
      document.getElementById("table1totalamount").value = totalamount.data;
    } else {
      document.getElementById("table1totalamount").value = 0;
    }

    // Remove the list item from UL1
    ul1.removeChild(li);
  }
};

async function removeorder2(event) {
  // Check if the clicked element is the delete button
  if (event.target.classList.contains("delete")) {
    const li = event.target.parentNode;
    const id = li.getAttribute("id");

    // Send DELETE request to remove order from Table 2
    const totalamount = await axios.delete(`http://localhost:3000/deleteorderfromtable2/${id}`);

    // Update total amount in Table 2
    if (totalamount.data !== null) {
      document.getElementById("table2totalamount").value = totalamount.data;
    } else {
      document.getElementById("table2totalamount").value = 0;
    }

    // Remove the list item from UL2
    ul2.removeChild(li);
  }
};

async function removeorder3(event) {
  // Check if the clicked element is the delete button
  if (event.target.classList.contains("delete")) {
    const li = event.target.parentNode;
    const id = li.getAttribute("id");

    // Send DELETE request to remove order from Table 3
    const totalamount = await axios.delete(`http://localhost:3000/deleteorderfromtable3/${id}`);

    // Update total amount in Table 3
    if (totalamount.data !== null) {
      document.getElementById("table3totalamount").value = totalamount.data;
    } else {
      document.getElementById("table3totalamount").value = 0;
    }

    // Remove the list item from UL3
    ul3.removeChild(li);
  }
};

async function editorder1(event) {
  // Check if the clicked element is the edit button
  if (event.target.classList.contains("edit")) {
    const li = event.target.parentNode;
    const id = li.getAttribute("id");

    // Set selectTable, itemName, and itemprice values based on the selected order
    document.getElementById("selectTable").value = "Table 1";
    document.getElementById("itemName").value = li.firstChild.textContent.split(" is ")[1].split(".")[0];
    document.getElementById("itemprice").value = li.firstChild.textContent.split(" is ")[2];

    // Remove the list item from UL1
    ul1.removeChild(li);

    // Send DELETE request to edit order in Table 1
    const totalamount = await axios.delete(`http://localhost:3000/editorderfromtable1/${id}`);

    // Update total amount in Table 1
    if (totalamount.data !== null) {
      document.getElementById("table1totalamount").value = totalamount.data;
    } else {
      document.getElementById("table1totalamount").value = 0;
    }
  }
};

async function editorder2(event) {
  // Check if the clicked element is the edit button
  if (event.target.classList.contains("edit")) {
    const li = event.target.parentNode;
    const id = li.getAttribute("id");

    // Set selectTable, itemName, and itemprice values based on the selected order
    document.getElementById("selectTable").value = "Table 2";
    document.getElementById("itemName").value = li.firstChild.textContent.split(" is ")[1].split(".")[0];
    document.getElementById("itemprice").value = li.firstChild.textContent.split(" is ")[2];

    // Remove the list item from UL2
    ul2.removeChild(li);

    // Send DELETE request to edit order in Table 2
    const totalamount = await axios.delete(`http://localhost:3000/editorderfromtable2/${id}`);

    // Update total amount in Table 2
    if (totalamount.data !== null) {
      document.getElementById("table2totalamount").value = totalamount.data;
    } else {
      document.getElementById("table2totalamount").value = 0;
    }
  }
};

async function editorder3(event) {
  // Check if the clicked element is the edit button
  if (event.target.classList.contains("edit")) {
    const li = event.target.parentNode;
    const id = li.getAttribute("id");

    // Set selectTable, itemName, and itemprice values based on the selected order
    document.getElementById("selectTable").value = "Table 3";
    document.getElementById("itemName").value = li.firstChild.textContent.split(" is ")[1].split(".")[0];
    document.getElementById("itemprice").value = li.firstChild.textContent.split(" is ")[2];

    // Remove the list item from UL3
    ul3.removeChild(li);

    // Send DELETE request to edit order in Table 3
    const totalamount = await axios.delete(`http://localhost:3000/editorderfromtable3/${id}`);

    // Update total amount in Table 3
    if (totalamount.data !== null) {
      document.getElementById("table3totalamount").value = totalamount.data;
    } else {
      document.getElementById("table3totalamount").value = 0;
    }
  }
};


