import React, { useState } from "react";
import { SendIcon, sentIcon } from "../../assets";
import { Container, Title, SendWord, Image, SendContainer, InformationContainer, TitleContainer, Icon, TitleText, ModalDescription } from "./styles";
import { Form, Input, Modal } from 'antd';


export const ContactUs = () => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    
    const handleClickOutside = () => {
        document.addEventListener("click", () => { setIsModalOpen(false) });
    }
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const showModal = () => {
      setIsModalOpen(true);
    }

    const onFinish = (values: any) => {
        console.log('Success:', values);
        showModal();
      };



    return (
        <Container id="ContactUs">
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
            
            <Modal 
                style={{
                    borderRadius: '6px',
                }} 
                title = {
                <TitleContainer>
                        <Icon src={sentIcon}/>
                        <TitleText>The form was sent sucefully!</TitleText>
                </TitleContainer>
                } 
                    open={isModalOpen} 
                    onCancel={handleCancel} 
                    centered={true} 
                    footer={false}
                    width={384} 
            >
                <ModalDescription>Your request wast sent and will be answered soon.</ModalDescription>
            </Modal>
        </Container>
    );
}
