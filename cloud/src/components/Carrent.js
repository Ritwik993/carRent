import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from './firebase';
import './Carrent.css'
import { Link } from 'react-router-dom';



const  Carrent=()=> {
  const [pickupLocation, setPickupLocation] = useState('');
  const [returnLocation, setReturnLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [selectedCar, setSelectedCar] = useState(null);

  const handleSearch = async(pickupLocation,returnLocation,pickupDate,returnDate) => {
 
      await addDoc(collection(db, "users"), {
        pickupLocation,returnLocation,pickupDate,returnDate,selectedCar
      });
  
    
  };

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  return (
    <div>
      <h1>Car Rental</h1>
      <div>
        <label>
          Pickup Location:
          <input
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Return Location:
          <input
            type="text"
            value={returnLocation}
            onChange={(e) => setReturnLocation(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Pickup Date:
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Return Date:
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </label>
      </div>
      <div>
       <Link to='/getdata'> <button onClick={()=>handleSearch(pickupLocation,returnLocation,pickupDate,returnDate,selectedCar)}>Submit</button></Link>
      </div>
      {selectedCar && (
        <div>
          <h2>Selected Car:</h2>
          <p>Make: {selectedCar.make}</p>
          <p>Model: {selectedCar.model}</p>
          <p>Year: {selectedCar.year}</p>
          <p>Price per Day: ${selectedCar.pricePerDay}</p>
        </div>
      )}
      {/* Here you can display a list of available cars based on search criteria */}
      {/* You can also implement a component to display each car and handle selection */}
    </div>
  );
}

export default Carrent;
