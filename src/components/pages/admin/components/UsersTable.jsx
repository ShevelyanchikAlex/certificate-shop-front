import React, {useEffect} from 'react';
import UserService from "../../../../service/UserService";
import SearchBox from "./SearchBox";
import {useDispatch, useSelector} from "react-redux";
import {setFilteredUsers, setUsers} from "../../../../store/admin/AdminAction";
import PaginationComponent from "../../certificates/components/PaginationComponent";
import {setPageQtyWithParams} from "../../../../store/pagination/PaginationAction";

const UsersTable = () => {
    const users = useSelector(state => state.adminData.users);
    const filteredUsers = useSelector(state => state.adminData.filteredUsers);
    const searchTerm = useSelector(state => state.adminData.searchTerm);
    const selectedOpinion = useSelector(state => state.adminData.selectedOpinion);
    const usersOpinions = useSelector(state => state.adminData.usersOpinions);
    const page = useSelector(state => state.paginationData.page);
    const size = useSelector(state => state.paginationData.size);
    const dispatch = useDispatch();

    useEffect(() => {
        UserService.getAllUsers(page, size)
            .then(response => {
                dispatch(setUsers(response.data._embedded.users));
                dispatch(setFilteredUsers(searchTerm, users, selectedOpinion));
            })
            .catch(e => console.log(e));
    }, [page, size]);

    useEffect(() => {
        UserService.getCount()
            .then(count => dispatch(setPageQtyWithParams(count.data, size)))
            .catch(e => console.log(e));
    }, [size]);

    useEffect(() => {
        dispatch(setFilteredUsers(searchTerm, users, selectedOpinion));
    }, [users, searchTerm]);

    return (
        <div>
            <div className={'table-container-header'}>
                <SearchBox opinions={usersOpinions}/>
            </div>
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
                {filteredUsers.map(user =>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>{user.status}</td>
                        <td>
                            <label className={'none-label'}>None</label>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            <PaginationComponent/>
        </div>
    );
};

export default UsersTable;