function getRandomArbitrary(min, max, avg) {
  return Math.floor((Math.random() * (max - min) + min) * avg);
}

var Seattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  time: [],
  cookiesPurchased: [],
  randomCustomers: function() {
    for (let index = 0; index < 14; index++) {
      this.cookiesPurchased.push(
        getRandomArbitrary(this.minCustomer, this.maxCustomer, this.avgCookie)
      );
    }
  },
  render: function() {
    this.randomCustomers();
    var totale = 0;
    var body = document.getElementsByTagName('body');
    var artical = document.createElement('article');
    var ul = document.createElement('ul');
    for (let index = 0; index < this.cookiesPurchased.length; index++) {
      var time = index === 6 ? 'pm' : 'am';
      var hour = (index + 6) % 12 === 0 ? 12 : (index + 6) % 12;
      var li = document.createElement('li');
      li.textContent = `${hour}${time}: ${this.cookiesPurchased[index]} cookies`;
      ul.appendChild(li);
      totale += this.cookiesPurchased[index];
    }
    li = document.createElement('li');
    li.textContent = `Total: ${totale} cookies`;
    ul.appendChild(li);
    var h2 = document.createElement('h2');
    h2.textContent = this.name;
    artical.appendChild(h2);
    artical.appendChild(ul);
    // console.log(body)
    body[0].appendChild(artical);
  }
};

var Tokyo = {
  name: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2,
  cookiesPurchased: [],
  randomCustomers: function() {
    for (let index = 0; index < 14; index++) {
      this.cookiesPurchased.push(
        getRandomArbitrary(this.minCustomer, this.maxCustomer, this.avgCookie)
      );
    }
  },
  render: function() {
    this.randomCustomers();
    var totale = 0;
    var body = document.getElementsByTagName('body');
    var artical = document.createElement('article');
    var ul = document.createElement('ul');
    for (let index = 0; index < this.cookiesPurchased.length; index++) {
      var time = index === 6 ? 'pm' : 'am';
      var hour = (index + 6) % 12 === 0 ? 12 : (index + 6) % 12;
      var li = document.createElement('li');
      li.textContent = `${hour}${time}: ${this.cookiesPurchased[index]} cookies`;
      ul.appendChild(li);
      totale += this.cookiesPurchased[index];
    }
    li = document.createElement('li');
    li.textContent = `Total: ${totale} cookies`;
    ul.appendChild(li);
    var h2 = document.createElement('h2');
    h2.textContent = this.name;
    artical.appendChild(h2);
    artical.appendChild(ul);
    // console.log(body)
    body[0].appendChild(artical);
  }
};

var Dubai = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookie: 3.7,
  cookiesPurchased: [],
  randomCustomers: function() {
    for (let index = 0; index < 14; index++) {
      this.cookiesPurchased.push(
        getRandomArbitrary(this.minCustomer, this.maxCustomer, this.avgCookie)
      );
    }
  },
  render: function() {
    this.randomCustomers();
    var totale = 0;
    var body = document.getElementsByTagName('body');
    var artical = document.createElement('article');
    var ul = document.createElement('ul');
    for (let index = 0; index < this.cookiesPurchased.length; index++) {
      var time = index === 6 ? 'pm' : 'am';
      var hour = (index + 6) % 12 === 0 ? 12 : (index + 6) % 12;
      var li = document.createElement('li');
      li.textContent = `${hour}${time}: ${this.cookiesPurchased[index]} cookies`;
      ul.appendChild(li);
      totale += this.cookiesPurchased[index];
    }
    li = document.createElement('li');
    li.textContent = `Total: ${totale} cookies`;
    ul.appendChild(li);
    var h2 = document.createElement('h2');
    h2.textContent = this.name;
    artical.appendChild(h2);
    artical.appendChild(ul);
    // console.log(body)
    body[0].appendChild(artical);
  }
};

var Paris = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  cookiesPurchased: [],
  randomCustomers: function() {
    for (let index = 0; index < 14; index++) {
      this.cookiesPurchased.push(
        getRandomArbitrary(this.minCustomer, this.maxCustomer, this.avgCookie)
      );
    }
  },
  render: function() {
    this.randomCustomers();
    var totale = 0;
    var body = document.getElementsByTagName('body');
    var artical = document.createElement('article');
    var ul = document.createElement('ul');
    for (let index = 0; index < this.cookiesPurchased.length; index++) {
      var time = index === 6 ? 'pm' : 'am';
      var hour = (index + 6) % 12 === 0 ? 12 : (index + 6) % 12;
      var li = document.createElement('li');
      li.textContent = `${hour}${time}: ${this.cookiesPurchased[index]} cookies`;
      ul.appendChild(li);
      totale += this.cookiesPurchased[index];
    }
    li = document.createElement('li');
    li.textContent = `Total: ${totale} cookies`;
    ul.appendChild(li);
    var h2 = document.createElement('h2');
    h2.textContent = this.name;
    artical.appendChild(h2);
    artical.appendChild(ul);
    // console.log(body)
    body[0].appendChild(artical);
  }
};

var Lima = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookie: 4.6,
  cookiesPurchased: [],
  randomCustomers: function() {
    for (let index = 0; index < 14; index++) {
      this.cookiesPurchased.push(
        getRandomArbitrary(this.minCustomer, this.maxCustomer, this.avgCookie)
      );
    }
  },
  render: function() {
    this.randomCustomers();
    var totale = 0;
    var body = document.getElementsByTagName('body');
    var artical = document.createElement('article');
    var ul = document.createElement('ul');
    for (let index = 0; index < this.cookiesPurchased.length; index++) {
      var time = index === 6 ? 'pm' : 'am';
      var hour = (index + 6) % 12 === 0 ? 12 : (index + 6) % 12;
      var li = document.createElement('li');
      li.textContent = `${hour}${time}: ${this.cookiesPurchased[index]} cookies`;
      ul.appendChild(li);
      totale += this.cookiesPurchased[index];
    }
    li = document.createElement('li');
    li.textContent = `Total: ${totale} cookies`;
    ul.appendChild(li);
    var h2 = document.createElement('h2');
    h2.textContent = this.name;
    artical.appendChild(h2);
    artical.appendChild(ul);
    // console.log(body)
    body[0].appendChild(artical);
  }
};
Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
