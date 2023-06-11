import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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
function SignModal(props) {
  const navigate = useNavigate();
  const [nextBtn, setnextBtn] = useState(false);
  const [values1, setvalues] = useState({ email: "", password: "" });

  return (
    <Modal
      open={props.signopen}
      onCancel={props.handlesignCancel}
      //style={{ zIndex: "1000000" }}
      //width={"20rem"}
      footer={[]}
      //style={{ color: "red" }}
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
              message.success("Sign Up successfully");
              console.log({ values });
              console.log(values1);
              createUserWithEmailAndPassword(
                auth,
                values1.email,
                values1.password
              )
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
              props.handlesignCancel();
            }}
            onFinishFailed={(error) => {
              console.log({ error });
            }}
          >
            <h3>Account Details Form</h3>
            <div style={{ marginBottom: "2rem" }}>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "please enter name" },
                  { whitespace: true },
                  { min: 3 },
                ]}
                hasFeedback
              >
                <Input
                  size="large"
                  placeholder="Your Complete Name"
                  prefix={<BiUser />}
                />
              </Form.Item>
            </div>

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
            <div style={{ marginBottom: "2rem" }}>
              <Form.Item
                name="confirmpassword"
                rules={[
                  { required: true, message: "please enter password" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      } else {
                        return Promise.reject("Password doesn't match");
                      }
                    },
                  }),
                  //{ min: 5 },
                ]}
                hasFeedback
              >
                <Input.Password
                  placeholder="Re Enter Password"
                  prefix={
                    <RiLockPasswordLine className="site-form-item-icon" />
                  }
                />
              </Form.Item>
            </div>
            <div>
              <Space.Compact>
                <Form.Item style={{ width: "20%" }}>
                  <Input defaultValue="+92" />
                </Form.Item>
                <Form.Item
                  name="phonenumber"
                  rules={[
                    {
                      required: true,
                      message: "please enter phone number",
                      //type: "number",
                    },
                    //{ type: "number" },
                    { min: 7, max: 7 },
                  ]}
                  style={{ width: "80%" }}
                >
                  <Input defaultValue="00000000" />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    danger
                    //onClick={props.handlesignCancel}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Space.Compact>
            </div>

            <CategoryButton1
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
            </CategoryButton1>
          </Form>
        </div>
      </SignUpWrapper>
    </Modal>
  );
}

export default SignModal;
