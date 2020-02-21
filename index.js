// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, k, v){
   return Object.assign({}, obj, {[k]: v});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, k, v){
    return Object.assign(obj, {[k]: v});
}

function deleteFromDriverByKey(obj, k){
    const newObj = Object.assign({}, obj);
    delete newObj[k];
    return newObj;
}

function destructivelyDeleteFromDriverByKey(obj, k){
    delete obj[k];
  return  obj;
}