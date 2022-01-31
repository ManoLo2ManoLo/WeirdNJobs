import React from 'react';
import { Form } from 'react-bulma-components';
import { Button, ButtonGroup } from 'react-bulma-components';
import { Modal } from 'react-bulma-components';

function signUpForm() {
    const { Input, Field, Control, Label } = Form;
    const { ModalCard, ModalCardHead, ModalCardTitle, ModalCardBody, ModalCardFoot } = Modal;
    return (
        <>
            <ButtonGroup renderAs={function noRefCheck() { }}>
                <Button
                    color="light-info"
                    onClick={function noRefCheck() { }}
                >
                    Sign-Up
                </Button>
            </ButtonGroup>
            <Modal
                onClose={function noRefCheck() { }}
            >
                <ModalCard>
                    <ModalCardHead>
                        <ModalCardTitle>
                            Sign-up Form
                        </ModalCardTitle>
                    </ModalCardHead>
                    <ModalCardBody>
                        <>
                            <Field>
                                <Label>
                                    First Name
                                </Label>
                                <Control>
                                    <Input
                                        placeholder="e.g. John"
                                        type="text"
                                    />
                                </Control>
                            </Field>
                            <Field>
                                <Label>
                                    Last Name
                                </Label>
                                <Control>
                                    <Input
                                        placeholder="e.g. John"
                                        type="text"
                                    />
                                </Control>
                            </Field>
                            <Field>
                                <Label>
                                    Username
                                </Label>
                                <Control>
                                    <Input
                                        placeholder="e.g. Doe"
                                        type="text"
                                    />
                                </Control>
                            </Field>
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
                            <Field>
                                <Label>
                                    Verify Password
                                </Label>
                                <Control>
                                    <Input
                                        placeholder="Verify your password here!"
                                        type="verifyPassword"
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
                            Sign Up!
                        </Button>
                    </ModalCardFoot>
                </ModalCard>
            </Modal>
        </>

    )
};

export default signUpForm;