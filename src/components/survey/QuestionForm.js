import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";
import Button from 'react-bootstrap/Button'

import RadioButton from './RadioButton'
import ShortForm from './ShortForm'
import Checkbox from './Checkbox'

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;
const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;


const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;

function QuestionForm(props) {
  const [quesTitle, setQuesTitle] = useState("");
  const [essential, setEssential] = useState(false);
  const [del, setDel] = useState(false);
  const navigate = useNavigate();
  const questionType = props.questiontype;
  const [addingOptions, setAddingOptions] = useState(0);


  const handleChange = (e) => {
    // 입력값이 변경될 때 실행할 함수
    setQuesTitle(e.target.value); // 상태 업데이트
  };

  return (
    <Form>
    <Wrapper>
      <Container>
        <p></p>
        <PostContainer style={{height:"auto"}}>
          <div>
            <div style={{ border: "", float: "left", width: "80%" }}>
              <input type="text" value={quesTitle} onChange={handleChange} />{" "}

            </div>
            <div style={{ border: "", float: "right", width: "10%" }}>
              {" "}
              <input type="checkbox" name="essential" value=" 필수" />
               필수
            </div>
            <Button variant="outline-danger" onClick={(e)=>{props.delfunction(props.index)}}>X</Button>
          </div>
         
        </PostContainer>

          <div className="questionType">
            {questionType==1 && <RadioButton/>}
            {questionType==2 && <Checkbox/>}
            {questionType==3 && <ShortForm/>}
          </div>

      </Container>
    </Wrapper>
    </Form>
  );
}

export default QuestionForm;
