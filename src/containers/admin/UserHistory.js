import React, {useContext} from 'react'
import HistoryDetails from "./HistoryDetails";
import UserHistoryHeader from './UserHistoryHeader';
import { UserHistoryContext } from '../../context/history';
import  AddUserHistoryModal  from './AddUserHistoryModal';

const UserHistory = (props) => {
    const uid = props.match.params.uid;
    const {modal,toggle} = useContext(UserHistoryContext);

    return (
        <React.Fragment>
            <UserHistoryHeader toggle={toggle} modal={modal} />
            {modal ? <AddUserHistoryModal toggle={toggle} modal={modal} /> : null}
            <HistoryDetails />
        </React.Fragment>
    )
}

export default UserHistory;