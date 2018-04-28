module.exports = function sum(value, res) {
  if (value === undefined) {
    return sum(0, res);
  } else {
    let tmp = (res || 0) + value;

    function func(value) {
      return sum(value, tmp);
    }

    func.valueOf = function() {
      return tmp;
    };

    return func;
  }
};
