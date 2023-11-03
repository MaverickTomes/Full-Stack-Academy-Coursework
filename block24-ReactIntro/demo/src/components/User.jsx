//display of a current / featured user
//button to go back to a previous user
//button to go forward to the next user
import { useState } from "react";
import userData from "../userData";


function User() {
const [curUser, setCurUser] = useState(0);
//curUser corresponds to the index in the UserData array of the current user

    function nextUser () {
      if(curUser < userData.length - 1) {
        setCurUser(curUser + 1);
      }
      else {
        setCurUser(0);
      }
    }

    function prevUser () {
      if(curUser > 0) {
        setCurUser(curUser - 1);
      }
      else {
        setCurUser(userData.length - 1);
      }
    }

  return (
    <>
        <h3>{userData[curUser].firstname}</h3>
        <p>{userData[curUser].birthday}</p>
        <button onClick={prevUser}>Previous</button>
        <button onClick={nextUser}>Next</button>
    </>
  ); // <--add this ; here it does not add it on its own.
}

export default User;