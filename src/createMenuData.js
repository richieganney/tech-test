function createMenuData(parent) {
  let newArr = parent.map(function(parent){
  subArr = parent.split("/")
  return {title: subArr[0], data: [subArr[1]]}
  });
  return newArr
}

module.exports = createMenuData;