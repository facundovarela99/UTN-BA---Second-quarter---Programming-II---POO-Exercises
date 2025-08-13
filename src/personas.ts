export class Person {
    public name: string;
    public lastname: string;

    constructor(name: string, lastname: string){
        this.name = name;
        this.lastname = lastname;
    }
    getName(): string {
        return this.name
    }

    setName(name: string): void {
        this.name = name;
    }

    getLastname(): string{
        return this.lastname
    }

    setLastname(lastname: string): void{
        this.lastname = lastname;
    }
    sayHi(): void{
        console.log(`Hello.\nmy name is ${this.getName()} and my lastname is ${this.getLastname()}`)
    }

    private getFullName(): string {
        return `${this.getName}, ${this.getLastname()}`
    }
}
