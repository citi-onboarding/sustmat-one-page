import React from "react";
import { SendIcon } from "../../assets";
import { Container, Title, SendWord, Image, SendContainer, InformationContainer } from "./styles";
import { Button, Checkbox, Form, Input } from 'antd';

export const ContactUs: React.FC = () => {


    const onFinish = (values: any) => {
        console.log('Success:', values);
      };

    return (
        <Container>
            <Title>Talk to us</Title>
            <Form
                name="basic"
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item>
                    <Input 
                        placeholder="Name"
                        /* color="#ffffff" */
                        style={{
                            color: '#ffffff',
                        }}
                    />
                </Form.Item>
                <InformationContainer>
                    <Form.Item>
                        <Input 
                            placeholder="Email"
                            style={{
                                color: '#ffffff',
                            }}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input 
                            placeholder="Phone"
                            style={{
                                color: '#ffffff',
                            }}
                        />
                    </Form.Item>
                </InformationContainer>
                <Form.Item>
                    <Input 
                        placeholder="How you Met SustMat?"
                        style={{
                            color: '#ffffff',
                        }}
                    />
                </Form.Item>
                <Form.Item>
                    <Input 
                        placeholder="Why are you contcting us?"
                        style={{
                            color: '#ffffff',
                        }}
                    />
                </Form.Item>
            </Form>
            <SendContainer onClick={onFinish}>
                <SendWord>Send</SendWord>
                <Image src={SendIcon} />
            </SendContainer>
        </Container>
    );
}