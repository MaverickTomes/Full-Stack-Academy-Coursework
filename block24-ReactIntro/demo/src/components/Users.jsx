import userData from "../userData";

//map over the array userData
//display firstname, lastname, and email for each user

function Users () {
  return (
    <>
        {
          //has to be in curly-brackets to work.
          userData.map((user) => {
            return <div key={user.id}>
              <h3>{user.firstname} {user.lastname}</h3>
              <p>{user.email}</p>
              <a href={user.website}> Website </a>
              </div>
          })
        }
    </>
  );
}

export default Users;

//return <p key={user.id}>{user.firstname} {user.lastname} - {user.email}</p>