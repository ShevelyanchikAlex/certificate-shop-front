import React from 'react';
import ActionButton from "./ActionButton";

const AdminTable = () => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Title</th>
                <th>Tags</th>
                <th>Description</th>
                <th>Price</th>
                <th>Last Update</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Certificate Name</td>
                <td>#cool, #good, #fine</td>
                <td>Certificate Description...</td>
                <td>$13423.3</td>
                <td>2022-05-12 12:34</td>
                <td>
                    <div className={'action-container'}>
                        <ActionButton buttonsClassName={'view-btn'} name={'View'}/>
                        <ActionButton buttonsClassName={'edit-btn'} name={'Edit'}/>
                        <ActionButton buttonsClassName={'delete-btn'} name={'Delete'}/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Certificate Name</td>
                <td>#cool, #good, #fine</td>
                <td>Certificate Description...</td>
                <td>$13423.3</td>
                <td>2022-05-12 12:34</td>
                <td>
                    <div className={'action-container'}>
                        <ActionButton buttonsClassName={'view-btn'} name={'View'}/>
                        <ActionButton buttonsClassName={'edit-btn'} name={'Edit'}/>
                        <ActionButton buttonsClassName={'delete-btn'} name={'Delete'}/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Certificate Name</td>
                <td>#cool, #good, #fine</td>
                <td>Certificate DescriptioCertificate DescriptioCertificate DescriptioCertificate DescriptioCertificate Description...</td>
                <td>$13423.3</td>
                <td>2022-05-12 12:34</td>
                <td>
                    <div className={'action-container'}>
                        <ActionButton buttonsClassName={'view-btn'} name={'View'}/>
                        <ActionButton buttonsClassName={'edit-btn'} name={'Edit'}/>
                        <ActionButton buttonsClassName={'delete-btn'} name={'Delete'}/>
                    </div>
                </td>
            </tr>
            <tr className="active-row">
                <td>Certificate Name</td>
                <td>#cool, #good, #fine</td>
                <td>Certificate Description...</td>
                <td>$13423.3</td>
                <td>2022-05-12 12:34</td>
                <td>
                    <div className={'action-container'}>
                        <ActionButton buttonsClassName={'view-btn'} name={'View'}/>
                        <ActionButton buttonsClassName={'edit-btn'} name={'Edit'}/>
                        <ActionButton buttonsClassName={'delete-btn'} name={'Delete'}/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Certificate Name</td>
                <td>#cool, #good, #fine</td>
                <td>Certificate Description...</td>
                <td>$13423.3</td>
                <td>2022-05-12 12:34</td>
                <td>
                    <div className={'action-container'}>
                        <ActionButton buttonsClassName={'view-btn'} name={'View'}/>
                        <ActionButton buttonsClassName={'edit-btn'} name={'Edit'}/>
                        <ActionButton buttonsClassName={'delete-btn'} name={'Delete'}/>
                    </div>
                </td>
            </tr>

            <tr>
                <td>Certificate Name</td>
                <td>#cool, #good, #fine</td>
                <td>Certificate Description...</td>
                <td>$13423.3</td>
                <td>2022-05-12 12:34</td>
                <td>
                    <div className={'action-container'}>
                        <ActionButton buttonsClassName={'view-btn'} name={'View'}/>
                        <ActionButton buttonsClassName={'edit-btn'} name={'Edit'}/>
                        <ActionButton buttonsClassName={'delete-btn'} name={'Delete'}/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Certificate Name</td>
                <td>#cool, #good, #fine</td>
                <td>Certificate Description...</td>
                <td>$13423.3</td>
                <td>2022-05-12 12:34</td>
                <td>
                    <div className={'action-container'}>
                        <ActionButton buttonsClassName={'view-btn'} name={'View'}/>
                        <ActionButton buttonsClassName={'edit-btn'} name={'Edit'}/>
                        <ActionButton buttonsClassName={'delete-btn'} name={'Delete'}/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Certificate Name</td>
                <td>#cool, #good, #fine</td>
                <td>Certificate Description...</td>
                <td>$13423.3</td>
                <td>2022-05-12 12:34</td>
                <td>
                    <div className={'action-container'}>
                        <ActionButton buttonsClassName={'view-btn'} name={'View'}/>
                        <ActionButton buttonsClassName={'edit-btn'} name={'Edit'}/>
                        <ActionButton buttonsClassName={'delete-btn'} name={'Delete'}/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Certificate Name</td>
                <td>#cool, #good, #fine</td>
                <td>Certificate Description...</td>
                <td>$13423.3</td>
                <td>2022-05-12 12:34</td>
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

export default AdminTable;