import React from "react";
import { SignUpWrapper } from "./styles/SignUpWrapper";
import { Button, Typography, Input } from "antd";
import { NavLink } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";

function SignUp() {
  return (
    <SignUpWrapper>
      <div className="bg">
        {/*         <img
          //src="https://a0.muscache.com/im/pictures/a64a22fa-6262-4f36-8a40-bb0300a6bba3.jpg?im_w=720"
          src="https://th.bing.com/th?id=OIP.my9mqMjjU05hevBrgYNTIgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          className="img"
        /> */}
      </div>
      <div className="bg1">
        <section className="contact">
          <div style={{ display: "flex" }}></div>

          <Input size="large" placeholder="Username" prefix={<BiUser />} />

          <Input
            size="large"
            placeholder="Email"
            prefix={<MdOutlineMailOutline />}
          />

          <Input size="large" placeholder="Password" prefix={<BiUser />} />

          <Input
            size="large"
            placeholder="Password"
            prefix={<MdOutlineMailOutline />}
          />

          {/*             <div>
              <Button className="btn hireme-btn">
                <NavLink to="/"> Get Started </NavLink>
              </Button>
            </div> */}
        </section>
      </div>
    </SignUpWrapper>
  );
}

export default SignUp;
