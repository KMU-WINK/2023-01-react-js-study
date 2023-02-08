import { StyledH2 } from '../../components/Week1';
import { useState } from 'react';

export default function Week1() {
  // 아래에 content 라는 state를 useState 함수를 사용하여 선언하시오.
  // const ...
  const [content, setContent] = useState('');

  const [textStyle, setTextStyle] = useState({
    bold: true,
    italic: false,
    color: false,
  });

  const { bold, italic, color } = textStyle;

  const handleCheckbox = e => {
    // 이 함수는 checkbox가 변하면 이벤트를 받아 처리해주는 함수이다.
    // 아래 힌트를 참고하여 체크박스가 변할 때 마다 textStyle state 값이 변하도록 하시오.
    // 브라우저에서 개발자 도구 - Console 에서 값을 확인할 수 있다.
    setTextStyle({
      ...textStyle,
      [e.target.name]: e.target.checked
    });
    console.log(e.target.name, e.target.checked);
  };

  // 아래 함수를 작성하여 input의 값이 변할 때, content state 값이 변하도록 하시오.
  const handleInputText = e => {
    setContent(e.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <input onChange={handleInputText} type="text" placeholder="내용을 입력하세요." /> <br />
      <input
        type="checkbox"
        id="bold"
        name="bold"
        // checked
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
      <StyledH2 bold={bold} italic={italic} color={color && "blue"} >
        {
          // content state에 값이 없다면, '내용을 입력하세요.' 를 출력하고 값이 있다면 content state 값을 출력하시오.
        }
        {content === '' ? <>내용을 입력하세요.</> : content}
      </StyledH2>
    </div>
  );
}
