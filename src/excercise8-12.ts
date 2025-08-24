// 8. Create a class Person that has private attributes name and surname, with their setters and
// getters.
    // ● Create a class called Visitor with the same attributes.
    // ● Create a class Guard with the same attributes.
    // ● Create an instance of each class and assign values to them.
    // ● Display the values on the screen.

/* */
// 9. Create a class Person that has private attributes name and surname, with their setters and
// getters.
// ● Create a class called Visitor that extends Person.
// ● Create a class Guard that extends Person.
// ● Create an instance of each class and assign values to them.
// ● Display the values on the screen; study the advantages of using inheritance.

/* */
// 10. Continuing with the previous example, make the following modifications:
// ● Add in Person the method introduce() that returns the person's name and surname.
// ● Create an instance of each class and assign values to them.
// ● Display the values on the screen.
// ● Override the introduce() method in the Guard class so that it returns the following message: 
//   "Hello, my name is <name and surname> and I am the guard." Where <name and surname> should 
//   be replaced with the guard's actual name and surname.
// ● Display the result of invoking the introduce() method and note that the implementation in 
//   the Guard class takes precedence over that of its parent.

/* */
// 11. Continuing with the previous example, make the following modifications:
// ● Add in Visitor the private attribute dni (numeric) with its corresponding setters and getters.
// ● Add in Guard the public method checkDocument() that receives as a parameter the person's 
//   dni and returns the message "Go ahead, person with dni <dni>" where <dni> is the value 
//   received as a parameter.
// ● Create an instance of each class and assign values to them.
// ● Display the values on the screen.

/* */
// 12. Continuing with the previous example, make the following modifications:
// ● Modify the Guard class so that the public method checkDocument() returns the message 
//   "Go ahead <visitor's full name> with dni <dni>" replacing respectively with the visitor's 
//   full name and their dni.
// ● Create an instance of each class and assign values to them.
// ● Display the values on the screen.
// ● Analyze if it is possible to pass a single parameter to the checkDocument() method and 
//   study the advantages and disadvantages that would be associated with it.


export abstract class Person{
    private _name: string;
    private _lastName: string;

    constructor(name: string, lastName: string){
        this._name = name;
        this._lastName = lastName;
    }

    public introduceHimself(): string{
        return `${this._name} ${this._lastName}`;
    }

    public get name(): string{
        return this._name;
    }

    public set name(newName: string){
        this._name = newName;
    }

    public get lastName(): string{
        return this._lastName;
    }

    public set lastName(newLastName: string){
        this._lastName = newLastName;
    }
}

export class Visitor extends Person{
    private _dniNumber: number

    constructor(name: string, lastName: string, dniNumber: number){
        super(name, lastName);
        this._dniNumber = dniNumber;
    }

    public get dniNumber(): number{
        return this._dniNumber
    }

    public set dniNumber(newDniNumber: number){
        this._dniNumber = newDniNumber;
    }

}

export class Guard extends Person{
    public introduceHimself(): string {
        return `Hello! My name is ${this.name} ${this.lastName}, and I'm the guard`;
    }

    public checkDNI(fullName: string ,VisitorDniNumber: number){
        return `Go on, ${fullName} with DNI Number ${VisitorDniNumber}`;
    }
}
