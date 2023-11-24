const api = 'http://localhost:3000';

window.onload = () => {
  fetch(`${api}/roles`)
    .then(response => response.json())
    .then(data => createSelectOptions(data, 'role'));

  fetch(`${api}/cities`)
    .then(response => response.json())
    .then(data => createSelectOptions(data, 'city'));
}
function createSelectOptions(data, elementId) {
    const select = document.getElementById(elementId);
  
    data.forEach(item => {
      const option = document.createElement('option');
      option.value = item.id;
      option.appendChild(document.createTextNode(item.nome));
      select.appendChild(option);
    });
  }
  function setCandidatesInPage(data) {
    const resEl = document.getElementById('res');
    resEl.innerHTML = '';
  
    data.forEach(item => {
      const divEl = document.createElement('div');
      const fields = ['Nome: ', 'Cargo: ', 'Status: ', 'Votos: '];
  
      let index = 0;
      for (const value of Object.values(item)) {
        const label = document.createElement('label');
        label.appendChild(document.createTextNode(fields[index]));
        const span = document.createElement('span');
        span.appendChild(document.createTextNode(value));
  
        const otherDiv = document.createElement('div');
        otherDiv.appendChild(label);
        otherDiv.appendChild(span);
        divEl.appendChild(otherDiv);
        index++;
      }
  
      resEl.appendChild(divEl);
    });
}

function getCandidatesByName() {
  const inputValue = document.getElementById('name').value;

  fetch(`${api}/name?search=${inputValue}`)
    .then(response => response.json())
    .then(data => {
      setCandidatesInPage(data);
    })
    .catch(() => {
      const resEl = document.getElementById('res');
      resEl.innerHTML = '';
    });
}
function getCandidatesrole() {
  const selectValue = document.getElementById('role').value;

  fetch(`${api}/role/${selectValue}`)
    .then(response => response.json())
    .then(data => {
      setCandidatesInPage(data);
    })
    .catch(() => {
      const resEl = document.getElementById('res');
      resEl.innerHTML = '';
    });
}
function getCandidatesByCity() {
  const selectElement = document.getElementById('city');
  const selectValue = selectElement.options[selectElement.selectedIndex].text;

  fetch(`${api}/city?search=${selectValue}`)
    .then(response => response.json())
    .then(data => {
      setCandidatesInPage(data);
    })
    .catch(() => {
      const resEl = document.getElementById('res');
      resEl.innerHTML = '';
    });
}
function getAllOrElectedOnly() {
  const selectElement = document.getElementById('elected');
  const allCandidates = selectElement.selectedIndex;
  fetch(`${api}/candidates/${allCandidates}`)
    .then(response => response.json())
    .then(data => {
      setCandidatesInPage(data);
    })
    .catch(() => {
      const resEl = document.getElementById('res');
      resEl.innerHTML = '';
    });
}
