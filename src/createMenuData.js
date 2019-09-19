function filteredData(data){
  return data.filter(word => word.length > 7);
}
  
function parents(data){
  return filteredData(data).map(function(word){
    return word.split("/")[0]
  }).filter((v, i, a) => a.indexOf(v) === i)
}
  
function children(data){
  return filteredData(data).map(function(word){
    return word.split("/")[1]
  })
}

function createMenuData(parent) {
  let newArr = parent.map(function(parent){
  subArr = parent.split("/")
  return {title: subArr[0], data: [subArr[1]]}
  });
  return newArr
}

module.exports = createMenuData;