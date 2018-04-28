/* global mocha, chai, describe, it */
/* global isPolindrom, Hr, beforeEach, bind, afterEach, sum */
let mocha = require("mocha");
let chai = require("chai");
let sum = require("./summ");

//mocha.setup("bdd");
const assert = chai.assert;
describe("sum", function() {
  it("функция", function() {
    assert.equal(typeof sum, "function");
  });
  it("по-умолчанию инициализируется нулем", function() {
    assert.equal(+sum(), 0);
  });
  it("инициализируется числом", function() {
    assert.equal(+sum(5), 5);
  });
  it("складывает числа", function() {
    assert.equal(+sum(1)(2), 3);
    assert.equal(+sum(1)(3), 4);
    assert.equal(+sum(1)(95), 96);
  });
  it("складывает числа последовательно", function() {
    assert.equal(+sum(1)(2), 3);
    assert.equal(+sum(5)(7)(9), 21);

    var s = sum();
    for (var i = 0; i < 15; i++) {
      s = s(1);
    }
    assert.equal(+s(1), 16);
  });
  it("добавляет 0 по-умолчанию", function() {
    assert.equal(+sum(4)(), 4);
    assert.equal(+sum(7)()(2), 9);
  });
  it("сумматоры независимые", function() {
    var s1 = sum(1);
    var s12 = s1(2);
    var s15 = s1(5);
    var s152 = s15(2);
    var s159 = s15(9);
    var s10 = s1();
    assert.equal(+s1, 1);
    assert.equal(+s12, 3);
    assert.equal(+s15, 6);
    assert.equal(+s152, 8);
    assert.equal(+s159, 15);
    assert.equal(+s10, 1);
    assert.equal(+s1(2), 3);
    assert.equal(+s1(5), 6);
    assert.equal(+s159(1), 16);
    assert.equal(+s159(2), 17);
  });
  it("может отработать много раз", function() {
    var s = sum();
    for (var i = 0; i < 999; i++) {
      s = s(1);
    }
    assert.equal(+s(), 999);
  });
});
// mocha.run();
