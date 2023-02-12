import React, {useEffect, useState} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from "./InputField";
import TextBox from "./blog/Boxes";
import styled from "styled-components"


const CustomForm = ({status, message, onValidated}) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        if (status === "success") clearFields();
    }, [status])

    const clearFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            MERGE0: email,
            MERGE1: firstName,
            MERGE2: lastName,
        });
    }

    return (

        <Form onSubmit={(e) => handleSubmit(e)}>
            <TextBox title={status === "success" ? "I appreciate it!" : "Join my mailing list!"}>

                {status !== "success" && status !== "error" && status !== "submitted" && status !== "sending" && (
                    <>
                        <TextMessage>
                            I will only send you mails when new posts are out. They will also contain original content,
                            easter eggs, and other fun stuff.
                        </TextMessage>
                        <TextMessage>
                            You can unsubscribe at any time, and it might go to your spam
                            folder anyway.
                        </TextMessage>
                    </>
                )}

                {status === "sending" && (
                    <TextMessage>
                        sending...
                    </TextMessage>
                )}
                {status === "error" && (
                    <TextMessage dangerouslySetInnerHTML={{__html: message}}/>
                )}
                {status === "success" && (
                    <TextMessage
                        dangerouslySetInnerHTML={{__html: message}}
                    />
                )}

                {status !== "success" ? (
                    <>
                        <InputField
                            label="First Name"
                            onChangeHandler={setFirstName}
                            type="text"
                            value={firstName}
                            placeholder="Jane"
                            isRequired
                        />

                        <InputField
                            label="Last Name"
                            onChangeHandler={setLastName}
                            type="text"
                            value={lastName}
                            placeholder="Doe"
                            isRequired
                        />

                        <InputField
                            label="Email"
                            onChangeHandler={setEmail}
                            type="email"
                            value={email}
                            placeholder="you@matter.to.me"
                            isRequired
                        />

                    </>
                ) : null}

                <InputField
                    label="subscribe"
                    type="submit"
                    formValues={[email, firstName, lastName]}
                />
            </TextBox>
        </Form>

    );
};

const TextMessage = styled.p`
  margin-bottom: 1rem;
`
const Form = styled.form`
    position: relative;
`


const MailchimpForm = props => {

    const postUrl = `https://gianlucabelvisi.us20.list-manage.com/subscribe/post?u=${process.env.GATSBY_MAILCHIMP_U}&id=${process.env.GATSBY_MAILCHIMP_ID}`

    return (
        <>
            <MailchimpSubscribe
                url={postUrl}
                render={({subscribe, status, message}) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </>
    );
};

export default MailchimpForm;