import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FiPlus, FiMinus } from 'react-icons/fi';

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        contentRef.current.style.maxHeight = isOpen
            ? `${contentRef.current.scrollHeight}px`
            : '0px';
    }, [contentRef, isOpen]);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <Details>
            <Summary onClick={toggleOpen}>
                {title}
                <Icon>{isOpen ? <FiMinus /> : <FiPlus />}</Icon>
            </Summary>
            <Content ref={contentRef}>{children}</Content>
        </Details>
    );
};

export default Accordion;

const Details = styled.div`
    font-size: 1rem;
    margin: 0 auto;
    width: 100%;
    background: #f6faff;
    border-radius: 8px;
    position: relative;
    max-width: 600px;
    border: 1px solid #c3deff;
    transition: all 0.3s ease-in-out;

    &:hover {
        border: 1px solid #a4a1ff;
    }
`;

const Summary = styled.div`
    user-select: none;
    cursor: pointer;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 1em;
    align-items: center;

    &:focus {
        outline: none;
    }
`;

const Icon = styled.div`
    pointer-events: none;
    transition: all 150ms ease-out;
`;

const Content = styled.div`
    color: #303651;
    padding: 0.2em 1em 1em 1em;
    font-weight: 300;
    line-height: 1.5;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
`;
