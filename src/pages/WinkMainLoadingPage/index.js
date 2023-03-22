import React, { useEffect, useRef, useState } from "react";

import style from "./style.module.scss";

import classNames from "classnames/bind";

import LoadingBar from "../../components/LoadingBar/LoadingBar";

const cx = classNames.bind(style);

const WINK_ICON_URL = "https://wink.kookmin.ac.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.9258b5b6.png&w=256&q=75";


function HiddenText({children, hidden}) {
  const target = useRef();
  useEffect(() => {
    target.current.style.width = `${target.current.offsetWidth}px`;
  }, []);
  useEffect(() => {
    if (hidden) {
      target.current.style.width = "0px";
      target.current.style.transform = "scale(0)";
    }
  }, [hidden]);
  return <span ref={target}>{children}</span>;
}

export default function WinkMainLoadingPage() {
  const [textHidden, setTextHidden] = useState(false);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("blue");
  const timer = useRef(null);
  useEffect(() => {
    timer.current = setTimeout(() => {
      setTextHidden(true);
      setTheme("white");
      timer.current = setTimeout(() => {
        setLoading(true);
      }, 1500);
    }, 1500);
    return () => clearTimeout(timer.current);
  }, []);

  return (
    <div className={cx("page", `${theme}Theme`)}>
      <div style={{margin: "auto"}}>
        <img className={cx("brandIcon")} src={WINK_ICON_URL} alt="WINK 아이콘" />
        <div className={cx("textArea")}>
          <span>W</span>
          <HiddenText hidden={textHidden}>eb&nbsp;&nbsp;</HiddenText>
          <span>I</span>
          <span>N</span>
          <HiddenText hidden={textHidden}>&nbsp;&nbsp;</HiddenText>
          <span>K</span>
          <HiddenText hidden={textHidden}>ookmin</HiddenText>
        </div>
        <div style={{opacity: loading ? 1 : 0, transition: "all 1s"}}>
          <LoadingBar animate={loading}/>
        </div>
      </div>
    </div>
  );
}