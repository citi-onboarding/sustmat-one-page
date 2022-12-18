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
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
                style={{
                    width: '100%',
                }}
            >
                <Form.Item>
                    <Input 
                        placeholder="Name"
                    />
                </Form.Item>
                <InformationContainer>
                    <Form.Item>
                        <Input 
                            placeholder="Email"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input 
                            placeholder="Phone"
                        />
                    </Form.Item>
                </InformationContainer>
                <Form.Item>
                    <Input 
                        placeholder="How you Met SustMat"
                        color="black"
                    />
                </Form.Item>
                <Form.Item>
                    <Input 
                        placeholder="Why are you contcting us?"
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