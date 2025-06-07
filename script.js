const form = document.getElementById('taskForm');
const list = document.getElementById('taskList');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const task = document.getElementById('task').value;
  const time = document.getElementById('time').value;
  const deadline = document.getElementById('deadline').value;

  const li = document.createElement('li');
  li.innerHTML = `
    ${task} - ${time} - ${deadline}
    <div>
      <button class="done">Done</button>
      <button class="miss">Miss</button>
    </div>
  `;

  list.appendChild(li);
  form.reset();
});

list.addEventListener('click', function(e) {
  if (e.target.classList.contains('done')) {
    e.target.parentElement.parentElement.style.background = '#d4edda';
  }
  if (e.target.classList.contains('miss')) {
    e.target.parentElement.parentElement.style.background = '#f8d7da';
  }
});
