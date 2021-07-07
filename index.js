// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
    const addedDrivers = {...driver};
    addedDrivers[key] = value;

    return addedDrivers;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key){
    let newDriver = {...driver};
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    driver;
    delete driver[key];
    return driver;
    
}

updateDriverWithKeyAndValue();
destructivelyDeleteFromDriverByKey();
deleteFromDriverByKey();
destructivelyDeleteFromDriverByKey();