// 7. Create a Ninja class with private attributes martialArt, weapon, strength (integer) and jump (integer)
    // ● Create setters and getters manually
    // ● Create a hop() function that receives a multiplier parameter (integer); Print by console jump multiplied by parameter
    // ● create attack() function that print by console the ninja's weapon and martial art
    // ● Create two Ninja instances, assign different values to each attribute and invoke the functions hop() and attack()


export class Ninja{
    private _martialArt: string;
    private _weapon: string;
    private _jump: number;

    constructor(martialArt: string, weapon: string, jump: number){
        this._martialArt = martialArt;
        this._weapon = weapon;
        this._jump = jump;
    }

    public get martialArt(): string{
        return this._martialArt;
    }

    public set martialArt(newMartialArt: string){
        this._martialArt = newMartialArt;
    }

    public get weapon(): string{
        return this._weapon
    }

    public set weapon(newWeapon: string){
        this._weapon = newWeapon;
    }

    public get jump(): number{
        return this._jump;
    }

    public hop(multiplier: number){
        return `Jumping: ${this._jump*multiplier} mts!`;
    }

    public attack(): string{
        return `Weapon: ${this._weapon}\nMartial Art: ${this._martialArt}`;
    }

}