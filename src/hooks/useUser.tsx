import { useContext } from "react";
import { UserContext } from "../context/userContex";

const useUser = () => useContext(UserContext);

export default useUser;
