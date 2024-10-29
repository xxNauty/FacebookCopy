'use client';

import {FormEvent} from "react";
import ForgotPassword from "@/app/ui/loginForm/forgotPassword";
import CreateNewAccount from "@/app/ui/loginForm/createNewAccount";

export default function Form(){
    async function onSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        console.log("qwerty");

        // const formData = new FormData(event.currentTarget);
        // const response = await fetch('/', {
        //     method: 'POST',
        //     body: formData,
        // });
        //
        // console.log(formData.get("email"));
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="email" name="email" className="w-[358px] h-[54px] border-2 rounded-md mb-3 pl-4"
                       placeholder="Adres e-mail lub numer telefonu"/>
                <input type="password" name="password" className="w-[358px] h-[54px] border-2 rounded-md mb-4 pl-4"
                       placeholder="Hasło"/>
                <button type="submit"
                        className="w-[358px] h-[48px] bg-[#0866ff] text-white font-bold rounded-md text-xl">Zaloguj się
                </button>
            </form>
            <ForgotPassword/>
            <hr className="h-px mt-[25px] mb-[26px] bg-[#dddfe2] border-0"/>
            <CreateNewAccount />
        </div>
    )
}