//1. Create a Person class that has public atributes name and last name.
// ● Create an instance and give it values.
// ● Display the assigned values


export class Person{
    name: string;
    lastName: string;

    constructor(name: string, lastName: string){
        this.name = name;
        this.lastName = lastName;
    }
}