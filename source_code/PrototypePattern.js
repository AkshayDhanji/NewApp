const PrototypePattern = {
    noOfWheels : 4,
    start() {
        return 'started';
    },
    stop() {
        return 'stopped';
    }
}

const NonPrototypePattern = {
    noOfWheels : 4,
    stop() {
        return 'stopped';
    }
}


const Audi = Object.create(PrototypePattern, { owner: { value: "Volkswagen Group" } });
console.log(Audi.__proto__ === PrototypePattern)
console.log(Audi.__proto__ === NonPrototypePattern)