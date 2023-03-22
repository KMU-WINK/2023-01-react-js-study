import style from "./LoadingBar.module.scss";

import classNames from "classnames/bind";

const cx = classNames.bind(style);

export default function LoadingBar({backgroundColor="#f0f0f0", color="#3b82f6", animate=true}) {
    return (
        <div className={cx("progressBar")} style={{backgroundColor: backgroundColor}}>
            <div className={cx("progressBarProgress", {animate: animate})} style={{backgroundColor: color}}></div>
        </div>
    );
}