document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  //
  // const title = document.querySelector('#title');
  // const author = document.querySelector('#author');
  // const category = document.querySelector('#category');
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;

    const result = document.querySelector('#reading-list')

    const newUl = document.createElement('ul');
    newUl.classList.add('ultag');
    const newli = document.createElement('li');
    newli.classList.add('litag');
    newli.textContent = `title ${title}, author: ${author}, category: ${category}`;

    result.appendChild(newUl);
    newUl.appendChild(newli);
form.reset();
    });



  // });



  // newDelBut.addEventListener('click', (event) => {
  //   const delBook = document.querySelector('');


});
