const getCurrentTimestamp = require('./getCurrentTimestamp')
const randomColor = require('./randomColor')
const reverseString = require('./reverseString')

module.exports = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }