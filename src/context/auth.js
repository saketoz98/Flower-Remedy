import React, { useState, createContext } from "react";
import {provider, auth} from '../firebase/firebase';

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [uid, setUid] = useState(null);
  const [error, seterror] = useState('');
  const [modal, setmodal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const toggle = () => {
    setmodal(!modal);
  };

  const login =  ()=>{
    auth.signInWithPopup(provider).then(function(result) {
        console.log(result);
        result.user.getIdTokenResult().then(res=>{
          if(res.claims.admin){
            console.log(res.claims.admin);
            setIsAdmin(res.claims.admin);
          }
          
          setUid(result.user.uid);
          toggle();
        })
        
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(error);
      });
  }
  const logout = ()=>{
    auth.signOut().then(function() {
        console.log("Logout done");
        console.log(uid);
        setUid(null);
        setIsAdmin(false);
      }).catch(function(error) {
        console.log("Error");
      });
  }
  return (
    <div>
      <AuthContext.Provider value={{ uid, modal , login , toggle, logout, isAdmin}}>
        {props.children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
