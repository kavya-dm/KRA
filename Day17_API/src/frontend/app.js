const API_URL = 'http://localhost:3000/todos';
const TOKEN = 'demo-token';

// Fetch and display todos
async function loadTodos() {
  document.getElementById('loading').innerText = 'Loading...';
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    document.getElementById('todoList').innerHTML = '';
    data.forEach(todo => {
      const li = document.createElement('li');
      li.innerText = todo.title;
      document.getElementById('todoList').appendChild(li);
    });
  } catch (err) {
    document.getElementById('error').innerText = err.message;
  } finally {
    document.getElementById('loading').innerText = '';
  }
}

// Create a todo
document.getElementById('todoForm').addEventListener('submit', async e => {
  e.preventDefault();

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': TOKEN
      },
      body: JSON.stringify({ title: title.value, completed: false })
    });

    if (!res.ok) {
      throw new Error(`Error ${res.status}`);
    }

    loadTodos();
  } catch (err) {
    document.getElementById('error').innerText = err.message;
  }
});

loadTodos();
