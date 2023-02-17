import { StyledH2 } from '../../components/Week1';
import { useState } from 'react';

export default function Week1() {
  // 아래에 content 라는 state를 useState 함수를 사용하여 선언하시오.
  // const ...
  const [content, setContent] = useState('내용을 입력하세요');

  const [textStyle, setTextStyle] = useState({
    bold: false,
    italic: false,
    color: false,
  });
  const {bold, italic, color} = textStyle; //구조분해 한 후 밑에 props로 넣어줌
//위에는 bold={textStyle.bold} 와 같은 것

  const handleCheckbox = e => {
    // 이 함수는 checkbox가 변하면 이벤트를 받아 처리해주는 함수이다.
    // 아래 힌트를 참고하여 체크박스가 변할 때 마다 textStyle state 값이 변하도록 하시오.
    // 브라우저에서 개발자 도구 - Console 에서 값을 확인할 수 있다.
    //js에서 object는 딕셔너리랑 같음
    const {name, checked} = e.target;
    
    setTextStyle({
      ...textStyle, //객체가 풀린 스타일이 됨 3개 중에 bold만 빼올 수 있고 그럼
      [name]: checked //객체를 풀어준 다음 name 새로운 객체를 넣어준 거임. name을 새로 넣어주기 위해 기존의 textStyle을 풀고 그 안에 넣어준 거임
    });

    console.log(e.target.name, e.target.checked);
  };

    
  

  // 아래 함수를 작성하여 input의 값이 변할 때, content state 값이 변하도록 하시오.
  const handleInputText = e => {
    setContent(e.target.value); //set함수를 써야 함 target은 바뀌는 이벤트가 뭔지 알려줌/ 그냥 content=e.target.value는 안됨 set 함수로 써야 함
  };

  return (
    <div style={{ padding: '20px' }}>
      <input type="text" value={content} onChange={handleInputText} placeholder="내용을 입력하세요." /> <br />
      {/* <input handleInputText={content} value={content}  /> <br /> */}

      <input
        type="checkbox"
        id="bold"
        name="bold"
        // checked 굵기 조절할 수 있게 고정에서 수정
        onChange={handleCheckbox}
      />
      <label htmlFor="bold">
        <b>Bold</b>
      </label>
      <input
        type="checkbox"
        id="italic"
        name="italic"
        onChange={handleCheckbox}
      />
      <label htmlFor="italic">
        <i>Italic</i>
      </label>
      <input
        type="checkbox"
        id="color" 
        name="color"
        onChange={handleCheckbox}
      />
      <label htmlFor="color" style={{ color: 'blue' }}>
        Blue Color
      </label>
      {/* 아래 StyledH2 Component는 각각 bold, italic, color을 props로 받아 적용시킨다. */}
      {/* 위에서 선언한 textStyle state 값을 props로 넘겨주도록 한다. */}
      <StyledH2 bold={textStyle.bold} //위에 구조 분해 안 할경우는 textStyle.bold로 써줌
      italic={italic} color={color}> 
        {
          // content state에 값이 없다면, '내용을 입력하세요.' 를 출력하고 값이 있다면 content state 값을 출력하시오.
          content ? content : "내용을 입력하세요"
        }
      

      </StyledH2>
    </div>
  );
}