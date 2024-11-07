import {FormEvent} from "react";

export default function CreateNewAccount() {

    function handle(event: FormEvent<HTMLButtonElement>){
        event.preventDefault();

        location.href = '/new-account';
    }


    return (
        <div className="w-full h-full text-center">
            <button onClick={handle} className="bg-[#36a420] w-[188px] h-12 rounded-md text-[17px] font-bold text-white">Utwórz nowe konto</button>
        </div>
    )
}