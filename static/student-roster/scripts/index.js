let students = [
  {
    first_name: 'Ghassan',
    last_name: 'Aldarwish',
    age: '28',
    place_of_birth: 'Babylon',
    color: '#000'
  },
  {
    first_name: 'Fayad',
    last_name: 'Alkhadra',
    age: '28',
    place_of_birth: 'Syria',
    color: '#262626'
  },
  {
    first_name: 'Said',
    last_name: 'Alsagir',
    age: '34',
    place_of_birth: 'Syria',
    color: '#00F'
  },
  {
    first_name: 'Edali',
    last_name: 'Cardenas Beltran',
    age: '29',
    place_of_birth: 'Mexico City',
    color: '#F43AEE'
  },
  {
    first_name: 'Enmanuel',
    last_name: 'Cruz',
    age: '27',
    place_of_birth: 'NYC',
    color: '#132999'
  },
  {
    first_name: 'Rabee',
    last_name: 'Dameer',
    age: '32',
    place_of_birth: 'Syria',
    color: '#000'
  },
  {
    first_name: 'Itamar',
    last_name: 'Givon',
    age: '32',
    place_of_birth: 'Jerusalem',
    color: '#FF6347'
  },
  {
    first_name: 'Isaac',
    last_name: 'Giwa',
    age: '38',
    place_of_birth: 'Zaria',
    color: '#4A0000'
  },
  {
    first_name: 'Abdul Wakil',
    last_name: 'Haidari',
    age: '30',
    place_of_birth: 'Afghanistan',
    color: '#00F'
  },
  {
    first_name: 'Zakaria',
    last_name: 'Moslim',
    age: '42',
    place_of_birth: 'Syria',
    color: '#00F'
  },
  {
    first_name: 'Ahmad',
    last_name: 'Saadat',
    age: '25',
    place_of_birth: 'Afghanistan',
    color: '#D50000'
  },
  {
    first_name: 'Jurgen',
    last_name: 'Schuler',
    age: '44',
    place_of_birth: 'Ulm',
    color: '#28912F'
  },
  {
    first_name: 'Majed',
    last_name: 'Shrendan',
    age: '23',
    place_of_birth: 'Syria',
    color: '#000'
  },
  {
    first_name: 'Pilar',
    last_name: 'Torres',
    age: '29',
    place_of_birth: 'Sevilla',
    color: '#800080'
  },
  {
    first_name: 'Mihnea',
    last_name: 'Vlad',
    age: '35',
    place_of_birth: 'Bucharest',
    color: '#87CEEB'
  }
];

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
