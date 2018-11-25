/**
 * 返回指定范围的随机数
 * @function
 * @param {Number} num1
 * @param {Number} num2
 * @returns {Number}
 * @example
 * 不传参数
 * randomNumber() => [0 - > 255]
 * 传一个参数
 * randomNumber(9) => [0 - > 9]
 * 传两个参数
 * randomNumber(1, 9) => [1 -> 9]
 */
function randomNumber (num1 = 255, num2 = 0) {
  return Math.round(num1 + Math.random() * (num2 - num1))
}

module.exports = randomNumber
