import MainLeft from "./components/MainLeft/MainLeft";
import MainRight from "./components/MainRight/MainRight";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import { useAuthState } from "react-firebase-hooks/auth";

import { useEffect } from "react";

import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { addUser } from "./store/userSlice";

function App() {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const uID = user?.email.split("@")[0];
  useEffect(() => {
    if (user) {
      dispatch(
        addUser({
          id: user?.uid,
          userName: user?.displayName,
          uID,
          photoURL: user?.photoURL,
        })
      );
    }
  }, [user]);

  return (
    <>
      {!user ? (
        <Login></Login>
      ) : (
        <div className="app">
          <MainLeft></MainLeft>
          <Main></Main>
          <MainRight></MainRight>
        </div>
      )}
    </>
  );
}

export default App;
