import React, { useState, createContext } from "react";
import { auth, db, admin } from "../firebase/firebase";
import { MedNames, types } from "../containers/admin/MedNames";
import UserDetails from "../containers/admin/UserDetails";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [userMedCount, setUserMedCount] = useState({ ...MedNames });


  const getUserDetails = (id) => {
    const Medicines = {...MedNames};
    setLoading(true);
    db.collection("sheets")
      .doc(id)
      .get()
      .then((data) => {
        let details = data.data().user;
        data.data().data.map((ques, index) => {

          let quesNum = ques["Sr. No"];
          if (ques["Y"] === "Y") {
            if (index >= 0 && index <= 2) {
              Medicines["Aspen"] += 1;
              types["Fear"] += 1; 
            } else if (index >= 3 && index <= 5) {
              Medicines["Mimulus"] += 1;
              types["Fear"] += 1; 

            } else if (index >= 6 && index <= 8) {
              Medicines["CherryPlum"] += 1;
              types["Fear"] += 1; 

            } else if (index >= 9 && index <= 11) {
              Medicines["RedchestNut"] += 1;
              types["Fear"] += 1; 

            } else if (index >= 12 && index <= 14) {
              Medicines["RockRose"] += 1;
              types["Fear"] += 1; 

            } else if (index >= 15 && index <= 17) {
              Medicines["Cerato"] += 1;
              types["Uncertainty"] += 1; 

            } else if (index >= 18 && index <= 20) {
              Medicines["Scleranthus"] += 1;
              types["Uncertainty"] += 1; 

            } else if (index >= 21 && index <= 23) {
              Medicines["WildOat"] += 1;
              types["Uncertainty"] += 1; 

            } else if (index >= 24 && index <= 26) {
              Medicines["Larch"] += 1;
              types["DespondencyAndDespair"] += 1; 

            } else if (index >= 27 && index <= 29) {
              Medicines["Hornbeam"] += 1;
              types["Uncertainty"] += 1; 

            } else if (index >= 30 && index <= 32) {
              Medicines["Clemantis"] += 1;
              types["InsufficientInterestInPresent"] += 1; 

            } else if (index >= 33 && index <= 35) {
              Medicines["HoneySuckle"] += 1;
              types["InsufficientInterestInPresent"] += 1; 

            } else if (index >= 36 && index <= 38) {
              Medicines["WildRose"] += 1;
              types["InsufficientInterestInPresent"] += 1; 

            } else if (index >= 39 && index <= 41) {
              Medicines["WhiteChestnut"] += 1;
              types["InsufficientInterestInPresent"] += 1; 

            } else if (index >= 42 && index <= 44) {
              Medicines["Chest NutBud"] += 1;
              types["InsufficientInterestInPresent"] += 1; 

            } else if (index >= 45 && index <= 47) {
              Medicines["Olive"] += 1;
              types["InsufficientInterestInPresent"] += 1; 

            } else if (index >= 48 && index <= 50) {
              Medicines["Water Violet"] += 1;
              types["Lonliness"] += 1; 

            } else if (index >= 51 && index <= 53) {
              Medicines["Impatiens"] += 1;
              types["Lonliness"] += 1; 

            } else if (index >= 54 && index <= 56) {
              Medicines["Heather"] += 1;
              types["Lonliness"] += 1; 

            } else if (index >= 57 && index <= 59) {
              Medicines["Agrimony"] += 1;
              types["Sensitivity"] += 1; 

            } else if (index >= 60 && index <= 62) {
              Medicines["Centaury"] += 1;
              types["Sensitivity"] += 1; 

            } else if (index >= 63 && index <= 65) {
              Medicines["Walnut"] += 1;
              types["Sensitivity"] += 1; 

            } else if (index >= 66 && index <= 68) {
              Medicines["Holly"] += 1;
              types["Sensitivity"] += 1; 

            } else if (index >= 69 && index <= 71) {
              Medicines["Pine"] += 1;
              types["DespondencyAndDespair"] += 1; 

            } else if (index >= 72 && index <= 74) {
              Medicines["Elm"] += 1;
              types["DespondencyAndDespair"] += 1; 

            } else if (index >= 75 && index <= 77) {
              Medicines["Star of Beth"] += 1;
              types["DespondencyAndDespair"] += 1; 

            } else if (index >= 78 && index <= 80) {
              Medicines["Sweet Chest Nut"] += 1;
              types["DespondencyAndDespair"] += 1; 

            } else if (index >= 81 && index <= 83) {
              Medicines["Gorse"] += 1;
              types["Uncertainty"] += 1; 

            } else if (index >= 84 && index <= 86) {
              Medicines["Mustard"] += 1;
              types["InsufficientInterestInPresent"] += 1; 

            } else if (index >= 87 && index <= 89) {
              Medicines["Gentian"] += 1;
              types["Uncertainty"] += 1; 

            } else if (index >= 90 && index <= 92) {
              Medicines["Oak"] += 1;
              types["DespondencyAndDespair"] += 1; 

            } else if (index >= 93 && index <= 95) {
              Medicines["Willow"] += 1;
              types["DespondencyAndDespair"] += 1; 

            } else if (index >= 96 && index <= 100) {
              Medicines["CrabApple"] += 1;
              types["DespondencyAndDespair"] += 1; 

            } else if (index >= 101 && index <= 103) {
              Medicines["Chicory"] += 1;
              types["OverCare"] += 1; 

            } else if (index >= 104 && index <= 106) {
              Medicines["Beech"] += 1;
              types["OverCare"] += 1; 

            } else if (index >= 107 && index <= 109) {
              Medicines["Vervain"] += 1;
              types["OverCare"] += 1; 

            } else if (index >= 110 && index <= 112) {
              Medicines["RockWater"] += 1;
              types["OverCare"] += 1; 

            } else if (index >= 113 && index <= 115) {
              Medicines["Vine"] += 1;
              types["OverCare"] += 1; 

            } else {
            }
          }
        });
        //Sorting logic
      //   const sortable = [];
      //   for(var med in Medicines){
      //     sortable.push([med, userMedCount[med]]);
      //   }
      //   sortable.sort(function(a, b) {
      //     return b[1] - a[1];
      // })
      // const meds = {}
      // sortable.map(ele=>{
      //   meds[ele[0]] = ele[1];
      // });
      // console.log(meds)
        setUserMedCount({ ...Medicines });
        // console.log(types);
        // settype({...types});
        setUserDetails({...details});
        setLoading(false);
      }).catch(err=>{
        console.log(err);
      })
  };

  const getUsers = async () => {
    let data = {};
    const usersData = [];
    // console.log("Loading Starts");
    setLoading(true);
    db.collection("sheets")
      .get()
      .then(async (snapshot) => {
        snapshot.docs.forEach((doc) => {
          data = {
            ...doc.data(),
            uid: doc.id,
          };
          usersData.push(data);
        });
        // console.log("Users data fetching done");
        // console.log(usersData);
        setUsers(usersData);
        setLoading(false);
        // console.log("Loading Ends");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <AdminContext.Provider
        value={{
          users,
          getUsers,
          loading,
          getUserDetails,
          userDetails,
          userMedCount,
        }}
      >
        {props.children}
      </AdminContext.Provider>
    </div>
  );
};

export default AdminContextProvider;
