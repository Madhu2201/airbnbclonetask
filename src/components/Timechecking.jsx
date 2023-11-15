
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../components/Timechecking.css';
import { GiFlowerPot } from "react-icons/gi";
import { IoWifi } from "react-icons/io5";
import { MdOutlinePool } from "react-icons/md";
import { PiTelevisionSimple } from "react-icons/pi";
import { CiAlarmOff } from "react-icons/ci";
import { TbToolsKitchen3 } from "react-icons/tb";
import { IoCarSport } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";
import { TbAlarmMinus } from "react-icons/tb";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import Bookingpage from './Bookingpage';

const Timechecking = () => {
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [selectedDays, setSelectedDays] = useState(0);
  const [ratePerDay, setRatePerDay] = useState(2600);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showCongratulation, setShowCongratulation] = useState(false);

  const handleCheckinChange = (date) => {
    setCheckinDate(date);
    updateSelectedDays(date, checkoutDate);
  };

  const handleCheckoutChange = (date) => {
    setCheckoutDate(date);
    updateSelectedDays(checkinDate, date);
  };

  const updateSelectedDays = (checkin, checkout) => {
    if (checkin && checkout) {
      const daysDifference = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
      setSelectedDays(daysDifference);
  
      if (daysDifference) {
        const amount = daysDifference * ratePerDay;
        setTotalAmount(amount);
      } else {
        setTotalAmount(0);
      }
  
    } else {
      setSelectedDays(0);
      setTotalAmount(0);
    }
  };
  
  const handleContinue = () => {
    if (selectedDays > 0) {
  
      setShowCongratulation(true); 
  
      setTimeout(() => {
        history.push('/checkout'); 
      }, 2000); 
  
    } else {
      alert('Please select dates before continuing.');
    }
  };
  return (
    <div>
    <div className='tableborder'>

      <table className="table">
        <thead>
          <tr>
            <th>Check-in Date:</th>
            <th>Check-out Date:</th>
          </tr>
          <tr>
            <td>
              
              <DatePicker
                className='dateborder'
                placeholderText='From Date'
                selected={checkinDate}
                onChange={handleCheckinChange}
                selectsStart
                startDate={checkinDate}
                endDate={checkoutDate}
              />
            </td>
            <td>
              <DatePicker
                className='dateborder'
                placeholderText='To Date'
                selected={checkoutDate}
                onChange={handleCheckoutChange}
                selectsEnd
                startDate={checkinDate}
                endDate={checkoutDate}
                minDate={checkinDate}
              />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            
            <td colSpan="2">
            Selected Dates:
              {checkinDate && checkoutDate && (
                <p>
                   {checkinDate.toDateString()} to {checkoutDate.toDateString()} ({selectedDays} days)
                </p>
              )}
            </td>
          </tr>
        </tbody>
      <tr>
        <td>
      <p>Rate per day: ${ratePerDay}</p>Days:{selectedDays}
      
     
     </td>
     <td>
     Total Amount:{totalAmount > 0 && (
        <div>
          <p> ${totalAmount}</p>
        </div>
      )}
      </td>

      </tr>
      <tr>
        <td colSpan="2">
        <Link to='/checkout' >

        <button onChange={handleContinue} className='continuebutton' disabled={selectedDays === 0} >Continue</button>
        </Link>

        </td>
      </tr>
      </table>
    </div>
      <div className='icontext'>
<div><GiFlowerPot/> Garden view</div>
<div><IoWifi/> Wifi</div>
<div><MdOutlinePool/> Pool</div>
<div><PiTelevisionSimple/>TV</div>
<div><CiAlarmOff/>Carbon monoxide alarm</div>
<div><TbToolsKitchen3/> Kitchen</div>
<div><IoCarSport/> Free Parking on premises</div>
<div><MdOutlinePets/> Pets allowed</div>
<div><VscDeviceCameraVideo/> Security cameras on property</div>
<div><TbAlarmMinus/> Smoke alarm</div>

</div>
    </div>
  );
};

export default Timechecking;
