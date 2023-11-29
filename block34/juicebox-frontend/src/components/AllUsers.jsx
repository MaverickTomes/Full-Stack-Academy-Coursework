import { useState, useEffect } from 'react';

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/users');
        const data = await response.json();
        console.log('Users data:', data);
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
    <div className='users'>
      <h2>User List</h2>
      <ul>
        {users.map(user => {
          return <li key={user.id}>
                 <h4># {user.id}</h4>
                 <h4>Name : {user.name}</h4>
                 <h4>Location : {user.location}</h4>
                 </li>
        })}
      </ul>
    </div>
    </>
  );
};

export default AllUsers;
  