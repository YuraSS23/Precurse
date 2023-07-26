let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
let passportMarried2 = {name: passportMarried.name, surname: passportMarried.surname, married: true, address: {country: passportMarried.address.country, city: passportMarried.address.city}};
passportMarried2.married = true;
console.log(passportMarried);
console.log(passportMarried2);