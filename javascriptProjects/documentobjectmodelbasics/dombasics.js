// Example1: Change Color on click;
const example1 = document.getElementById('example1');

example1.addEventListener('click', () => {
  example1.style.color = 'green';
});


// Example2: Change Color on Button;
const example2 = document.getElementById('example2');
const button2 = document.getElementById('button2');
const text2 = document.getElementById('text2');

button2.addEventListener('click', () => {
  example2.style.color = text2.value;
});


// Example3: Change Color on Button;
const example3 = document.getElementsByTagName('span')[0];
  button3.addEventListener('click', () => {
    example3.style.color = text3.value;
  });

// Example4: Change Color on Button;
const example4 = document.getElementsByClassName(".snippet");
  for(var i = 0; i<snippet.length; i++) {
    snippet[i].style.backgroundColor = "blue";
  }


// Example5: Change Color on Button;
const odds = document.querySelectorAll('div:nth-child(odd)');
for (let i = 0; i < odds.length; i +=1) {
  odds[i].style.color = 'red';
}
