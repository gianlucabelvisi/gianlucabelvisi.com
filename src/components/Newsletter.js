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
               Subscribe to the newsletter!
            </Subscriber>
            <Modal isOpen={isModalOpen}>
                <div>You will only receive emails when a new post is out.</div>
                <iframe src={"http://eepurl.com/hM9Vi5"} width="auto" height="450px">
                </iframe>
            </Modal>
        </Wrapper>
    );
};

const Wrapper = styled.div`
`
const Subscriber = styled.label`
`

const Modal = styled.div`
  transition: opacity 0.3s ease-in-out, height 1s ease-in-out;
  height: ${({isOpen}) => (isOpen ? "auto" : "0px")};

  opacity: ${({isOpen}) => (isOpen ? "1" : "0")};
`

export default Newsletter;