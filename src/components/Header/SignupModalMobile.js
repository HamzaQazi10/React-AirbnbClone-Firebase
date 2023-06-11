import React, { useState } from "react";
import { Modal, Button } from "antd";
import { HeadButton } from "../../styles/HeadButton";
import SignModal from "./SignModal";
import { NavLink } from "react-router-dom";
import { auth } from "../../Firebase";
import SigninModal from "./SigninModal";
//import { Wrappersignup } from "./styles/Wrappersignup";
function SignupModalMobile(props) {
  const [signopen, setsignOpen] = useState(false);
  const [variantModal, setvariantModal] = useState("absolute");
  //const [userLog, setuserLog] = useState(false);
  const [signinopen, setsigninOpen] = useState(false);
  const [userLog, setuserLog] = useState(false);

  const showsigninModal = () => {
    console.log("....Home Modal..........");
    //setGuestsTitle("Anywhere");
    //props.handlehomeCancel();
    setsigninOpen(true);
    setvariantModal("relative");
  };
  const signinhandleClose = () => {
    console.log("---------------->p");
    setsigninOpen(false);
  };
  const handlesigninCancel = () => {
    //props.handlehomeMobileClose();
    setsigninOpen(false);
  };
  const showsignModal = () => {
    console.log("....Home Modal..........");
    //setGuestsTitle("Anywhere");
    //props.handlehomeCancel();
    setsignOpen(true);
    setvariantModal("relative");
  };
  const signhandleClose = () => {
    console.log("---------------->p");
    setsignOpen(false);
  };
  const handlesignCancel = () => {
    props.handlehomeCancel();
    setsignOpen(false);
  };
  const stylez1 = {
    position: variantModal,
    position: "relative",

    //backgroundColor: variantModal,
  };
  auth.onAuthStateChanged((user) => {
    if (user) {
      setuserLog(true);
      console.log("WE HAVE USER");
    } else {
      setuserLog(false);
      console.log("User Not logged in");
    }
  });
  return (
    /*     <SignupModalStyle>
    <div className="modal-wrapper"></div>
    <div className="modal-container">
    <Button style={{ display: "block" }}>dddd</Button>
    <Button>dddd</Button>
    </div> */
    <>
      <Modal
        open={props.homemobileopen}
        onCancel={props.handlehomemobileCancel}
        //style={{ zIndex: "1000000" }}
        style={stylez1}
        className="st"
        width={"20rem"}
        footer={[]}
      >
        <div
          style={{
            borderBottom: "1px solid lightgray",
            paddingBottom: "1rem",
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <HeadButton
              variant="active"
              style={{ display: "block", fontWeight: "bold" }}
              onClick={showsignModal}
            >
              Sign Up
            </HeadButton>
          </div>
          {userLog ? (
            <HeadButton
              variant="active"
              style={{ display: "block" }}
              onClick={() => {
                auth
                  .signOut(auth)
                  .then(() => {
                    console.log("Sign Out Successfully");
                    props.handlehomeCancel();
                  })
                  .catch((error) => {
                    console.log("Error while Sign Out", error);
                  });
              }}
            >
              Log Out
            </HeadButton>
          ) : (
            <HeadButton
              variant="active"
              style={{ display: "block" }}
              onClick={showsigninModal}
            >
              Login
            </HeadButton>
          )}
        </div>
        <div>
          <div style={{ marginBottom: "1rem" }}>
            <NavLink to={userLog ? "/add" : "/"}>
              <HeadButton style={{ display: "block" }}>Airbnb Home</HeadButton>
            </NavLink>
          </div>
          <HeadButton variant="active" style={{ display: "block" }}>
            Help
          </HeadButton>
          <HeadButton />
        </div>
      </Modal>

      {signopen && (
        <SignModal
          signopen={signopen}
          signhandleClose={signhandleClose}
          handlesignCancel={handlesignCancel}
        />
      )}
      {signinopen && (
        <SigninModal
          signinopen={signinopen}
          signinhandleClose={signinhandleClose}
          handlesigninCancel={handlesigninCancel}
        />
      )}
    </>
  );
}

export default SignupModalMobile;
