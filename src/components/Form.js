import React, {useState} from 'react'; 
import firebase from '../firebase';
import { Form as FormLayout, Input, DatePicker, Radio, Select, Button, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

function Form(){
    const [ form ] = FormLayout.useForm();
    const [ loading, setLoading] = useState(false);
    const [ error, setError] = useState('');

    const openNotification = () => {
        notification.open({
          message: 'List Added Confirm',
          description:
            'You have added a list.',
          icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
      };

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 13 },
      };
      const tailLayout = {
        wrapperCol: { offset: 16, span: 13 },
      }

    function onFinish(e){
        setLoading([true])
        const { fullName, address, contact, date, amount, deductInterest, months, comments} = e;
        const status = 'Ongoing';
        const dateSubmit = date.format('YYYY-MM-DD')
        firebase
            .firestore()
            .collection('data')
            .add({
                fullName,
                contact,
                address,
                dateSubmit,
                amount,
                deductInterest,
                months,
                comments,
                status
            }).then(() =>{
                setLoading(false);
                openNotification();
            }).catch(err =>{
                setError(err);
            })
        form.resetFields();
    }

    return (
        <>
            <FormLayout form={form} {...layout} onFinish={onFinish}>
                <p>{error}</p>
                <FormLayout.Item name="fullName" label="Fullname" rules={[{ required: true, message: 'Please input Fullname!' }]}>
                    <Input />
                </FormLayout.Item>
                <FormLayout.Item name="contact" label ="Contact" rules={[{ required: true, message: 'Please input Contact!' }]}> 
                    <Input type="number"/>
                </FormLayout.Item>
                <FormLayout.Item name="address" label ="Address" rules={[{ required: true, message: 'Please input Address!' }]}> 
                    <Input />
                </FormLayout.Item>
                <FormLayout.Item name="date" label="Date" rules={[{ required: true, message: 'Please input a date!' }]}>
                    <DatePicker />
                </FormLayout.Item>
                <FormLayout.Item name="amount" label="Amount" rules={[{ required: true, message: 'Please input Amount!' }]}>
                    <Input type="number"/>
                </FormLayout.Item>
        
                <FormLayout.Item name="deductInterest" label="Deduct Interest?" rules={[{ required: true, message: 'Please insert a value!' }]}>
                    <Radio.Group>
                        <Radio value="Yes">Yes</Radio>

                        <Radio value="No">No</Radio>
                    </Radio.Group>
                </FormLayout.Item>
                <FormLayout.Item name="months" label="Months"  rules={[{ required: true, message: 'Please pick how many months!' }]}>
                    <Select>
                        <Select.Option key="1" value="1">
                            1 Month
                        </Select.Option>
                        <Select.Option key="2" value="2">
                            2 Months
                        </Select.Option >
                        <Select.Option key="3" value="3">
                            3 Months
                        </Select.Option>
                        <Select.Option key="4" value="4">
                            4 Months
                        </Select.Option>
                        <Select.Option key="5" value="5">
                            5 Months
                        </Select.Option>
                    </Select>
                </FormLayout.Item>
        
                <FormLayout.Item name="comments" label="Other thoughts and comments">
                    <Input.TextArea />
                </FormLayout.Item>
                <FormLayout.Item {...tailLayout}>
                    <Button htmlType="submit" type="primary" loading={loading[0]}>Submit</Button>
                </FormLayout.Item>
            </FormLayout>
        </>
    )
}

export default Form;