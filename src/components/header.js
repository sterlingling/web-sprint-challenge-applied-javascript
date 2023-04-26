const Header = (title, date, temp) => {

  const headerDiv = document.createElement('div');
  const headerDate = document.createElement('span');
  const headerH1 = document.createElement('h1');
  const headerTemp = document.createElement('span');

  headerDiv.classList.add('header');
  headerDate.classList.add('date');
  headerTemp.classList.add('temp');

  headerH1.textContent = title;
  headerDate.textContent = date;
  headerTemp.textContent = temp;

  headerDiv.appendChild(headerDate);
  headerDiv.appendChild(headerH1);
  headerDiv.appendChild(headerTemp);

  return headerDiv;
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  const headerElement = Header(selector.title,selector.date,selector.temp);
  document.querySelector(selector).appendChild(headerElement);
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!
}

export { Header, headerAppender }
