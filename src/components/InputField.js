import React from 'react';
import styled from "styled-components"

const InputField = props => {

    const validateInput = values => {
        if (values.some(f => f === "") || values[0].indexOf("@") === -1) {
            return true
        } else {
            return false
        }
    }

    if (props.type === "submit") {
        return (
            <Row>
                <Submit
                    type='submit'
                    value={props.label}
                    disabled={validateInput(props.formValues)}
                />
            </Row>
        )
    } else if (props.type === "textarea") {
        return (
            <Label>
                {props.label}
                <textarea
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    placeholder={props.placeholder}
                    value={props.value}
                    required={props.isRequired}
                    rows={7}
                    name={props.name}
                />
            </Label>
        );
    } else {
        return (
            <Row>
                <Label>
                    {props.label}
                    <Input
                        onChange={(e) => props.onChangeHandler(e.target.value)}
                        type={props.type}
                        placeholder={props.placeholder}
                        value={props.value}
                        required={props.isRequired}
                        name={props.name}
                    />
                </Label>
            </Row>
        );
    }

};

const Label = styled.label`
  display: inline-block;
`
const Input = styled.input`
  padding-left: .3rem;
  margin-left: 1rem;
  height: 2rem;
  border-radius: 5px;
  border: 1px solid #484848;
`
const Submit = styled.input`
  height: 2rem;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #484848;
`
const Row = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  align-items: end;
  padding-right: 30%;
  @media screen and (max-width: 500px) {
    padding-right: 20%;
  }
  @media screen and (max-width: 400px) {
    padding-right: 0;
  }
`

export default React.memo(InputField);