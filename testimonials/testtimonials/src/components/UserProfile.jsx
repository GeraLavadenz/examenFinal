import "./UserProfile.css";

export const UserProfile = ({name,avatar,userState}) => {
  return (
    <div className="user-profile">
      <img  src={avatar} alt="" />
      <div className="user-details">
        <span>{name}</span>
        <span>{userState}</span>
      </div>
    </div>
  );
};

export default UserProfile;
