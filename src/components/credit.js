import React,{ useState } from 'react'
import DatePicker from 'react-datepicker'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'react-datepicker/dist/react-datepicker.css'

export default function Credit(props){
    const [startDate, setStartDate] = useState(new Date())
    function handleClick(e){
        e.preventDefault()
        alert('You will shortly be taken to the payment gateway. Please wait')
        alert('Your payment has been successful. We truly appreciate your trust with Just A Second. Your order id is ORDIN93784995')
        window.location='/'
    }
    return(
        <div className="container">
            <br/>
            <br/>
            <h3>Credit Card Details</h3>
            <br/>
            <form onSubmit={handleClick}>
                <label>Credit Card Number *</label>
                <input required type="number" min="1000000000000000" maxlength="16" className="form-control" placeholder="1111111111111111"/>
                <label>Valid through (MM/YY) *</label>
                <DatePicker yearDropdownItemNumber={15} scrollableYearDropdown required selected={startDate} onChange={date => setStartDate(date)} minDate={new Date()} dateFormat="MM/yy" showMonthYearPicker showYearDropdown/>
                <br/>
                <label>CVV *</label>
                <input required type="number" min="100" maxLength="3" className="form-control" placeholder="111"/>
                <label>Name on Card *</label>
                <input required type="text" maxLength="50" className="form-control" placeholder="Virat Kohli"/>
                <br/>
                <label>Amount: $ {props.match.params.total}</label>
                <br/>
                <button type="submit" className="btn btn-primary">Pay</button>
            </form>
        </div>
    )
}