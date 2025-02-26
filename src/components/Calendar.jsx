import { useState, useEffect } from "react";
import clsx from 'clsx';

import WidgetHeading  from "./WidgetHeading"

export default function Calendar() {
    const currentDate = new Date();
    const [month, setMonth] = useState(currentDate.getMonth());
    const [year, setYear] = useState(currentDate.getFullYear());
    const [days, setDays] = useState([]);
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    useEffect(() => {
        generateCalendar(month, year);
    }, [month, year]);

    const isLeapYear = (year) =>
        (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
        (year % 100 === 0 && year % 400 === 0);
    
    const getFebDays = (year) => (isLeapYear(year) ? 29 : 28)

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    const generateCalendar = (month, year) => {
        let daysOfMonth = [
          31,
          getFebDays(year),
          31,
          30,
          31,
          30,
          31,
          31,
          30,
          31,
          30,
          31,
        ];
        let firstDay = new Date(year, month).getDay();
    
        let daysArray = [];
        for (let i = 0; i < daysOfMonth[month] + firstDay; i++) {
          if (i >= firstDay) {
            daysArray.push({
              date: i - firstDay + 1,
              isToday:
                i - firstDay + 1 === currentDate.getDate() &&
                year === currentDate.getFullYear() &&
                month === currentDate.getMonth(),
            });
          } else {
            daysArray.push(null); // Empty slots before the first day
          }
        }
        setDays(daysArray);
    };
    
    
    return (
        <div className="widget">
            <WidgetHeading name="CALENDAR" />

            <p className="text-center font-semibold"> <span>{monthNames[month]}</span>  <span>{year}</span></p>
            <div className="grid grid-cols-7 font-light">
                {daysOfWeek.map(day => <div key={day} className="text-center">{day}</div>)}
            </div>
            
            <div className="grid grid-cols-7">
            {days.map((day, index) =>
                day ? (
                    <div key={index} className={clsx("text-center", {"bg-secondary rounded-full" : day.isToday})}>
                        {day.date}
                    </div>
                ) : (
                    <div key={index} className="empty"></div>
                )
            )}
            </div>
        </div>
    )
}