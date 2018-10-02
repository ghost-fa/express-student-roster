
fetch('/api/students')
.then(res => {
  return res.json()
})
.then(getData);


function getData(students){

  const printStudent = function(student){
    let tableRow = document.createElement('tr');

    Object.keys(student).forEach(column => {
      let tableCell = document.createElement('td');
      let cellContent = document.createTextNode(student[column]);

      if(column === 'color') {
        tableCell.style['background-color'] = student[column];
      }

      tableCell.appendChild(cellContent);
      tableRow.appendChild(tableCell);
    });

    return tableRow;
  };

  function emptyElement(element){
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  function printStudentTable(students){
    let tableBody = document.getElementById('table-body');

    emptyElement(tableBody);
    students.forEach(student => {
      let studentRow = printStudent(student);

      tableBody.appendChild(studentRow);
    });
  }

  const filterBy = function(objectArray, key, searchTerm){ // eslint-disable-line
    return objectArray.filter(student => student[key].toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const sortBy = function(objectArray, property, order = 'asc'){
    return objectArray.sort((a, b) => {
      if(order === 'asc'){
        return a[property].localeCompare(b[property]);
      } else {
        return b[property].localeCompare(a[property]);
      }
    });
  };


  let filterForm = document.querySelector('#filter-form');
  filterForm.addEventListener('submit', event => {
    event.preventDefault();

    let searchTerm = event.target.querySelector('#filter-contains').value;
    let columnName = event.target.querySelector('#filter-column').value;

    printStudentTable(filterBy(students, columnName, searchTerm));
  });

  // Event Delegation
  document.body.querySelector('.sortable-cols').addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();

    let currentElem = event.target;

    if(!currentElem.classList.contains('arrow')){
      return;
    }

    let currentOrder = currentElem.dataset.order;
    printStudentTable(sortBy(students, currentElem.dataset.column, currentOrder));

    if(currentOrder === 'asc'){
      currentElem.dataset.order = 'desc';
      currentElem.classList.replace('arrow-down', 'arrow-up');
    } else {
      currentElem.dataset.order = 'asc';
      currentElem.classList.replace('arrow-up', 'arrow-down');
    }

  });

  printStudentTable(students);


}
