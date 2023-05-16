import React, { useState } from "react";
import payment from "../images/payment.png";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import limitedTime from "../images/limitedtime.png";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const SubsPlan = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [price, setPrice] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setPrice(event.target.value);
  };

  return (
    <div className="subsDiv">
      <div className="top">
        <div className="topDiv">
          <div className="number">1</div>
          <div>Sign Up</div>
        </div>
        <div className="topDiv">
          <div className="number">2</div>
          <div>Subscribe</div>
        </div>
      </div>
      <h3>Select your subscription plan</h3>
      <div className="subsBox expired">
        <div className="planInfo">
          <div className="offer">Offer expired</div>
          <div className="subsInfo">
            <div>
              <input
                type="radio"
                id="12"
                name="radio-group"
                value="12"
                checked={selectedOption === "12"}
                onChange={handleOptionChange}
              />
              <label htmlFor="12" className="radio-button">
                <RadioButtonCheckedIcon
                  fontSize="small"
                  sx={{ color: "#bebebe" }}
                />
              </label>
              <span>12 Months Subscription</span>
            </div>
            <div className="price">
              <div className="totalPrice">
                <div>
                  <span> Total</span> <CurrencyRupeeIcon fontSize="smaller" />{" "}
                  99
                </div>
                <div>
                  {" "}
                  <CurrencyRupeeIcon fontSize="smaller" /> 8 /mo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`subsBox ${selectedOption === "179" ? "selected" : ""}`}>
        <div className="planInfo">
          <div className="recommend">Recommended</div>
          <div className="subsInfo">
            <div>
              <input
                type="radio"
                id="179"
                name="radio-group"
                value="179"
                checked={selectedOption === "179"}
                onChange={handleOptionChange}
              />
              <label htmlFor="179" className="radio-button">
                {selectedOption === "179" ? (
                  <CheckCircleIcon fontSize="small" sx={{ color: "#47BA68" }} />
                ) : (
                  <RadioButtonUncheckedIcon
                    fontSize="small"
                    sx={{ color: "#bebebe" }}
                  />
                )}
              </label>
              <span>12 Months Subscription</span>
            </div>
            <div className="price">
              <div className="totalPrice">
                <div>
                  <span> Total</span> <CurrencyRupeeIcon fontSize="smaller" />{" "}
                  179
                </div>
                <div>
                  {" "}
                  <CurrencyRupeeIcon fontSize="smaller" /> 15 /mo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`subsBox ${selectedOption === "149" ? "selected" : ""}`}>
        <div className="planInfo">
          <div className="blank"></div>
          <div className="subsInfo">
            <div>
              {" "}
              <input
                type="radio"
                id="149"
                name="radio-group"
                value="149"
                checked={selectedOption === "149"}
                onChange={handleOptionChange}
              />
              <label htmlFor="149" className="radio-button">
                {selectedOption === "149" ? (
                  <CheckCircleIcon fontSize="small" sx={{ color: "#47BA68" }} />
                ) : (
                  <RadioButtonUncheckedIcon
                    fontSize="small"
                    sx={{ color: "#bebebe" }}
                  />
                )}
              </label>
              <span>6 Months Subscription</span>
            </div>
            <div className="price">
              <div className="totalPrice">
                <div>
                  <span> Total</span> <CurrencyRupeeIcon fontSize="smaller" />{" "}
                  149
                </div>
                <div>
                  {" "}
                  <CurrencyRupeeIcon fontSize="smaller" /> 25 /mo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`subsBox ${selectedOption === "99" ? "selected" : ""}`}>
        <div className="planInfo">
          <div className="blank"></div>
          <div className="subsInfo">
            <div>
              <input
                type="radio"
                id="99"
                name="radio-group"
                value="99"
                checked={selectedOption === "99"}
                onChange={handleOptionChange}
              />
              <label htmlFor="99" className="radio-button">
                {selectedOption === "99" ? (
                  <CheckCircleIcon fontSize="small" sx={{ color: "#47BA68" }} />
                ) : (
                  <RadioButtonUncheckedIcon
                    fontSize="small"
                    sx={{ color: "#bebebe" }}
                  />
                )}
              </label>
              <span>3 Months Subscription</span>
            </div>
            <div className="price">
              <div className="totalPrice">
                <div>
                  <span> Total</span> <CurrencyRupeeIcon fontSize="smaller" />
                  99
                </div>
                <div>
                  <CurrencyRupeeIcon fontSize="smaller" /> 33 /mo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="subsFee">
        <div>Subscription Fee</div>
        <div className="subsprice">
          <CurrencyRupeeIcon fontSize="small" /> {selectedOption === "149" ? "18,500" :  selectedOption === "179" ? "22225" : selectedOption === "99" ? "12,292": "0"}
        </div>
      </div>
      <div className="limited">
        <div className="limitedPrice">
          <div>Limited time offer </div>
          <div className="subsprice">
            - <CurrencyRupeeIcon fontSize="smaller" /> {selectedOption === "149" ? "18,401" :  selectedOption === "179" ? "22,046" : selectedOption === "99" ? "12,193": "0"}          </div>
        </div>
        <div>
          <img src={limitedTime} /> Offer valid till 25th March 2023
        </div>
      </div>
      <div className="total">
        <div>
          {" "}
          <strong>Total</strong> (Incl. of 18% GST)
        </div>
        <div className="subsprice">
          <CurrencyRupeeIcon fontSize="small" />
          <strong>{price ? price : "0"}</strong>
        </div>
      </div>
      <div className="buttonBox">
        <button className="cancelBtn">CANCEL</button>
        <button className="payBtn">PROCEED TO PAY</button>
      </div>
      <div className="payImg">
        <img src={payment} alt="payment" />
      </div>
    </div>
  );
};

export default SubsPlan;
