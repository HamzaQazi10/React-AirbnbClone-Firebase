import React, { useState, useContext } from "react";
import { Space, Modal, Button, DatePicker } from "antd";
import { HeadButton } from "../../styles/HeadButton";
import { SearchContext } from "../../App";

function CheckInModal(props) {
  console.log("-------------CheckinModal is Called------------>>>>>");
  const [checkinDate, setcheckinDate] = useState("");
  const [checkoutDate, setcheckoutDate] = useState("");
  const { RangePicker } = DatePicker;

  const countContext = useContext(SearchContext);
  console.log("countContext from CheckinModal is ---", countContext.countState);
  const [data1, setdata1] = useState(countContext.countState);

  console.log(
    "countContext from CheckinModal data1 state is assigned---",
    data1
  );
  const region = data1[0].region;
  console.log("Region in CheckinModal is ", region);
  /*   const t1 = [
    {
      region: data1[0].region,
      checkin: checkinDate,
      checkout: checkoutDate,
      adults: "23",
    },
  ];
  const handleit = (dates, dateString) => {
    //setnextBtn1(false);
    console.log("Selected Date Are", dates, dateString);
    setcheckinDate(dateString[0]);
    setcheckoutDate(dateString[1]);
    countContext.countDispatch({ type: "increment", value: t1 });
  }; */

  return (
    <>
      <Modal
        /* style={{ position: "relative", backgroundColor: "red" }} */
        open={props.CheckInopen}
        title="Select Dates"
        onCancel={props.CheckInhandleCancel}
        footer={[
          <Button key="back" danger onClick={props.handleCheckInCancel}>
            Next
          </Button>,
        ]}
      >
        <div>
          <Space
            direction="vertical"
            //size={"4rem"}
            style={{ width: "100%" }}
          >
            <RangePicker
              allowEmpty={false}
              onChange /* 
              {(val) => {
                console.log(
                  "Date Selected is ",
                  new Date(val[0]).getDate(),
                  new Date(val[0]).getMonth(),
                  new Date(val[1]).getDate(),
                  new Date(val[1]).getMonth(),
                  new Date(val[0].getMonth(), val[0].getDate())
                  );
                }}
                   */={(dates, dateString) => {
                console.log("Selected Date Are", dates, dateString);
                setcheckinDate(dateString[0]);
                setcheckoutDate(dateString[1]);
                countContext.countDispatch({
                  type: "increment",
                  value: {
                    region: region,
                    checkin: dateString[0],
                    checkout: dateString[1],
                    adults: "2301",
                  },
                });
              }}
              style={{
                borderColor: "gray",
                width: "100%",
                //boxDecorationBreak: "unset",
              }}
            />
          </Space>

          <HeadButton />
        </div>
      </Modal>
    </>
  );
}

export default CheckInModal;
