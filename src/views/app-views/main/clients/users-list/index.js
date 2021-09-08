import React, {useEffect, useState,} from 'react'
import {Card, Table} from 'antd';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getIsUsersLoaded, getUsersList} from "../../../../../redux/selectors/User";
import {fetchSelectedUser, fetchUsersList} from "../../../../../redux/actions";

function UserList() {
    const [tableColumns, setTableColumns] = useState([
        {
            title: 'User',
            dataIndex: 'name',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Company',
            dataIndex: 'company',
            render: company => (
                <span>{company.name}</span>
            ),

        },
        {
            title: 'WebSite',
            dataIndex: 'website',

        },
    ])

    const dispatch = useDispatch()

    const usersList = useSelector(getUsersList)
    const isDataLoaded = useSelector(getIsUsersLoaded)

    const handlerUsersList = ()=>{
        dispatch(fetchUsersList())
    }

    useEffect(()=>{
        handlerUsersList()
    }, [isDataLoaded])

    const history = useHistory();
    const handleSelectUser = (user) => {
        let path = `user/${user.id}`;
        history.push(path,{params: user})
        dispatch(fetchSelectedUser(user.id))
    }

    return (
        <Card bodyStyle={{'padding': '0px'}}>
            {isDataLoaded ?
                <Table
                onRow={(user)=>{
                    return {
                        onClick: () => {handleSelectUser(user)}
                    }
                }}
                columns={tableColumns}
                dataSource={usersList}
                rowKey='id'
            /> : ''}
        </Card>
    )
}

export default UserList