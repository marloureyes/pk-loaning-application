import React , { useEffect, useState } from 'react';

import firebase from '../firebase';
function useData(){
    const [data, setData] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('data')
            .onSnapshot((snapshot) => {
                const newData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
            setData(newData);
            })
        }
    )

    return data;
}

export default function List(){
    const data = useData();
    return (
        <ul>
            {data.map((items) =>
                <li key={items.id}>
                    <h1>{items.fullName}</h1>
                    <p>{items.contact}</p>
                    <p>{items.amount}</p>
                    <p>{items.deductInterest}</p>
                    <p>{items.paymentMonth}</p>
                    <p>{items.comments}</p>
                    <p>{items.contact}</p>
                </li>
            )}
        </ul>
    )
}