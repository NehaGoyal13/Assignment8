/*eslint-env browser*/
var $ = function(id){
    "use strict";
    return window.document.getElementById(id);
};

var addEmployeeToTable = function(name, title, extension) {
    "use strict";
    var empTable = $("employee_detail");
    var row = empTable.insertRow(-1);
   
    var cell = row.insertCell(-1);
    cell.innerHTML = name;
    
    cell = row.insertCell(-1);
    cell.innerHTML = title;
   
    cell = row.insertCell(-1);
    cell.innerHTML = extension;

    cell = row.insertCell(-1);
    var deleteButton = window.document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("class","delete");
    deleteButton.setAttribute("onclick", "deleteEmployeeRow(this)");
    cell.appendChild(deleteButton);
};

var deleteEmployeeRow = function(delButton) {
    "use strict";
    var row = delButton.parentNode.parentNode;
    var table = $("employee_detail");
    table.deleteRow(row.rowIndex);
    employeeArray.splice(row.rowIndex,1);
    $("employees_count").innerHTML = "Showing " + employeeArray.length + " Employees";
};

var addEmployee = function(){
    var required, name, title, extension,emptyField=false;
    var tableCell = window.document.getElementsByTagName("td");
    required= "<span>*Required Field</span>";
    name = $("name").value;
    title = $("title").value;
    extension = $("extension").value;
   
    if(name===""){
        tableCell[2].innerHTML= required;
        emptyField = true; 
    }
   else{
        tableCell[2].innerHTML= "";
        emptyField = false; 
   }
    
    if(title===""){
        tableCell[5].innerHTML= required;
        emptyField = true;
       
    }
    else{
        tableCell[5].innerHTML= "";
        emptyField = false; 
   }
    if(extension===""){
        tableCell[8].innerHTML= required;
        emptyField = true;
        
    }
    else{
        tableCell[8].innerHTML= "";
        emptyField = false; 
   }

    if(!emptyField){
        tableCell[2].innerHTML = "";
        tableCell[5].innerHTML = "";
        tableCell[8].innerHTML = "";
        employeeArray.push([name,title,extension]);
        addEmployeeToTable(name, title, extension);
        $("employees_count").innerHTML = "Showing " + employeeArray.length + " Employees";
        $("addEmployee").reset();
    }
};
// window.document.getElementById("name").addEventListener("input",function() {
//     tableCell[2].innerHTML= "";
//     emptyField = false; 
//     if(this.value===""){
//         emptyField = true;
//     }  
// });

var employeeArray = new Array();
employeeArray.push(["emplyee1","T1",1111],["emplyee2","T2",2222],["employee3","T3",3333],["employee4","T4",4444],["employee5","T5",5555]);

window.addEventListener("load", function(){
    "use strict";
    $("addEmployee").reset();
    for(var i=0;i<employeeArray.length;i++) {
        addEmployeeToTable(employeeArray[i][0],employeeArray[i][1],employeeArray[i][2]);
    }
    $("employees_count").innerHTML = "Showing " + employeeArray.length + " Employees";
    window.document.getElementById("addButton").addEventListener("click",function(e) {
        e.preventDefault();
        addEmployee();
    });   
});

