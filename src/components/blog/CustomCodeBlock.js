import React from "react";
import {CodeBlock, CopyBlock, dracula, monokai} from "react-code-blocks";

import styled from "styled-components"


const CustomCodeBlock = (props) => {
    // if any language selected or javascript by default

    const {className, copy, children} = props;

    const language = className.match(/(?<=language-)(\w.*?)\b/) != null
        ? className.match(/(?<=language-)(\w.*?)\b/)[0]
        : "javascript";

    return copy ? (
        <Wrapper>
            <CopyBlock text={children} language={language} theme={dracula} wrapLines codeBlock/>
        </Wrapper>
    ) : (
        <Wrapper>
            <CodeBlock text={children} language={language} theme={dracula} wrapLines/>
        </Wrapper>
    );
};

export default CustomCodeBlock;

const Wrapper = styled.div`
  margin-bottom: 2rem;
`
