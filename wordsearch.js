const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const transpose = function (letters) {
    let newArray = [];
    for (let i = 0; i < letters[0].length; i++) {
      let smolArr = [];
      for (let j = 0; j < letters.length; j++) {
        smolArr.push(letters[j][i]);
      }
      newArray.push(smolArr);
    }
    return newArray;
  };

  const verticalJoin = transpose(letters).map((x) => x.join(""));

  for (let ele of horizontalJoin) {
    if (ele.includes(word)) {
      return true;
    }
  }
  for (let ele of verticalJoin) {
    if (ele.includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;
