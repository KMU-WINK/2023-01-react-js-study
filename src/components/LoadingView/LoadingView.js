import style from "./LoadingView.module.scss";

import classNames from "classnames/bind";

import LoadingBar from "../../components/LoadingBar/LoadingBar";

const cx = classNames.bind(style);

const WINK_ICON_URL = "https://wink.kookmin.ac.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.9258b5b6.png&w=256&q=75";

export default function LoadingView({error, reload}) {
    return (
        <div style={{display: "flex"}}>
            <div style={{margin: "auto"}}>
            <img style={{display: "block", margin: "auto", height: "20px"}} src={WINK_ICON_URL} alt="WINK 아이콘" />
            <div style={{margin: "auto", width: "fit-content", color: "#3a70ff", fontSize: "30pt", fontWeight: "bold"}}>WINK</div>
            {
                error ?
                <div className={cx("errorView")}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48">
                        <path d="M4.6 42q-.45 0-.775-.2t-.525-.55q-.2-.35-.225-.725-.025-.375.225-.775l19.4-33.5q.25-.4.575-.575Q23.6 5.5 24 5.5q.4 0 .725.175.325.175.575.575l19.4 33.5q.25.4.225.775-.025.375-.225.725t-.525.55q-.325.2-.775.2Zm2.6-3h33.6L24 10Zm17-2.85q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075-.425-.425-1.075-.425-.65 0-1.075.425Q22.7 34 22.7 34.65q0 .65.425 1.075.425.425 1.075.425Zm0-5.55q.65 0 1.075-.425.425-.425.425-1.075v-8.2q0-.65-.425-1.075-.425-.425-1.075-.425-.65 0-1.075.425-.425.425-.425 1.075v8.2q0 .65.425 1.075.425.425 1.075.425Zm-.2-6.1Z"/>
                    </svg>
                    <span>네트워크 오류가 발생하였습니다.</span>
                    <button onClick={reload}>새로고침</button>
                </div>
                :
                <LoadingBar/>
            }
            </div>
        </div>
    );
}

LoadingBar.defaultProps = {
    backgroundColor: "#f0f0f0",
    color: "#3b82f6"
}