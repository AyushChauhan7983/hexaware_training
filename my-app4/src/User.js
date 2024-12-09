import react from "react";
import { useParams } from "react-router-dom";

const User = () => {
  let { nm } = useParams();
  return (
    <div>
      <h1>Welcome {nm}</h1>
    </div>
  );
};

export default User;
