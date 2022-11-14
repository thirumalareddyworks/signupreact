import React from "react";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import PasswordStr from "./PasswordStr";
import "./style.css";
import Phone from "./phone";
// import Date from "./Date";
import Image from "./Image";
import Address from "./Addres";


const SignUpForm = ({
  history,
  onSubmit,
  onChange,
  errors,
  user,
  score,
  btnTxt,
  type,
  pwMask,
  onPwChange
}) => {
  return (
    <div className="loginBox">
      <h1>Sign Up</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <form onSubmit={onSubmit}>
        <TextField
          name="firstname"
          floatingLabelText="First name"
          value={user.firstname}
          onChange={onChange}
          errorText={errors.firstname}
          
        /> 
        <div>
        <TextField
          name="lasttname"
          floatingLabelText="Last name"
          value={user.lastname}
          onChange={onChange}
          errorText={errors.lastname}
        /> 
        </div>
        <div>
        <TextField
          name="email"
          floatingLabelText="Email"
          value={user.email}
          onChange={onChange}
          errorText={errors.email}
        />
        </div>
        <TextField
          type={type}
          name="password"
          floatingLabelText="Password"
          value={user.password}
          onChange={onPwChange}
          errorText={errors.password}
        />

        <div className="pwStrRow">
          {score >= 1 && (
            <div>
              <PasswordStr score={score} /> 
              <FlatButton 
                className="pwShowHideBtn" 
                label={btnTxt} onClick={pwMask} 
                style={{position: 'relative', left: '50%', transform: 'translateX(-50%)'}} 
              />
            </div>
            )} 
        </div>
        <TextField
          type={type}
          name="pwconfirm"
          floatingLabelText="Confirm Password"
          value={user.pwconfirm}
          onChange={onChange}
          errorText={errors.pwconfirm}
        />
        <br /> <br />
        <div>
            
            {/* <TextField
            type={type}
            name="phonenumber"
            floatingLabelText="Phone Number"
            value={user.phonenumber}
            onChange={onChange}
            errorText={errors.phonenumber}
          /> */}
          <Phone />
        </div> <br />
        <div className="colo">
        <input type="date" className="datee"  onChange={onChange}/>
       {/* <Date /> */}
        </div> <br />
        <div className="colo"  onChange={onChange}>
        <label  >Gender</label> <br />
        <input type="radio" value="Male" name="gender" className="radi" /> Male
        <input type="radio" value="Female" name="gender" className="radi" /> Female
        <input type="radio" value="Other" name="gender" className="radi" /> Other
        </div> <br />
        <div className="colo"  onChange={onChange}>
         <label>Address :</label> <br />
          {/*  <textarea
              placeholder="  "
              type="string"
              name="address"
              className="input-field"
              maxlength="400" 
              id="uname"
              onChange={onChange}
            //   onKeyUp={myfun1}
              required
            /> */}

            <Address />
            
        </div> <br />
        <div className="colo">
        <span className="legend" >Languages </span>  <br />
	          <input id="telugu" type="checkbox" name="telugu" className="check"/>
	         	<label >Telugu</label>
	          <input id="hindi" type="checkbox" name="hindi" className="check"/>
	         	<label >Hindi</label>
            <input id="english" type="checkbox" name="english" className="check"/>
		        <label>English</label>
        </div> <br /> <br />
        <div>
            <Image />
        </div> <br /> <br />
        <div className="colo"  onChange={onChange}>
        <input id="telugu" type="checkbox" name="telugu" />
                    <label >I agree to signup</label> <br /> <br /> 
        </div>
         
        <RaisedButton
          className="signUpSubmit"
          primary={true}
          type="submit"
          label="submit"
        />
      </form>
    </div>
  );
};

export default SignUpForm;
