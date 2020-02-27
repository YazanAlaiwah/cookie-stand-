'use strict';
// this function to have random cookies
function getRandomArbitrary(min, max, avg) {
  return Math.floor((Math.random() * (max - min) + min) * avg);
}
// array to have the shops
var shops = [];
// variabel to sum all the cookies
var totalTotal = 0;
// array for the open time
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

// this function to bulid the header of table
function head() {
  // call id of my div
  var div = document.getElementById('sales-tabel');
  var tabel = document.createElement('table');
  // set id to my table
  tabel.setAttribute('id', 'tabel');
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = '  ';

  tr.appendChild(th);
  // to make the header of hours open
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
  //  if statment to check if the shop is alrady there or not
  if (this.cookies.length === timeTotal.length) {
    null;
  } else {
    // if the shop was new will create an avarge cookies for it
    for (let index = 0; index < timeTotal.length; index++) {
      this.cookies.push(getRandomArbitrary(this.min, this.max, this.avg));
    }
  }
};
Loction.prototype.render = function() {
  // invoke the randomCustomers method to fill the array of cookies
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
  this.total = 0;
};

new Loction('Seattle', 23, 65, 6.3);
new Loction('Tokyo', 3, 24, 1.2);
new Loction('Dubai', 11, 38, 3.7);
new Loction('Paris', 20, 38, 2.3);
new Loction('Lima', 2, 16, 4.6);
function main() {
  // this function to render the shops in the array
  var x = document.getElementById('tabel');
  x.parentNode.removeChild(x);
  head();
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
    timeTotal[index][1] = 0;
  }
  td = document.createElement('td');
  td.textContent = totalTotal;
  tr.appendChild(td);
  tabel.appendChild(tr);
  totalTotal = 0;
}
footer();
// this function will invoke for adding and updateing the rows
function addtr(loction, min, max, avg) {
  // if to check if min is more then the max
  if (min > max) {
    alert('your min should be less then max');
    return;
  }
  new Loction(loction, min, max, avg);
  // call main function to render the new shop
  main();
  // if to remove the footer of the table and invoked it againg
  var tb = document.getElementById('footer');
  if (tb) {
    tb.parentNode.removeChild(tb);
    footer();
  }
  footer();
}
// function to handel the add form
var add = document.getElementById('form');
add.addEventListener('submit', function(e) {
  e.preventDefault();
  var loction = e.target.loction.value;
  var min = e.target.min.value;
  var max = e.target.max.value;
  var avg = e.target.avg.value;

  addtr(loction, min, max, avg);
});
var update = document.getElementById('update');
update.addEventListener('submit', function(e) {
  e.preventDefault();
  var eventLoction = e.target;
  var indexLoction;
  for (let index = 0; index < shops.length; index++) {
    if (eventLoction.originloction.value === shops[index].name) {
      // console.log(eventLoction);
      var loc = eventLoction.updateloction.value;
      var min = Number(eventLoction.updatemin.value);
      var max = Number(eventLoction.updatemax.value);
      var avg = Number(eventLoction.updateavg.value);
      // console.log(typeof avg);
      if (
        loc !== shops[index].name ||
        min !== shops[index].min ||
        max !== shops[index].max ||
        avg !== shops[index].avg
      ) {
        indexLoction = index;
        shops.splice(indexLoction, 1);
        addtr(loc, min, max, avg);
        // console.log('shops');
        break;
      } else {
        alert('nothing change!');
      }
    }
    // console.log(indexLoction);
  }
  if (indexLoction === undefined) {
    alert('the loction dose not exisist');
  }
  // console.log(shops);
  // indexLoction
});
// console.log(shops[0].name = 'blas')
// console.log(shops[0].name )
