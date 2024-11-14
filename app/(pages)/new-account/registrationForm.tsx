'use client'

import React, {FormEvent} from "react";
import DateOfBirth from "./dateOfBirth";

export default function RegistrationForm(){

    function showHiddenGender(){
        const hiddenGenderDiv = document.querySelector("#hidden_gender");
        if(hiddenGenderDiv?.classList.contains("hidden")){
            hiddenGenderDiv?.classList.remove("hidden");
        }
    }

    function hideHiddenGender(){
        const hiddenGenderDiv = document.querySelector("#hidden_gender");
        if(!hiddenGenderDiv?.classList.contains("hidden")){
            hiddenGenderDiv?.classList.add("hidden");
        }
    }

    async function submittedForm(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        // const formData = new FormData(event.currentTarget);
        // const response = await fetch('/new-account', {
        //     method: 'POST',
        //     body: formData,
        // })

        console.log();
    }

    return (
        <div className="w-[432px] mr-auto ml-auto text-center flex flex-col border rounded-lg shadow-lg bg-white mb-[60px]">
            <div className="mb-3">
                <p className="text-[25px] font-semibold">Utwórz nowe konto</p>
                <p className="text-[15px] font-normal text-[#606770]">To szybkie i proste.</p>
            </div>
            <hr />
            <form className="w-[397px] mr-auto ml-auto" onSubmit={submittedForm}>
                <div className="mt-4">
                    <input type="text" name="firstName" placeholder="Imię" className="w-[192px] h-[38px] border rounded-md mr-[11px] p-2"/>
                    <input type="text" name="lastName" placeholder="Nazwisko" className="w-[192px] h-[38px] border rounded-md p-2"/>
                </div>
                <DateOfBirth />
                <div>
                    <p className="text-left text-[12px] text-[#606770] mt-3 mb-1">Płeć</p>
                    <div className="flex flex-row">
                        <div className="rounded-md border w-[179px] h-[34px] bg-white relative mr-3">
                            <label htmlFor="female" className="w-full text-left absolute left-1 top-1/2 -translate-y-1/2 p-2">Kobieta</label>
                            <input className="absolute right-1 top-1/2 -translate-y-1/2" type="radio" id="female" value="female" name="gender" onInput={hideHiddenGender}/>
                        </div>
                        <div className="rounded-md border w-[204px] h-[34px] bg-white relative">
                            <label htmlFor="male" className="w-full text-left absolute left-1 top-1/2 -translate-y-1/2 p-2">Mężczyzna</label>
                            <input className="absolute right-1 top-1/2 -translate-y-1/2" type="radio" id="male" value="male" name="gender" onInput={hideHiddenGender}/>
                        </div>
                    </div>
                    <div className="rounded-md border {/*w-full*/} bg-white relative w-[397px] h-[34px] mt-[14px]">
                        <label htmlFor="other" className="w-full text-left absolute left-1 top-1/2 -translate-y-1/2 p-2">Ustawienie niestandardowe</label>
                        <input className="absolute right-1 top-1/2 -translate-y-1/2" type="radio" id="other" value="other" name="gender" onInput={showHiddenGender}/>
                    </div>
                    <div id="hidden_gender" className="hidden">
                        <div>
                            <select defaultValue={0} className="w-[397px] h-[34px] mr-3 border rounded-md mt-[14px] p-2">
                                <option value={0} disabled className="p-2"> Wybierz zaimek</option>
                                <option value={1} className="p-2"> Ona: Złóż jej życzenia urodzinowe!</option>
                                <option value={2} className="p-2"> On: Złóż mu życzenia urodzinowe!</option>
                                <option value={3} className="p-2"> Oni/one: Złóż mu/jej życzenia urodzinowe!</option>
                            </select>
                        </div>
                        <div>
                            <p className="text-left text-[12px] text-[#606770] mt-0.5 mb-2">
                                Identyfikujący Cię zaimek jest widoczny dla wszystkich.</p>
                            <input className="w-[397px] h-[34px] mr-3 border rounded-md p-2" type="text"
                                   placeholder="Płeć (opcjonalnie)" name="otherGender"/>
                        </div>
                    </div>
                </div>
                <div>
                    <input type="text" placeholder="Numer telefonu komórkowego lub e-mail"
                           className="w-full h-[38px] border rounded-md mt-2 p-2" name="phoneNumber_or_email"/>
                    <input type="password" placeholder="Nowe hasło" className="w-full h-[38px] border rounded-md mt-2.5 mb-6 p-2" name="password"/>
                </div>
                <div className="text-[11px] text-left w-[100%] text-[#777777]">
                    <p>
                        Osoby korzystające z naszej usługi mogły przesłać Twoje
                        dane kontaktowe do Facebooka. <a className="text-blue-800">Dowiedz się więcej.</a>
                    </p>
                    <br/>
                    <p>
                        Klikając przycisk Zarejestruj się, akceptujesz nasz <a className="text-blue-800">Regulamin</a>.
                        <a className="text-blue-800">Zasady ochrony prywatności</a> informują, w jaki sposób gromadzimy,
                        użytkujemy i udostępniamy dane użytkowników, a <a className="text-blue-800">Zasady dotyczące
                        plików cookie</a> informują jak korzystamy z plików cookie i podobnych
                        technologii. Możesz otrzymywać powiadomienia SMS z Facebooka, z
                        których możesz zrezygnować w dowolnej chwili.
                    </p>
                </div>
                <button type="submit" className="mt-6 w-[200px] h-[36px] bg-[#119f16] text-white font-bold rounded-md text-xl">
                    Zarejestruj się
                </button>
                <a className="block py-6 text-blue-600" href="/">Masz już konto?</a>
            </form>
        </div>
    )
}