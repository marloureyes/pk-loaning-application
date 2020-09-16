import React, { useState } from 'react'; 
import firebase from '../firebase';

export default function Form(){
    const [fullName, setFullName] = useState('');
    const [contact, setContact] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [deductInterest, setDeductInterest] = useState(null);
    const [paymentMonth, setPaymentMonth] = useState('');
    const [comments, setComments] = useState('');

    function onSubmit(e){
        e.preventDefault();
        firebase
            .firestore()
            .collection('data')
            .add({
                fullName,
                contact,
                date,
                amount,
                deductInterest,
                paymentMonth,
                comments
            })
            .then(() => {
                setFullName('');
                setContact('');
                setAmount('');
                setDeductInterest('');
                setPaymentMonth('');
                setComments('');
            })
    }

    return (
        <div>
            <form className="loan-form" onSubmit={onSubmit}>
            <div className="name">
                <label htmlFor="fullName">Full Name:</label>
                <input value={fullName} name="fullName" onChange={e => setFullName(e.currentTarget.value)} type="text" required />
            </div>
            <div className="contact"> 
                <label htmlFor="phone">Contact</label>
                <input type="number"  min-length="9" id="phone" name="phone" value={contact} onChange={e => setContact(e.currentTarget.value)}/>
            </div>
    
            <div className="date">
                <label htmlFor="date">Date:</label>
                <input type="date" id="birthday" name="date" value={date} onChange={e => setDate(e.currentTarget.value)}/>
            </div>
    
            <div className="amount">
                <label htmlFor="amount">Amount:</label>
                <input type="number" id="birthday" name="amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/>
            </div>
    
            <div className="deduct-interest">
                <label or="interest">Deduct Interest</label>
                <input type="radio" value={'Yes'} name="yes" checked={deductInterest === 'Yes'} onChange={e => setDeductInterest(e.currentTarget.value)}/>
                <label htmlFor="yes">Yes</label>
                <input type="radio" value={'No'} checked={deductInterest === 'No'} name="no" onChange={e => setDeductInterest(e.currentTarget.value)} />
                <label htmlFor="no">No</label>
            </div>
    

            <div className="payDuration" style={{display: "flex", flexDirection: "column", }}>
                <label>
                    <input type="radio" value="1" checked={paymentMonth === "1"} onChange={e=> setPaymentMonth(e.currentTarget.value)}  />
                1 Month
                </label>
                <label>
                <input type="radio" value="2" checked={paymentMonth === "2"} onChange={e=> setPaymentMonth(e.currentTarget.value)}  />
                2 Month
                </label>
                <label>
                <input type="radio" value="3" checked={paymentMonth === "3"} onChange={e=> setPaymentMonth(e.currentTarget.value)}  />
                3 Month
                </label>
                <label>
                <input type="radio" value="4" checked={paymentMonth === "4"} onChange={e=> setPaymentMonth(e.currentTarget.value)}  />
                4 Month
                </label>
                <label>
                <input type="radio" value="5" checked={paymentMonth === "5"} onChange={e=> setPaymentMonth(e.currentTarget.value)}  />
                5 Month
                </label>
            </div>

    
            <div className="comments">
                <label htmlFor="thoughts">Other thoughts and comments</label>
                <textarea type="textarea" value={comments} onChange={e => setComments(e.currentTarget.value)}></textarea>
            </div>
            <div>
                <button>Submit</button>
            </div>
            </form>
        </div>
    )
}