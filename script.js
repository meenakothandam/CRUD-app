const API_URL = 'http://localhost:5000/users';

document.getElementById('userForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    age: document.getElementById('age').value
  };
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
  loadUsers();
});

async function loadUsers() {
  const res = await fetch(API_URL);
  const users = await res.json();
  document.getElementById('users').innerHTML = users.map(u =>
    `<p>${u.name} (${u.email}, ${u.age}) 
      <button onclick="deleteUser('${u._id}')">Delete</button>
    </p>`
  ).join('');
}

async function deleteUser(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  loadUsers();
}

loadUsers();
const API_URL = 'http://localhost:5000/users';

document.getElementById('userForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    age: document.getElementById('age').value
  };
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
  loadUsers();
});

async function loadUsers() {
  const res = await fetch(API_URL);
  const users = await res.json();
  document.getElementById('users').innerHTML = users.map(u =>
    `<p>${u.name} (${u.email}, ${u.age}) 
      <button onclick="deleteUser('${u._id}')">Delete</button>
    </p>`
  ).join('');
}

async function deleteUser(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  loadUsers();
}

loadUsers();
