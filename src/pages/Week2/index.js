import { useEffect, useRef, useState } from "react";

export default function Week2() {
  const timetable = [
    {
      name: '0',
      title: '웹클라이언트컴퓨팅',
      professor: '김영만',
      time: '12:00 ~ 13:00',
    },
    {
      name: '1',
      title: '운영체제',
      professor: '황선태',
      time: '13:30 ~ 14:30',
    },
    {
      name: '2',
      title: '컴퓨터네트워크',
      professor: '이상환',
      time: '16:00 ~ 17:30',
    },
  ]
  const timer = useRef(null);
  const [time, setTime] = useState(10);

  // 아래 미리 작성된 useEffect 함수를 참고하여 정상적으로 남은 시간이 돌아가도록 작성하시오.
  useEffect(() => {
    timer.current = setInterval(() => {
      console.log('1초마다 실행');
      setTime((time) => (time-1))
    }, 1000);

    return () => clearInterval(timer.current);
  }, [])

  useEffect(() => {
    // time이 변할 때 마다 실행됨.
    if(time <= 0){
      setTime(0); //setTime 10으로 설정하면 계속 신청시간이 다가오지 않는 무한루프 실현,,,
    }
  }, [time]);

  const handleRegister = (e) => {
    if (time > 0) {
      alert('아직 수강신청 시간이 되지 않았습니다.');
      return;
    }
    // e.target.name을 이용하여 alert 함수를 이용해 "(과목명) 수강신청에 성공하였습니다!" 가 출력되도록 하시오.
    // if (e.target.name === 'index') { // 단, 다음 코드처럼 if-else 구문으로 처리하지 마시오. (관련없는 예시 코드입니다.)
    //   // e.target.name === '0' 과 같은 코드로 제출하시면 혼냅니다...
    //   alert('알고리즘 과목은 수강인원이 초과되었습니다.');
    //   return;
    // }
    // // 이 아랫줄에 해당 코드를 작성하세요.
      alert(e.target.name +" "+ "수강신청에 성공하였습니다!");
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>장바구니</h1>
      <h2>수강신청까지 남은시간: {time} 초</h2>

      <table border={"1"}>
        <tbody>
          <tr>
            <td>강의명</td>
            <td>담당교수</td>
            <td>시간</td>
            <td>신청하기</td>
          </tr>
          {/* map 함수를 이용하여 timetable에 담긴 과목이 아래 예시와 같은 수강신청 화면으로 렌더링되게 하시오. */}
          {/* <tr> 태그에 key 값으로는 과목 내용에서 name으로 설정하시오. */}
          {timetable.map(subject =>
          <tr key = {subject.name} >
          <td>{subject.title}</td>
          <td>{subject.professor}</td>
          <td>{subject.time}</td>
          <td><button name={subject.title} onClick={handleRegister}>신청</button></td>
        </tr>
          )}
          
          {/* Hint! { timetable.map(subject => <tr key={subject.name}> ... */}
        </tbody>
      </table>
    </div>
  );
}
