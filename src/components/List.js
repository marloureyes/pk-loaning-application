import React , { useEffect, useState } from 'react';
import firebase from '../firebase';
import { Form, Table } from 'antd';

// fullName,
// contact,
// dateSubmit,
// amount,
// deductInterest,
// months,
// comments

const columns = [
    {
        title: 'Fullname',
        dataIndex: 'fullName',
        key: 'fullName'
    },
    {
        title: 'Contact',
        dataIndex: 'contact',
        key: 'contact'
    },
    {
        title: 'Date',
        dataIndex: 'dateSubmit',
        key: 'dateSubmit'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount'
    },
    {
        title: 'Deduct Interest?',
        dataIndex: 'deductInterest',
        key: 'deductInterest',
    },
    {
        title: 'Months',
        dataIndex: 'months',
        key: 'months'
    },
    {
        title: 'Comments',
        dataIndex: 'comments',
        key: 'comments'
    }
    {
        title:
    }

]

function useData(){
    const [data, setData] = useState([]);

    useEffect(() => {
        const unsubcribe = firebase
            .firestore()
            .collection('data')
            .onSnapshot((snapshot) => {
                const newData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
            setData(newData);
            })

            return () => unsubcribe()
        },[])
    return {data};
}

function List() {
    const [ form ] = Form.useForm();
    const data = useData().data;
    console.log(data)
    return (
        <>
            <Form form={form} component={false}>
                <Table 
                    columns={columns}
                    dataSource={data}
                />
            </Form>
        </>
    )
}

export default List;