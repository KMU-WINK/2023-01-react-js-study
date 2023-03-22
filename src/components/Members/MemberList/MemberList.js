import MemberPreview from "../MemberPreview/MemberPreview";

export default function MemberList({members}) {
    return (
        <div style={{display: "grid", padding: "30px", gridTemplateColumns: "repeat(auto-fit, 350px)", rowGap: "30px", columnGap: "30px", justifyContent: "center"}}>
            {members.map((member, index) =>
            <MemberPreview key={index} member={member} />
            )}
        </div>
    );
}