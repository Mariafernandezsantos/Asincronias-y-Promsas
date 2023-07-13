const json = {
  "results": [
      {
          "title": "Estudiar Js",
          "priority": "alta",
          "isDone": false
      },
      {
          "title": "Estudiar CSS",
          "priority": "alta",
          "isDone": true
      },
      {
          "title": "Estudiar OOP",
          "priority": "media",
          "isDone": false
      },
      {
          "title": "Estudiar IA",
          "priority": "baja",
          "isDone": false
      }
  ]
};

const tableBody = document.getElementById('table-body');

json.results.forEach(todo => {
  const row = document.createElement('tr');

  const titleCell = document.createElement('td');
  const priorityCell = document.createElement('td');
  const isDoneCell = document.createElement('td');

  titleCell.textContent = todo.title;
  priorityCell.textContent = todo.priority;
  isDoneCell.textContent = todo.isDone ? 'Sí' : 'No';

  row.appendChild(titleCell);
  row.appendChild(priorityCell);
  row.appendChild(isDoneCell);

  tableBody.appendChild(row);
});