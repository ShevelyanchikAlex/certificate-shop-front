import React from 'react';
import ActionButton from "./ActionButton";

const UsersTable = () => {
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
            <tr>
                <td>0</td>
                <td>Alex</td>
                <td>shevelyan@gmail.com</td>
                <td>USER</td>
                <td>ACTIVE</td>
                <td>
                    <div className={'action-container'}>
                        <ActionButton buttonsClassName={'view-btn'} name={'View'}/>
                        <ActionButton buttonsClassName={'edit-btn'} name={'Edit'}/>
                        <ActionButton buttonsClassName={'delete-btn'} name={'Delete'}/>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    );
};

export default UsersTable;