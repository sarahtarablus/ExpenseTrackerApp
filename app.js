const description = document.getElementById('name');
const date = document.getElementById('date');
const amount = document.getElementById('amount');
const where = document.getElementById('location');
const addBtn = document.getElementById('btnAddExpense');
const form = document.getElementById('expense-form');
const table = document.getElementById('table');

let dateForma = 

form.addEventListener('submit', addExpense);
table.addEventListener('click', deleteExpense);

function addExpense(e){
  e.preventDefault();

  if(description.value === '' || date.value === '' && !== dateformat || amount.value === '' || where.value === ''){
    alert('Please fill in all the fields')
  }else{
    const row = table.insertRow();
    const cell0 = row.insertCell(0);
    const cell1 = row.insertCell(1);
    const cell2 = row.insertCell(2);
    const cell3 = row.insertCell(3);
    const cell4 = row.insertCell(4);

    cell0.appendChild(document.createTextNode(description.value));
    cell1.appendChild(document.createTextNode(date.value));
    cell2.appendChild(document.createTextNode(amount.value));
    cell3.appendChild(document.createTextNode(where.value));
    const delBtn = document.createElement('a');
    delBtn.className = 'delBtn'
    delBtn.innerHTML = 'X'
    cell4.appendChild(delBtn);

    document.getElementById('thead').style.display = 'block';

    cell0.style.padding = '80px;'
    cell1.style.padding = '80px;'
    cell2.style.padding = '80px;'
    cell3.style.padding = '80px;'
  }
  description.value = '';
  date.value = '';
  amount.value = '';
  where.value = '';
 
}

function deleteExpense(e){
  if(e.target.classList.contains('delBtn')){
    e.target.parentElement.parentElement.remove();
  }
}




