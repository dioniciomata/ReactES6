// Creating class objects
// function persona(name, age){
//     this.name= name;
//     this.age= age;
//     console.log(this);
//     return this;
// };

// var persona1 = persona('Pablo', 32);
// console.log(persona1.age);
// console.log(persona1.name);

// Creating class objects with a constructor in a class
// class Persona {
//     constructor(name, age){
//     this.name= name;
//     this.age= age;
//     console.log(this);
//     return this;
//     };
// }

// var persona1 = new Persona('Grace', 29);
// console.log(persona1.age);
// console.log(persona1.name);

// Creating Subclass objects and call the method super()

class Man{
    constructor(name, age, drive){
        this.name=name;
        this.age=age;
        this.drive=drive;
        return this;
    }
}

class Woman extends Man{
    constructor(name,age,drive){
        if(drive==false){
            super(name,age,drive);
            this.gender='female';
        }else{
            super(name,age,drive);
            this.gender='male';
        }
    }
}

const Man1 = new Man('Heliel',30,true);
console.log(Man1);

const Man2 = new Woman('Pau', 32,false);
console.log(Man2);

const Man3 = new Woman('Omar', 33, true);
console.log(Man3);

const Man4 = new Woman('Lili',40,true);
console.log(Man4);