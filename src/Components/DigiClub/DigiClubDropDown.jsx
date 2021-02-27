import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

//Helper
import toFarsiNumber from "../../Helper/FarsiNumber";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGifts, faFlag, faGift } from "@fortawesome/free-solid-svg-icons";

//Styles
import Style from "../../../styles/Header.module.css";

const DigiClubDropDown = () => {
  const [remainTime, setRemainTime] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3000/api/counter").then((res) => {
      setRemainTime(res.data.remaining);
    });
  }, []);

  useEffect(() => {
    timer(remainTime);
  }, [remainTime]);

  const timer = (time) => {
    time !== 0 &&
      setInterval(() => {
        let now = new Date().getTime();
        // let countDownDate = now + daysMiliSeconds;
        let distance = time - now;

        // let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        // let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        // let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setSeconds((Math.floor((distance % (1000 * 60)) / 1000)));
      }, 1000);
  };

  return (
    <>
      <div className={Style.digiPlus}>
        <div style={{ width: "300px", padding: "0 10px" }}>
          <p>
            <img
              className={Style.DigiClubLogo}
              src="/DigiClub/DigiClubLogo.svg"
              alt=" لوگوی دیجی کلاب"
            />
          </p>
          <p style={{ fontSize: "12pt" }}>
            <Link href="#">
              <a>
                صفحه اصلی دیجی کلاب <span>&#10097;</span>
              </a>
            </Link>
          </p>
          <div style={{ marginTop: "10px", color: "#616161" }}>
            <Link href="#">
              <a>
                <FontAwesomeIcon icon={faGifts} />
                اطلاعات بیشتر و عضویت
              </a>
            </Link>
          </div>
          <div style={{ marginTop: "10px", color: "#616161" }}>
            <Link href="#">
              <a>
                <FontAwesomeIcon icon={faFlag} />
                ماموریت های دیجی کلابی
              </a>
            </Link>
          </div>
          <hr />
          <div className={Style.digiClubCounter}>
            <Link href="#">
              <a>
                <FontAwesomeIcon icon={faGift} />
                قرعه کشی
              </a>
            </Link>
            <p className={Style.timer}>{`${toFarsiNumber(days)} : ${toFarsiNumber(
              hours
            )} : ${toFarsiNumber(minutes)} : ${toFarsiNumber(
              seconds
            )}`}</p>
          </div>
        </div>
        <div>
          <img
            className={Style.DigiPlusBanner}
            src="/DigiClub/DigiClubBanner.jpg"
            alt="دیجی کلاب"
          />
        </div>
      </div>
    </>
  );
};

export default DigiClubDropDown;
