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

function dataInArrays(data){
  return parents(data).map((parent) => 
    [parent, children(data).filter(child => child.indexOf(parent) !== -1)])
}
  
function createMenuData(data){
  let arrays = dataInArrays(data)
  arrays.unshift(["title", "data"])
  let objectKeys = arrays.shift();
  return arrays = arrays.map(function(row){
    return objectKeys.reduce(function(object, key, index){
        object[key] = row[index];
        return object;
    }, {});
  });
}

module.exports = createMenuData;