import { useState } from "react";
import styled, { ThemeProvider, css } from "styled-components";
import { lighten } from "polished";

import MemberView from "../MemberView/MemberView";

const WINK_ICON_URL = "https://wink.kookmin.ac.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.9258b5b6.png&w=256&q=75";

const ElementPreviewArea = styled.div`
    position: relative;
    height: fit-content;
    border: 1px solid #0000000f;
    box-shadow: 0 2px 14px 0 #0000001a;
    border-radius: 15px;
    overflow: hidden;
    color: ${props => props.theme.text.color.default};
    user-select: none;
    transition: transform 0.3s;
    &:hover {
        transform: translateY(-3px);
    }
`;

const ElementProfileArea = styled.div`
    display: flex;
    padding: 20px 10px;
    cursor: pointer;
    &:hover {
        color: ${props => props.theme.text.color.reversed};
        background: ${props => props.theme.default.color.default};
        .brandIcon {
            filter: brightness(0) invert(1);
        }
    }
    .brandIcon {
        position: absolute;
        top: 10px;
        right: 0;
        height: 15px;
    }
`;

const ElementProfileImage = styled.img`
    margin: 0 20px 0 10px;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background-color: #b0c6ff;
`;

const ElementExternalLinkButton = styled.a`
    display: flex;
    padding: 5px 0;
    height: 40px;
    flex: auto;
    color: ${props => props.themeColor};
    background: ${props => props.theme.button.color.default};
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    justify-content: center;
    &:hover {
        color: ${props => lighten(0.3, props.theme.text.color.reversed)};
        background: ${props => lighten(0.3, props.themeColor)};
        img {
            filter: brightness(0) invert(1);
        }
    }
    ${props => props.href ?
            css`
                &:active {
                    color: ${props => props.theme.text.color.reversed};
                    background: ${props => props.themeColor};
                }
            `
        :
            css`
                color: ${props => props.theme.text.color.disabled};
                cursor: not-allowed;
                img {
                    filter: grayscale(80%);
                }
            `
    }
    * {
        margin: auto 0;
    }
    img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        -webkit-user-drag: none;
    }
`;

export default function MemberPreview({member}) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <ThemeProvider
            theme={{
                default: {
                    color: {
                        default: "#74c0fc",
                        reversed: "#ffffff",
                        highlighted: "#ffc0cb"
                    }
                },
                text: {
                    color: {
                        default: "#000000",
                        reversed: "#ffffff",
                        action: "#e8590c",
                        disabled: "#ced4da"
                    }
                },
                button: {
                    color: {
                        default: "#ffffff",
                        hover: "#ced4da",
                        active: "#000000",
                    }
                }
            }}
        >
            {showInfo ? <MemberView member={member} closeCallback={() => setShowInfo(false)} /> : null}
            <ElementPreviewArea>
                <ElementProfileArea onClick={() => setShowInfo(true)}>
                    <img className="brandIcon" src={WINK_ICON_URL} alt="WINK 아이콘" />
                    <ElementProfileImage src={member.profileImageURL} alt="프로필 이미지"/>
                    <div style={{padding: "10px", overflow: "hidden"}}>
                        <div style={{fontSize: "15pt", fontWeight: "600", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
                            {member.displayName}
                        </div>
                        <div style={{display: "-webkit-box", marginTop: "3px", fontSize: "12pt", fontWeight: "400", overflow: "hidden", WebkitLineClamp: "3", WebkitBoxOrient: "vertical"}}>
                            {member.description}
                        </div>
                    </div>
                </ElementProfileArea>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    {member.externalLinks.map((externalLink, index) =>
                        <ElementExternalLinkButton key={index} themeColor={externalLink.themeColor} href={externalLink.hrefURL} target="_blank" rel="noreferrer">
                            <img src={externalLink.iconURL} alt={`${externalLink.description} 아이콘`} />
                            <p>{externalLink.displayName}</p>
                        </ElementExternalLinkButton>
                    )}
                </div>
            </ElementPreviewArea>
        </ThemeProvider>
    );
}