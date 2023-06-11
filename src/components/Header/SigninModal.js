import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../Firebase";

import {
  Modal,
  Input,
  Form,
  Tooltip,
  Space,
  Button,
  InputNumber,
  message,
} from "antd";
import { BiUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMailOutline, MdOutlineInfo } from "react-icons/md";
import { SignUpWrapper } from "./styles/SignUpWrapper";
import { FcGoogle } from "react-icons/fc";
import { CategoryButton1 } from "./styles/CategoryButton1";
import { NavLink, useNavigate } from "react-router-dom";
function SigninModal(props) {
  const navigate = useNavigate();
  const [nextBtn, setnextBtn] = useState(false);
  const [values1, setvalues] = useState({ email: "", password: "" });
  const provider = new GoogleAuthProvider();
  console.log("SIGN IN MODAL IS CALLED");
  return (
    <Modal
      open={props.signinopen}
      onCancel={props.handlesigninCancel}
      //style={{ zIndex: "1000000" }}
      //width={"20rem"}
      footer={[]}
      maskStyle={{
        //backgroundColor: "red",
        background: "linear-gradient(to right, #9900ff, #cc80ff)",
      }}
    >
      <SignUpWrapper>
        <div
          className="heading"
          /*         style={{
    borderBottom: "1px solid lightgray",
    paddingBottom: "1rem",
    backgroundColor: "red",
        }} */
        >
          <Form
            onSubmit={(event) => {
              console.log(
                "SUBMIT IN SIGNUP IS CALLED------------------------------------------->"
              );
              // this.formSubmit(event);
              console.log("SUBMIT IN SIGNUP Ended");
            }}
            title="Account Details"
            autoComplete="off"
            onFinish={(values) => {
              message.success("Sign in successfully");
              console.log({ values });
              console.log(values1);
              signInWithEmailAndPassword(auth, values1.email, values1.password)
                .then((res) => {
                  console.log("Response of Create User Auth is ", res);
                  console.log(
                    "Response of Create User Auth having UserName ",
                    res.user
                  );
                })
                .catch((error) => {
                  console.log("error", error);
                });
              navigate("/");
              props.handlesigninCancel();
            }}
            onFinishFailed={(error) => {
              console.log({ error });
            }}
          >
            <h3>Sign in Form</h3>

            <div style={{ marginBottom: "2rem" }}>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "please enter your Email" },
                  { type: "email", message: "please enter Valid Email" },
                ]}
                hasFeedback
              >
                <Input
                  onChange={(e) => {
                    setvalues((prev) => ({ ...prev, email: e.target.value }));
                  }}
                  placeholder="Enter Email"
                  prefix={<MdOutlineMailOutline />}
                />
              </Form.Item>
            </div>
            <div style={{ marginBottom: "2rem" }}>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "please enter password" },
                  { min: 5 },
                ]}
                hasFeedback
              >
                <Input.Password
                  onChange={(e) => {
                    setvalues((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }));
                  }}
                  placeholder="Enter Password"
                  prefix={
                    <RiLockPasswordLine className="site-form-item-icon" />
                  }
                />
              </Form.Item>
            </div>
            <div>
              <Space.Compact>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    danger
                    //onClick={props.handlesigninCancel}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Space.Compact>
            </div>
            <div>
              <Form.Item>
                <CategoryButton1
                  variant={true}
                  type="text"
                  style={{
                    //border: "1px solid black",
                    //borderRadius: "1rem",
                    //padding: "0px 1rem",
                    width: "100%",
                    //paddingTop: "2rem",
                    //backgroundColor: "red",
                  }}
                  onClick={() => {
                    signInWithPopup(auth, provider)
                      .then((res) => {
                        console.log("Response of Create User Auth is ", res);
                        console.log(
                          "Response of Create User Auth having UserName ",
                          res.user
                        );
                      })
                      .catch((error) => {
                        console.log("error", error);
                      });
                    props.handlesigninCancel();
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      //backgroundColor: "red",
                      //marginTop: "1rem",
                    }}
                  >
                    <p>Continue with Google</p>
                    <FcGoogle size={"2.3rem"} />
                  </div>
                </CategoryButton1>
              </Form.Item>
            </div>

            {/*             <CategoryButton1
              variant={true}
              type="text"
              style={{
                //border: "1px solid black",
                //borderRadius: "1rem",
                //padding: "5px 1rem",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  //backgroundColor: "red",
                }}
              >
                <p>Continue with Google</p>
                <FcGoogle size={"2.3rem"} />
              </div>
            </CategoryButton1> */}
          </Form>
        </div>
      </SignUpWrapper>
    </Modal>
  );
}

export default SigninModal;
