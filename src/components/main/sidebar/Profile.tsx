import profileImg from "../../../assets/profile.jpg";

const Profile = () => {
  return (
    <div className="ml-8 mt-2 flex items-center">
      <span className="mr-3 relative">
        <img src={profileImg} className="rounded-full w-[4.5rem] h-[4.5rem]" />
        <span className="absolute bottom-0 right-0  w-4 h-4 border-[3px] border-white bg-main rounded-full"></span>
      </span>
      <span>
        <p className="text-lg font-semibold">왕준혁</p>
        <p className="text-sm text-gray-400 font-light tracking-wide">
          Frontend Developer
        </p>
      </span>
    </div>
  );
};

export default Profile;
