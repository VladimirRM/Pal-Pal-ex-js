const dog = {
  name: "Sam",
  gav: function () {
    console.log(this.name);
  },
};

dog.gav();
