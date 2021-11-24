const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant']

const foundAnimal = animals.findIndex(el => {
    return el === "elephants";
});
console.log(foundAnimal);

const startWithS = animals.findIndex (el => {
    return el[0] === "s" ? true : false;
});
console.log(startWithS);