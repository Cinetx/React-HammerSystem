import React, {useEffect} from 'react';
import Flex from 'components/shared-components/Flex'
import {useDispatch, useSelector} from "react-redux";
import {getIsSelectedUserLoaded, getSelectedUser} from "../../../../../redux/selectors/User";
import {fetchSelectedUser} from "../../../../../redux/actions";
import UserForm from "./UserForm";

function EditProfile({match: {params}}) {
    const {id} = params
    const dispatch = useDispatch();
    const selectedUser = useSelector(getSelectedUser);
    const isSelectedUserLoaded = useSelector(getIsSelectedUserLoaded)
    useEffect(() => {
        dispatch(fetchSelectedUser(id))
    }, [isSelectedUserLoaded])

    return (
        <>
            <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
                <div className="ml-md-3 mt-md-0 mt-3">
                </div>
            </Flex>
            <div className="mt-4">
                {isSelectedUserLoaded ? <UserForm id={id} isDataLoaded={isSelectedUserLoaded} selectedUser={selectedUser} /> : ''}
            </div>
        </>
    )
}
export default EditProfile;