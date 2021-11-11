import React, {useState} from 'react';
import styled from "styled-components";

export const Newsletter = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const toggleModalOpen = () => {
        setIsModalOpen(!isModalOpen)
        console.log("Toggle!")
    }

    return (
        <Wrapper>
            <Subscriber onClick={e => toggleModalOpen()}>
               <strong><u>Subscribe to the newsletter!</u></strong>
            </Subscriber>
            <Modal isOpen={isModalOpen}>
                <small>You will only receive emails when a new post is out</small>
                <iframe title={"Mailchimp"} src={"https://eepurl.com/hM9Vi5"} width="300px" height="450px">
                </iframe>
            </Modal>
        </Wrapper>
    );
};

const Wrapper = styled.div`
`
const Subscriber = styled.label`
  color: ${props => props.theme.post.link.color};
`

const Modal = styled.div`
  padding-top: 1rem;
  transition: opacity 0.3s ease-in-out, height 1s ease-in-out;
  height: ${({isOpen}) => (isOpen ? "auto" : "0px")};
  opacity: ${({isOpen}) => (isOpen ? "1" : "0")};
`

export default Newsletter;