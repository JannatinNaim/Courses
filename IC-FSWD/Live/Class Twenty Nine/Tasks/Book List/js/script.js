const bookForm = document.querySelector(".book_form");
const bookNameInput = document.querySelector("#book_form__name_input");
const bookAuthorInput = document.querySelector("#book_form__author_input");
const bookYearInput = document.querySelector("#book_form__year_input");
const bookList = document.querySelector(".book_list__body");

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const bookName = bookNameInput.value;
  const bookAuthor = bookAuthorInput.value;
  const bookYear = bookYearInput.value;

  const rowElement = document.createElement("tr");
  rowElement.classList.add("book_list__body__row");

  const bookNameElement = document.createElement("td");
  bookNameElement.classList.add(".book_list__body__row__content");
  bookNameElement.innerText = bookName;

  const bookAuthorElement = document.createElement("td");
  bookAuthorElement.classList.add(".book_list__body__row__content");
  bookAuthorElement.innerText = bookAuthor;

  const bookYearElement = document.createElement("td");
  bookYearElement.classList.add(".book_list__body__row__content");
  bookYearElement.innerText = bookYear;

  rowElement.appendChild(bookNameElement);
  rowElement.appendChild(bookAuthorElement);
  rowElement.appendChild(bookYearElement);

  bookList.appendChild(rowElement);

  bookForm.reset();
});
