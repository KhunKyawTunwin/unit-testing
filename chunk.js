const chunkArray = (arr, len) => {
  // init chunked arr
  const chunkedArr = [];

  // Loop through arr
  arr.forEach((val) => {
    // Get last element

    // const last = chunkedArr[chunkedArr.length - 1];
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if last and if last length is equal to the chunk length

    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
};

module.exports = chunkArray;
