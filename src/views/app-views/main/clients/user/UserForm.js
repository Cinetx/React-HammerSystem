import React, {useEffect, useState} from "react";
import {Button, Col, Form, Input, message, Row} from "antd";
import {ROW_GUTTER} from "../../../../../constants/ThemeConstant";

function UserForm({selectedUser}) {
    const [initialValue, setInitialValue] = useState({
        name: '',
        email: '',
        username: '',
        phone: '',
        website: '',
    })
    const [form] = Form.useForm();

    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        username: '',
        phone: '',
        website: '',
        city: '',
        street: '',
        zipcode: '',
    })

    const {name, email, username, phone, website, address} = selectedUser;
    const {street, city, zipcode} = address;

    const handlerSubmitSuccess = (values) => {
        const key = 'updatable';
        message.loading({content: 'Сохранение...', key});
        setTimeout(() => {
            setFormValue({
                name: values.name,
                email: values.email,
                username: values.username,
                phone: values.phone,
                website: values.website,
                city: values.city,
                street: values.street,
                zipcode: values.zipcode,
            })
            message.success({content: 'Сохранено!', key, duration: 2});
        }, 1000);
    }

    const handlerSubmitError = (value) => {
        const key = 'updatable';
        message.success({content: 'Ошибка!', key, duration: 2});
    }


    useEffect(() => {
        setFormValue({
            name: name,
            email: email,
            username: username,
            phone: phone,
            website: website,
            city: city,
            street: street,
            zipcode: zipcode,
        })

        form.setFieldsValue(formValue)
    }, [selectedUser])

    return (
        <Form
            form={form}
            name="basicInformation"
            layout="vertical"
            initialValues={initialValue}
            onFinish={handlerSubmitSuccess}
            onFinishFailed={handlerSubmitError}
        >
            <Row>
                <Col xs={24} sm={24} md={24} lg={16}>
                    <Row gutter={ROW_GUTTER}>
                        <Col xs={24} sm={24} md={12}>
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your name!',
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12}>
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!'
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{
                                    required: true,
                                    type: 'email',
                                    message: 'Please enter a valid email!'
                                }]}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12}>
                            <Form.Item
                                label="Phone Number"
                                name="phone"
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12}>
                            <Form.Item
                                label="Website"
                                name="website"
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24}>
                            <Form.Item
                                label="Street"
                                name="street"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12}>
                            <Form.Item
                                label="City"
                                name="city"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12}>
                            <Form.Item
                                label="Zip code"
                                name="zipcode"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Button type="primary" htmlType="submit">
                        Save Change
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default UserForm;