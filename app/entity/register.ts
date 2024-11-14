import Gender from "./enums/gender";
import Pronouns from "./enums/pronouns";

class Register{
    private _name : string;
    private _lastName : string;
    private _dateOfBirth : string; //TODO: poszukać lepszego rozwiązania
    private _gender : Gender;
    private _login : string; //email albo numer telefonu
    private _password : string;
    private _pronoun? : Pronouns; //pole opcjonalne
    private _customGender? : string;

    constructor(
        name: string,
        lastName: string,
        dateOfBirth: string,
        gender: Gender,
        login: string,
        password: string,
        pronoun?: Pronouns,
        customGender?: string,
    ){
        this._name = name;
        this._lastName = lastName;
        this._dateOfBirth = dateOfBirth;
        this._gender = gender;
        this._login = login;
        this._password = password;
        this._pronoun = pronoun;
        this._customGender = customGender;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get dateOfBirth(): string {
        return this._dateOfBirth;
    }

    set dateOfBirth(value: string) {
        this._dateOfBirth = value;
    }

    get gender(): Gender {
        return this._gender;
    }

    set gender(value: string) { //TODO: przetestować 
        this._gender = Gender[value as keyof typeof Gender];
    }

    get login(): string {
        return this._login;
    }

    set login(value: string) {
        this._login = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get pronoun(): Pronouns | undefined {
        return this._pronoun;
    }

    set pronoun(value: string) { //TODO: przetestować 
        this._pronoun = Pronouns[value as keyof typeof Pronouns];
    }

    get customGender(): string | undefined {
        return this._customGender;
    }

    set customGender(value: string) {
        this._customGender = value;
    }
}

export default Register;