function Human() {
  this.talk = (names) => console.log(`${names || "Humans"} can talk`);
}
const human = new Human();
human.talk();
Human.prototype.breathe = () => {
  console.log("I fucking breathe...");
};
human.breathe();
