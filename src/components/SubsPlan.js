import React from 'react';
import payment from "../images/payment.png";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SubsPlan = () => {
  return (
    <div className='subsDiv'>
        <div className="top">
            <div className='topDiv'>
                <div className="number">1</div>
                <div>Sign Up</div>
            </div>
            <div className='topDiv'>
                <div className="number">2</div>
                <div>Subscribe</div>
            </div>
        </div>
        <h3>Select your subscription plan</h3>
        <div className="subsBox"></div>
        <div className="subsBox"></div>
        <div className="subsBox"></div>
        <div className="subsBox"></div>
        <div className="divider"></div>
        <div className="subsFee">
         Subscription Fee
        </div>
        <div className="subsBox"></div>
        <div className="total">
            Total(Incl. of 18% GST)
        </div>
        <div className="buttonBox">
            <button className='cancelBtn'>CANCEL</button>
            <button className='payBtn'>PROCEED TO PAY</button>
        </div>
        <div className='payImg'>
            <img src={payment} alt="payment"/>
        </div>

    </div>
  )
}

export default SubsPlan;