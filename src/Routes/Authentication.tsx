/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useState} from 'react';
import styled from 'styled-components';


const Wrapper = styled.article`
  min-height: 80vh;
  display : flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper2 = styled.div`
`;
const IDBOX = styled.div`
  ${props => props.theme.whiteBox}
  border-radius : 1px;
  height : 480px;
  width : 350px;
  margin : 0 0 10px;
  text-align : center;
  padding: 20px 0px
`;
const Logo = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
font-family: 'Lobster', cursive;
font-size : 50px;
margin : 0 0 20px;
padding: 20px 0px
`;
const Box = styled.div`
 ${props => props.theme.whiteBox}
  border-radius : 1px;
  width : 350px;
  text-align : center;
  padding: 20px 0px
`;
const State = styled.span`
  color: ${props => props.theme.blueColor};
  font-weight : 630;
  cursor : pointer;
`;
const LogIn = styled.div`
margin : 0 0 20px;
padding: 20px 0px
`;
const LogInID = styled.input`
border:1px solid #dbdbdb;
border-radius : 2px;
background-color:#FAFAFA;
width : 250px;
height: 36px;
left: 8px;
cursor: text;
font-size : 12px;
text-color: #8e8e8e;
padding: 9px 0 7px 8px;
margin : 0 0 8px;
overflow: hidden;
text-overflow: ellipsis;
flex: 1 0 auto;
`;
const LogInPW = styled.input`
border:1px solid #dbdbdb;
border-radius : 2px;
background-color:#FAFAFA;
width : 250px;
height: 36px;
left: 8px;
cursor: text;
font-size : 12px;
text-color: #8e8e8e;
padding: 9px 0 7px 8px;
margin : 0 0 8px;
overflow: hidden;
text-overflow: ellipsis;
flex: 1 0 auto;
`;

export default () => {
  const [action,setAction] = useState('LogIn');
  const [id,setId] = useState('');
  const [password, setPassword] = useState('');
  const IDinput = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setId(e.currentTarget.value);
  }
  const PWinput = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setPassword(e.currentTarget.value)
  }
  return (
    <Wrapper>
      <Wrapper2>
        <IDBOX>
          <Logo>Instagram</Logo>
          <LogIn>
            <label>
              <LogInID placeholder="전화번호, 사용자 이름 또는 이메일" value={id} onChange={IDinput} />
            </label>
            <LogInPW placeholder="비밀번호" type='password' value={password} onChange={PWinput} />
          </LogIn>
        </IDBOX>
        <Box>
          {action === 'LogIn' ?(
            <>
              계정이 없으신가요?
              {' '}
              <State onClick={() => setAction('SignUp')}>가입하기</State>
            </>
        ) : (
          <>
            계정이 있으신가요?
            {' '}
            <State onClick={() => setAction('LogIn')}>로그인</State>
          </>
        )}
        </Box>
      </Wrapper2>
    </Wrapper>
  );
};