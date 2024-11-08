import React, {useEffect, useState} from "react";

export default function DateOfBirth() {

    const maxDaysOfMonths = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];

    const [lastDay, setNumOptions] = useState(maxDaysOfMonths[new Date().getMonth()]);

    function setLastDayOfMonth(){
        const month = document.querySelector("#month")?.value; //działa
        const year = document.querySelector("#year")?.value;

        let maxDays = maxDaysOfMonths[month];

        if(maxDays === "28" && leapYear(year)){
            maxDays = "29";
        }

        setNumOptions(maxDays);
    }

    function leapYear(year: number)
    {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }

    //-----------------------------------------------------

    const [options, setOptions] = useState<number[]>([]);

    useEffect(() => {setOptions(Array.from({ length: Number(lastDay) }, (_, i) => i));}, [lastDay]);

    //-----------------------------------------------------

    const currentYear = new Date().getFullYear();

    return (
        <div>
            <p className="text-left text-[12px] text-[#606770] mt-3 mb-1">Data urodzenia</p>
            {/*todo: naprawić default value*/}
            <select defaultValue={new Date().getDate() + 1} className="w-[123px] h-[34px] mr-3 border rounded-md" id="dayOfMonth" name="day">
                {options.map((option) => (
                    <option key={option + 1} value={option + 1}>
                        {option + 1}
                    </option>
                ))}
            </select>
            <select onChange={setLastDayOfMonth} id="month" defaultValue={new Date().getMonth()}
                    className="w-[123px] h-[34px] border rounded-md mr-3" name="month">
                <option value="0">sty</option>
                <option value="1">lut</option>
                <option value="2">mar</option>
                <option value="3">kwi</option>
                <option value="4">maj</option>
                <option value="5">cze</option>
                <option value="6">lip</option>
                <option value="7">sie</option>
                <option value="8">wrz</option>
                <option value="9">paź</option>
                <option value="10">lis</option>
                <option value="11">gru</option>
            </select>
            <select defaultValue={currentYear} className="w-[123px] h-[34px] border rounded-md" id="year" onChange={setLastDayOfMonth} name="year">
                {Array.from({length: currentYear - 1900 + 1}, (_, index) => (
                    <option key={index} value={1900 + index}>
                        {1900 + index}
                    </option>
                ))}
            </select>
        </div>
    )
}