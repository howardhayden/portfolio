window.onload = function () {
  const bookshelf = document.getElementById("bookshelf");
  const languageInput = document.getElementById("languageInput");
  const collectionInput = document.getElementById("collectionInput");
  const publisherInput = document.getElementById("publisherInput");
  const authorInput = document.getElementById("authorInput");

  // Fisher-Yates shuffle
  function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    while (0 !== currentIndex) {
      // Element Selection
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // Element Swqp
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  function formatDate(dateString) {
    const options = { month: "short", day: "numeric", year: "numeric" };
    const date = new Date(dateString);
    const timeZoneOffset = date.getTimezoneOffset() * 60 * 1000;
    const adjustedDate = new Date(date.getTime() + timeZoneOffset);
    return adjustedDate.toLocaleDateString(undefined, options);
  }  
  
  function generateBookCards(books) {
    const shuffledBooks = shuffleArray(books);
    bookshelf.innerHTML = "";
    shuffledBooks.forEach((book) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const title = document.createElement("h5");
      title.classList.add("card-title");
      title.textContent = book.title;

      const infoList = document.createElement("dl");
      infoList.classList.add("book-info");

      const languageItem = createInfoListItem("Language", book.language.join(", "));
      infoList.appendChild(languageItem);

      const publisherItem = createInfoListItem("Publisher", book.publisher.join(", "));
      infoList.appendChild(publisherItem);

      const dateItem = createInfoListItem("Date", formatDate(book.date));
      infoList.appendChild(dateItem);

      const authorsItem = createInfoListItem("Author(s)", book.authors.join(", "));
      infoList.appendChild(authorsItem);

      const collectionsItem = createInfoListItem("Collection(s)", book.collections.join(", "));
      infoList.appendChild(collectionsItem);

      cardBody.appendChild(title);
      cardBody.appendChild(infoList);
      card.appendChild(cardBody);

      bookshelf.appendChild(card);
    });
  }

  function createInfoListItem(label, value) {
    const item = document.createElement("div");
    item.classList.add("book-info-item");

    const labelElement = document.createElement("dt");
    labelElement.textContent = label;
    item.appendChild(labelElement);

    const valueElement = document.createElement("dd");
    valueElement.textContent = value;
    item.appendChild(valueElement);

    return item;
  }

  function filterBooks() {
    const languageInputValue = languageInput.value.toLowerCase();
    const collectionInputValue = collectionInput.value.toLowerCase();
    const publisherInputValue = publisherInput.value.toLowerCase();
    const authorInputValue = authorInput.value.toLowerCase();
  
    const filteredBooks = books.filter((book) => {
      const language = book.language.join(", ").toLowerCase();
      const collections = book.collections.map((collection) => collection.toLowerCase());
      const publisher = book.publisher.join(", ").toLowerCase();
      const authors = book.authors.join(", ").toLowerCase();
  
      return (
        (languageInputValue === "" || language.includes(languageInputValue)) &&
        (collectionInputValue === "" || collections.some((collection) => collection.includes(collectionInputValue))) &&
        (publisherInputValue === "" || publisher.includes(publisherInputValue)) &&
        (authorInputValue === "" || authors.includes(authorInputValue))
      );
    });
  
    generateBookCards(filteredBooks);
  }

  languageInput.addEventListener("input", filterBooks);
  collectionInput.addEventListener("input", filterBooks);
  publisherInput.addEventListener("input", filterBooks);
  authorInput.addEventListener("input", filterBooks);

  generateBookCards(books);
};