const list = document.querySelector('#book-list ul');
const forms = document.forms;

// how to delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// how to add books
const addForm = forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();

  // how to create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // how to add text content
  bookName.textContent = value;
  deleteBtn.textContent = 'delete';

  // how to add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  // how to append to DOM
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

  // how to hide books
  const hideBox = document.querySelector('#hide');
  hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
      list.style.display = "none";
    } else {
      list.style.display = "initial";
    }
  });