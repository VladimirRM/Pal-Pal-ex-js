const dog = {
  name: "Sam",
  gav: function () {
    console.log(this.name);
  },
};
const cat = {
  name: "Mursic",
  may: function () {
    console.log(this.name);
  },
};

const human = {
    
}

dog.gav();
cat.may();
