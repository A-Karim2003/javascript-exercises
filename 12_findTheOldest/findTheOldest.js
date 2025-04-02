const findTheOldest = function (people) {
  return people.reduce((oldest, person) => {
    // Find the current age of the persons
    const personAge =
      (person?.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;

    //Find the age of the subsequent people
    const oldestAge =
      (oldest?.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth;
    console.log(personAge, oldestAge);

    //return the older person
    return personAge > oldestAge ? person : oldest;
  }, people[0]);
};
// Do not edit below this line
module.exports = findTheOldest;
