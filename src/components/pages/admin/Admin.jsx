import React, {useEffect, useState} from 'react';
import '../../../assets/styles/Admin.css';
import TableContainer from "./components/TableContainer";
import UserService from "../../../service/UserService";
import Forbidden from "../Forbidden";
import LoadingSpinner from "../certificates/components/LoadingSpinner";

const Admin = () => {
    const ADMIN_ROLE = 'ADMIN';
    const [isLoading, setIsLoading] = useState(false);
    const [role, setRole] = useState('');

    useEffect(() => {
        setIsLoading(true);
        const localStorageEmail = localStorage.getItem("user-email");
        UserService.getUserByEmail(localStorageEmail)
            .then(response => {
                setRole(response.data.role);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, []);

    return (
        isLoading ? <LoadingSpinner/>
            : (role === ADMIN_ROLE
                ? <div className={'admin-table-container'}>
                    <h1 className={'table-container-header'}>Certificates</h1>
                    <TableContainer/>
                </div>
                : <Forbidden/>)
    );
};

export default Admin;