import React, {useEffect, useState} from 'react';
import ActionButton from "./ActionButton";
import UserService from "../../../../service/UserService";

const UsersTable = ({page, size}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserService.getAllUsers(page, size)
            .then(response => setUsers(response.data._embedded.users))
            .catch(e => console.log(e));
    }, [page, size]);

    return (
        <table className="table">
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user =>
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.status}</td>
                    <td>
                        <div className={'action-container'}>
                            <ActionButton buttonsClassName={'view-btn'} name={'View'}/>
                        </div>
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default UsersTable;