import React , { useEffect, useState } from 'react';
import firebase from '../firebase';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function useData(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        const unsubcribe = firebase
            .firestore()
            .collection('data')
            .onSnapshot((snapshot) => {
                const newData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
            setLoading(false)
            setData(newData);
            })

            return () => unsubcribe()
        },[])
    return {data, loading};
}

function List() {
    const data = useData().data;
    const loading = useData().loading;
    return (
        <>
        <ul>
            {loading ? <Loader type="ThreeDots" /> : null}
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
        </>
    )
}

export default List;