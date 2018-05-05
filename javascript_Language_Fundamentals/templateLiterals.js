// TEMPLATE LITERALS ( TEMPLATE STRINGS) compatible on all modern browsers

// most of the time you will be inserting html through javascript, which then we use template strings
const name3 = 'John';
const age3 = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;


// Without Template Strings (ES5) way

html = '<ul><li>Name: ' + name3 + ' </li><li>Age: ' + age3 + ' </li><li>Job: ' + job + ' </li><li>City: ' + city + ' </li></ul>';

// to make it more readable in (ES5)
html = '<ul>' +
        '<li>Name: ' + name3 + ' </li>' +
        '<li>Age: ' + age3 + ' </li>' +
        '<li>Job: ' + job + ' </li>' +
        '<li>City: ' + city + ' </li>' +
      '</ul>';



// With Template Strings (ES6)

function hello() {
  return 'hello';
}

//basically works just like html inside the `` we can pass in functions or arithmatic or ternerary operators (one line conditional statements)
html = `<ul>
          <li> Name: ${name3} </li>
          <li>Age: ${age3}</li>
          <li>Job: ${job}</li>
          <li>City: ${city}</li>
          <li>${2+2}</li>
          <li>${hello()}</li>
          <li>${age3 > 30 ? 'Over 30' : 'Under 30'}</li> 
        </ul>
        `

// document.body.innerHTML = html;  //this appends to the body