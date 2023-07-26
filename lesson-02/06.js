let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
let passportWithAddress1 = structuredClone(passportWithAddress);
passportWithAddress1.address.city = 'Bobryisk';
console.log(passportWithAddress);
console.log(passportWithAddress1);