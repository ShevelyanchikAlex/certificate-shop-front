import React, {useEffect, useState} from 'react';
import '../../../assets/styles/Admin.css';
import TableContainer from "./components/TableContainer";
import Forbidden from "../Forbidden";
import UserService from "../../../service/UserService";
import LoadingSpinner from "../certificates/components/LoadingSpinner";

const Admin = ({tableName}) => {
    const ADMIN_ROLE = 'ADMIN';

    const [role, setRole] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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
            : ((role && role === ADMIN_ROLE)
                ? <div className={'admin-table-container'}>
                    <TableContainer tableName={tableName}/>
                </div>
                : <Forbidden/>)
    );
};

export default Admin;