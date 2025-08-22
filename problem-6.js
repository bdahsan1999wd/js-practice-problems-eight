function findYoungest(people) {
    // If the array is empty, return null
    if (people.length === 0) {
        return null;
    }

    // Set the youngest to the first person initially.
    let youngest = people[0];

    // Loop through the rest of the people in the array
    for (let i = 1; i < people.length; i++) {

        // current person being checked
        const currentPerson = people[i];

        // If current person is younger than the youngest so far, update youngest
        if (currentPerson.age < youngest.age) {
            youngest = currentPerson;
        }
    }

    // Return the youngest person after checking all
    return youngest;
}

const peopleArray = [
    { name: "Ahsan", age: 25 },
    { name: "Habib", age: 20 },
    { name: "Ashik", age: 30 },
];

console.log(findYoungest(peopleArray));