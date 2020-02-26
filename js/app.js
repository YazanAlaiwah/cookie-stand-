'use strict';
function getRandomArbitrary(min, max, avg) {
  return Math.floor((Math.random() * (max - min) + min) * avg);
}
var shops = [];
var totalTotal = 0;
var timeTotal = [
  ['6am', 0],
  ['7am', 0],
  ['8am', 0],
  ['9am', 0],
  ['10am', 0],
  ['11am', 0],
  ['12pm', 0],
  ['1pm', 0],
  ['2pm', 0],
  ['3pm', 0],
  ['4pm', 0],
  ['5pm', 0],
  ['6pm', 0],
  ['7pm', 0]
];

function head() {
  var div = document.getElementById('sales-tabel');
  var tabel = document.createElement('table');
  tabel.setAttribute('id', 'tabel');
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = '  ';

  tr.appendChild(th);
  for (let index = 0; index < timeTotal.length; index++) {
    th = document.createElement('th');
    th.textContent = timeTotal[index][0];
    tr.appendChild(th);
  }
  th = document.createElement('th');
  th.textContent = 'totatl';
  tr.appendChild(th);
  tabel.appendChild(tr);
  div.appendChild(tabel);
}
head();

function Loction(name, min, max, avg) {
  this.total = 0;
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  shops.push(this);
  this.cookies = [];
}
Loction.prototype.randomCustomers = function() {
  if (this.cookies.length === 14) {
    null;
  } else {
    for (let index = 0; index < timeTotal.length; index++) {
      this.cookies.push(getRandomArbitrary(this.min, this.max, this.avg));
    }
  }
};
Loction.prototype.render = function() {
  this.randomCustomers();
  var tabel = document.getElementById('tabel');
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);
  for (let index = 0; index < this.cookies.length; index++) {
    // console.log(timeTotal[index], this.cookies.length);
    timeTotal[index][1] += this.cookies[index];
    td = document.createElement('td');
    td.textContent = this.cookies[index];
    tr.appendChild(td);
    this.total += this.cookies[index];
  }
  totalTotal += this.total;
  td = document.createElement('td');
  td.textContent = this.total;
  tr.appendChild(td);
  tabel.appendChild(tr);
};

new Loction('Seattle', 23, 65, 6.3);
new Loction('Tokyo', 3, 24, 1.2);
new Loction('Dubai', 11, 38, 3.7);
new Loction('Paris', 20, 38, 2.3);
new Loction('Lima', 2, 16, 4.6);
function main() {
  for (let i = 0; i < shops.length; i++) {
    shops[i].render();
  }
}
main();

function footer() {
  var tabel = document.getElementById('tabel');
  var tr = document.createElement('tr');
  tr.setAttribute('id', 'footer');
  var td = document.createElement('td');
  td.textContent = 'total';
  tr.appendChild(td);
  for (let index = 0; index < timeTotal.length; index++) {
    td = document.createElement('td');
    td.textContent = timeTotal[index][1];
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = totalTotal;
  tr.appendChild(td);
  tabel.appendChild(tr);
}
footer();

var x = document.getElementById('form');
x.addEventListener('submit', function(e) {
  e.preventDefault();
  var loction = e.target.loction.value;
  var min = e.target.min.value;
  var max = e.target.max.value;
  var avg = e.target.avg.value;
  new Loction(loction, min, max, avg).render();
  var tb = document.getElementById('footer');
  tb.parentNode.removeChild(tb);
  footer();
});
