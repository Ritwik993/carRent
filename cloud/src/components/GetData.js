import React, { useState } from 'react';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from './firebase';
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import "./GetData.css";


const GetData = () => {
    const [items,setItems]=useState([]);
    const [updateLocation,setUpdateLocation]=useState('');
const handleDisplay=async ()=>{
const querySnapshot = await getDocs(collection(db, "users"));

setItems(querySnapshot.docs.map((doc)=>({...doc.data(),id:doc.id})))
 }
 const updateUser = async (id, location) => {
  const userDoc = doc(db, "users", id);
  const newField = { returnLocation:location };
  await updateDoc(userDoc, newField);
};

const deleteUser = async (id) => {
  const userDoc = doc(db, "users", id);
  await deleteDoc(userDoc);
};

  return (
    <div>
      <button onClick={()=>handleDisplay()}>Get Users</button>
      {items&&<div>
        {items.map((item)=>{
            return (<div>
                <h1>pickupDate:{item.pickupDate}</h1>
                <h1>pickupLocation:{item.pickupLocation}</h1>
                <h1>returnDate:{item.returnDate}</h1>
                <h1>returnLocation:{item.returnLocation}</h1>
                <div className="flex">
                  <input
                    className="user-input"
                    type="text"
                    onChange={(e) => setUpdateLocation(e.target.value)}
                  />
                  <button
                    className="user-button"
                    onClick={() => updateUser(item.id,updateLocation)}
                  >
                    Update Location
                  </button>
                </div>

                <button className="user-delete" onClick={() => deleteUser(item.id)}>
                  Delete User
                </button>
              </div>
               )

        })}
        </div>}
    </div>
  );
}

export default GetData;
