import React from 'react';
import '../../../../assets/styles/SearchBox.css';
import {useDispatch, useSelector} from "react-redux";
import {searchRecord, selectOpinion} from "../../../../store/admin/AdminAction";

const SearchBox = ({opinions}) => {
    const searchTerm = useSelector(state => state.adminData.searchTerm);
    const dispatch = useDispatch();

    return (
        <div className={'search-box-container'}>
            <div className={'search-box'}>
                <input id={'search-form-input'}
                       className={'search-form-input'}
                       type={'search'}
                       name={'search'}
                       value={searchTerm}
                       onChange={(e) => dispatch(searchRecord(e.target.value))}
                       placeholder={'Search...'}/>
                <select id="dropdown" className={'dropdown'}
                        onChange={(e) => dispatch(selectOpinion(e.target.value))}>
                    {opinions.map(opinion => <option key={opinion} value={opinion}>{opinion}</option>)}
                </select>
            </div>
        </div>
    );
};

export default SearchBox;