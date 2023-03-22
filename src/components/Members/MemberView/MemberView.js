import classNames from "classnames/bind";

import styles from "./MemberView.module.scss";

const cx = classNames.bind(styles);

const WINK_ICON_URL = "https://wink.kookmin.ac.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.9258b5b6.png&w=256&q=75";

export default function MemberPreview({member, closeCallback}) {
    return (
        <div className={cx("blurLayer")}>
            <div className={cx("card")}>
                <div className={cx("closeButton")} onClick={closeCallback}>
                    <svg style={{display: "block"}} viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
                <div className={cx("brandIcon")}>
                    <img src={WINK_ICON_URL} alt="WINK 아이콘" />
                    <p>WINK</p>
                </div>
                <div className={cx("profile")}>
                    <img src={member.profileImageURL} alt="프로필 이미지"/>
                    <div style={{padding: "10px", textAlign: "center"}}>
                        <div style={{margin: "5px 0", fontSize: "15pt", fontWeight: "600"}}>
                            {member.displayName}
                        </div>
                        <div style={{fontSize: "13pt"}}>
                            {member.description}
                        </div>
                    </div>
                </div>
                <div className={cx("externalLinkArea")}>
                    {member.externalLinks.map((externalLink, index) =>
                        <a key={index} className={cx("externalLinkButton", {disabled: !externalLink.hrefURL})} style={{backgroundColor: externalLink.themeColor}} href={externalLink.hrefURL} target="_blank" rel="noreferrer">
                            <img src={externalLink.iconURL} alt={`${externalLink.description} 아이콘`} />
                            <p>{externalLink.displayName}</p>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}