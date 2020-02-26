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

(function() {
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
})();

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
  for (let index = 0; index < timeTotal.length; index++) {
    this.cookies.push(getRandomArbitrary(this.min, this.max, this.avg));
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
for (let i = 0; i < shops.length; i++) {
  shops[i].render();
}

(function() {
  var tabel = document.getElementById('tabel');
  var tr = document.createElement('tr');
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
})();
