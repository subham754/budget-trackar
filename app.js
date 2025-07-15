let balance = 0;
const balanceDiv = document.getElementById('balance');
const form = document.getElementById('transaction-form');
const list = document.getElementById('transactions');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const desc = document.getElementById('description').value;
  const amt = parseInt(document.getElementById('amount').value);
  const type = document.getElementById('type').value;

  const li = document.createElement('li');
  li.innerText = `${desc}: ₹${amt} [${type}]`;
  list.appendChild(li);

  balance += (type === 'income' ? amt : -amt);
  balanceDiv.innerText = `Balance: ₹${balance}`;
  
  form.reset();
});
