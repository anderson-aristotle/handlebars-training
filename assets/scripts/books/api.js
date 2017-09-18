'use strict'

const app = require('../app.js')

const getBooks = function () {
  return $.ajax({
    url: app.host + '/books', // "http://book-json.herokuapp.com/books"
    method: 'GET'
  })
}

module.exports = {
  getBooks
}
