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
  name: "John",
};
human.say = cat.may;
human.say();
dog.gav();
cat.may();
