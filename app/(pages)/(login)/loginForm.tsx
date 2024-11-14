'use client';

import { ChangeEvent, FormEvent, useState } from "react";
import CreateNewAccount from "./createNewAccount";
import ForgotPassword from "./forgotPassword";


export default function Form(){
    const [loginData, setLoginData] = useState({
        login: "",
        password: ""
    });

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setLoginData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try{
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Login successful:', data);
            } else {
                console.error('Login failed:', data);
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    }

    return (
        <div>
            <form method="POST" onSubmit={handleSubmit}>
                <input type="login" name="login" className="w-[358px] h-[54px] border-2 rounded-md mb-3 pl-4" placeholder="Adres e-mail lub numer telefonu" onChange={handleInput}/>
                
                <input type="password" name="password" className="w-[358px] h-[54px] border-2 rounded-md mb-4 pl-4" placeholder="Hasło" onChange={handleInput}/>
                
                <button type="submit" className="w-[358px] h-[48px] bg-[#0866ff] text-white font-bold rounded-md text-xl">Zaloguj się</button>
            </form>
            <ForgotPassword/>
            <hr className="h-px mt-[25px] mb-[26px] bg-[#dddfe2] border-0"/>
            <CreateNewAccount />
        </div>
    )
}