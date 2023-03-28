import React, { useEffect, useState } from 'react';


//date
const currentDate = new Date();

const date1 = new Date("2023-03-27");
const date2 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() + 1);
const date3 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() + 2);
const date4 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() + 3);
const date5 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() + 4);




const WorkingDays = {
    day1: date1,
    day2: date2,
    day3: date3,
    day4: date4,
    day5: date5
}


//time
const morningtime = ['8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:30 AM'];
const afternoontime = ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'];
const eveningtime = ['7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM',]

const Time = [morningtime, afternoontime, eveningtime]



const Checkbox = Time.map((e, id) => {
    return (
        <div key={id}>
            {e.map((e1, id1) => {
                return (
                    < div className="form-check form-check-inline" key={id1} >
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">{e1}</label>
                    </div >
                )
            })}
        </div>

    )
})













const Calender = () => {
    const [currentDate1, setCurrent1] = useState(currentDate);
    const [date, setDate] = useState(date1);
    const [check, setCheck] = useState(Checkbox);
    const [day, setDay] = useState(WorkingDays);


    const btnLastWeek = () => {
        const preDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);

        setDate(preDate);


        setDay({
            ...day,
            day1: date,
            day2: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1),
            day3: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 2),
            day4: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 3),
            day5: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 4),
        });


    }

    const btnNextWeek = () => {
        const postDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);

        setDate(postDate);




    }
    useEffect(() => {
        setDay({
            ...day,
            day1: date,
            day2: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1),
            day3: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 2),
            day4: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 3),
            day5: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 4),
        });
    }, [date])







    return (
        <div className='container-fluid p-3'>
            <div className='d-flex justify-content-between'>
                <button type="button" class="btn btn-light" onClick={() => btnLastWeek()}>Last Week</button>
                <p>{currentDate1.getDate()}/{currentDate1.getMonth() + 1}/{currentDate1.getFullYear()}</p>
                <button type="button" class="btn btn-light" onClick={() => btnNextWeek()}>Next Week</button>


            </div>

            <div className="form-group my-3 ">
                <label htmlFor="exampleFormControlSelect1">TimeZone:</label>
                <select className="form-control" id="exampleFormControlSelect1">
                    <option>India Standard Time</option>
                    <option>[UTC-5]European Standard Time</option>

                </select>
            </div>

            <table className="table table-hover  my-3 ">

                <tbody>
                    <tr>
                        <th scope="row" className='table-active'>Monday <br></br>{day.day1.getDate()}/{day.day1.getMonth() + 1}/{day.day1.getFullYear()}</th>
                        {
                            (currentDate1 <= day.day1) ?
                                <td>

                                    {check}
                                </td> :
                                <td>
                                    Past
                                </td>
                        }

                    </tr>
                    <tr>
                        <th scope="row" className='table-active'>Tuesday <br></br>{day.day2.getDate()}/{day.day2.getMonth() + 1}/{day.day2.getFullYear()}</th>
                        {
                            (currentDate1 <= day.day2) ?
                                <td>

                                    {check}
                                </td> :
                                <td>
                                    Past
                                </td>
                        }

                    </tr>
                    <tr>
                        <th scope="row" className='table-active'>Wednesday <br></br>{day.day3.getDate()}/{day.day3.getMonth() + 1}/{day.day3.getFullYear()}</th>
                        {
                            (currentDate1 <= day.day3) ?
                                <td>

                                    {check}
                                </td> :
                                <td>
                                    Past
                                </td>
                        }

                    </tr>
                    <tr>
                        <th scope="row" className='table-active'>Thursday <br></br>{day.day4.getDate()}/{day.day4.getMonth() + 1}/{day.day4.getFullYear()}</th>
                        {
                            (currentDate1 <= day.day4) ?
                                <td>

                                    {check}
                                </td> :
                                <td>
                                    Past
                                </td>
                        }

                    </tr>
                    <tr>
                        <th scope="row" className='table-active'>Friday <br></br>{day.day5.getDate()}/{day.day5.getMonth() + 1}/{day.day5.getFullYear()}</th>
                        {
                            (currentDate1 <= day.day5) ?
                                <td>

                                    {check}
                                </td> :
                                <td>
                                    Past
                                </td>
                        }

                    </tr>


                </tbody>
            </table>



        </div >

    )
}



export default Calender;