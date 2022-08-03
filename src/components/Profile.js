import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const { users, isLoading } = useSelector((store) => store.user);
  console.log(users, isLoading);
  return (
    <div>
      {users.map((user) => (
        <div key={user.name}>
          <h1>Hi, {user.name}</h1>
          <h3>{user.age}</h3>
        </div>
      ))}
    </div>
  );
};

export default Profile;
