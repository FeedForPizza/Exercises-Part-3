
const button = document.getElementById("button");
const delButton = document.getElementById("deleteButton");
const fName = document.querySelector('input[name="fName"]');
const lName = document.querySelector('input[name="lName"]');
const address = document.querySelector('input[name="address"]');
const tel = document.querySelector('input[name="telephone"]');
const email = document.querySelector('input[name="email"]');
const tbody = document.querySelector("tbody");
const form = document.querySelector("form");
function Person(firstName, lastName, address, telephone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.telephone = telephone;
    this.email = email;
}
const person1 = new Person("Joe", "Doe", "anywhere", "088123456789", "ccccc@edynamix.com");
const person2 = new Person("Joe", "Doe", "anywhere", "088123456789", "ccccc@edynamix.com");
const person3 = new Person("Joe", "Doe", "anywhere", "088123456789", "ccccc@edynamix.com");
//THIS IS FOR LESSON 23
const arrayPerson = [person1, person2, person3];

(function LoadData() {
    for (i in arrayPerson) {
        tbody.innerHTML += "<tr><td>"
            + arrayPerson[i].firstName + "</td><td>"
            + arrayPerson[i].lastName + "</td><td>"
            + arrayPerson[i].address + "</td><td>"
            + arrayPerson[i].telephone + "</td><td>"
            + arrayPerson[i].email + "</td></tr>";
    }
})();

delButton.addEventListener("click", function () {

    for (i in arrayPerson) {
        if (fName.value == arrayPerson[i].firstName
            && lName.value == arrayPerson[i].lastName
            && address.value == arrayPerson[i].address
        ) {
            tbody.deleteRow(i);
            arrayPerson.pop(arrayPerson[i]);
        }
    }
})


//THIS IS  FOR LESSON 21. 

form.addEventListener("submit", function (e) {
    e.preventDefault();
        tbody.innerHTML += "<tr><td>"
            + fName.value + "</td><td>"
            + lName.value + "</td><td>"
            + address.value + "</td><td>"
            + tel.value + "</td><td>"
            + email.value + "</td></tr>";
        const newPerson = new Person(fName.value, lName.value, address.value, tel.value, email.value);
        arrayPerson.push(newPerson);

        fName.value = "";
        lName.value = "";
        address.value = "";
        tel.value = "";
        email.value = "";
    

});

//delButton.addEventListener("click", function () {
//    let rowCount = tbody.rows.length;
//    tbody.deleteRow(rowCount - 1);
//})

