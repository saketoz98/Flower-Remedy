import React, { useState, createContext } from "react";
import { provider, db, auth } from "../firebase/firebase";

export const UserHistoryContext = createContext();

const UserHistoryProvider = (props) => {
  const [userHistory, setuserHistory] = useState([]);
  const [loading, setloading] = useState(false);
  const [modal, setmodal] = useState(false);

  const toggle = () => {
    setmodal(!modal);
  };

  const addUserHistory = (meds, id) => {
    db.collection("history")
      .add({
        uid: id,
        history: [...meds],
        createdAt: Date.now(),
      })
      .then((res) => {
        // console.log("Added");
        setmodal(!modal);
      });
  };

  const getHistoryofUser = (id) => {
    // console.log(id);
    // console.log(userHistory);
    setuserHistory([]);
    setloading(true);
    db.collection("history")
      .where("uid", "==", id)
      .onSnapshot((res) => {
        if (res.docs.length > 0) {
        //   console.log(res.docs[0].data());
          const docs = res.docs;
          const historyRecords = [];
          docs.map((record) => {
            historyRecords.push(record.data());
            // console.log(record.data());
          });
          historyRecords.sort((a,b)=>b.createdAt-a.createdAt);
          setuserHistory([...historyRecords]);
          setloading(false);

        }else{
            // console.log("Inside else");
            setloading(false);
        }

      });
  };

  return (
    <div>
      <UserHistoryContext.Provider
        value={{ addUserHistory, getHistoryofUser, userHistory, modal, toggle }}
      >
        {props.children}
      </UserHistoryContext.Provider>
    </div>
  );
};

export default UserHistoryProvider;
