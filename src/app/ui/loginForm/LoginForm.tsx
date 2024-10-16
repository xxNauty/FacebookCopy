'use client';

import {FormEvent} from "react";

export default function Form(){
    async function onSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const response = await fetch('/api/submit', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="email" name="email" className="w-[358px] h-[50px] border-2 rounded-md"
                   placeholder="Adres e-mail lub numer telefonu"/>
            <input type="password" name="password" className="w-[358px] h-[50px] border-2 rounded-md" placeholder="Hasło"/>
            <button type="submit" className="w-[358px] h-[50px] bg-[#0866ff] text-white font-bold rounded-md">Zaloguj się
            </button>
        </form>
    )
}