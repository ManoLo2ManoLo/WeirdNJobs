import React from 'react';
import { Form } from 'react-bulma-components';
import { Button, ButtonGroup } from 'react-bulma-components';
import { Modal } from 'react-bulma-components';

function LoginForm() {
    const { Input, Field, Control, Label } = Form;
    const { ModalCard, ModalCardHead, ModalCardTitle, ModalCardBody, ModalCardFoot} = Modal;
    return (
        <>
            <ButtonGroup renderAs={function noRefCheck() { }}>
                <Button
                    color="light-info"
                    onClick={function noRefCheck() { }}
                >
                    Login
                </Button>
            </ButtonGroup>
            <Modal
                onClose={function noRefCheck() { }}
            >
                <ModalCard>
                    <ModalCardHead>
                        <ModalCardTitle>
                            Login Form
                        </ModalCardTitle>
                    </ModalCardHead>
                    <ModalCardBody>
                        <>
                        <Field>
                                <Label>
                                    Email
                                </Label>
                                <Control>
                                    <Input
                                        placeholder="Email goes here!"
                                        type="email"
                                    />
                                </Control>
                            </Field>
                            <Field>
                                <Label>
                                    Password
                                </Label>
                                <Control>
                                    <Input
                                        placeholder="Write here weirdo!"
                                        type="password"
                                    />
                                </Control>
                            </Field>
                        </>
                    </ModalCardBody>
                    <ModalCardFoot
                        align="center"
                        hasAddons
                        renderAs={function noRefCheck() { }}
                    >
                        <Button color="info">
                            Log In!
                        </Button>
                    </ModalCardFoot>
                </ModalCard>
            </Modal>
        </>

    )
};

module.exports = LoginForm;