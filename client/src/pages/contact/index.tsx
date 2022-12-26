import React, { useState } from "react";
import { SendIcon, sentIcon } from "../../assets";
import { Container, Title, SendWord, Image, SendContainer, InformationContainer, TitleContainer, Icon, TitleText, ModalDescription } from "./styles";
import { Form, Input, Modal } from 'antd';
import api from "../../services/api";


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

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [messageHowYouMet, setMessageHowYouMet] = useState('');
    const [messageWhyAreYouInContact, setmessageWhyAreYouInContact] = useState('');

    const getContact = async (e: { preventDefault: () => void }) => {
        try {
            e.preventDefault();
            await api.post('email', {name, email, messageHowYouMet, messageWhyAreYouInContact, phone});
            console.log('success')
            showModal();
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro, tente novamente.')
        }
    }



    return (
        <Container id="ContactUs">
            <Title>Talk to us</Title>
            <Form
                name="basic"
                onFinish={getContact}
                autoComplete="on"
                onFinishFailed={onFinishFailed}
                style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-start', width: '100%'}}
            >
                <Form.Item
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input 
                        placeholder="Name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        style={{
                            color: '#ffffff',
                        }}
                        required={true}
                    />
                </Form.Item>
                <InformationContainer>
                    <Form.Item
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input 
                            placeholder="Email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            style={{
                                color: '#ffffff',
                            }}
                            required={true}
                        />
                    </Form.Item>
                    <Form.Item
                        rules={[{ required: true, message: 'Please input your phone' }]}
                    >
                        <Input 
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => { setPhone(e.target.value) }}
                            style={{
                                color: '#ffffff',
                            }}
                            required={true}
                        />
                    </Form.Item>
                </InformationContainer>
                <Form.Item
                    rules={[{ required: true, message: 'Please, tell us how you met SustMat.' }]}
                >
                    <Input 
                        placeholder="How you Met SustMat?"
                        value={messageHowYouMet}
                        onChange={(e) => { setMessageHowYouMet(e.target.value) }}
                        style={{
                            color: '#ffffff',
                        }}
                        required={true}
                    />
                </Form.Item>
                <Form.Item
                    rules={[{ required: true, message: 'Please, leave your message.' }]}
                >
                    <Input 
                        placeholder="Why are you contcting us?"
                        value={messageWhyAreYouInContact}
                        onChange={(e) => { setmessageWhyAreYouInContact(e.target.value) }}
                        style={{
                            color: '#ffffff',
                        }}
                        required={true}
                    />
                </Form.Item>
                
                <Form.Item style={{ alignSelf: 'flex-end' }}>
                    <SendContainer onClick={getContact}>
                        <SendWord>Send</SendWord>
                        <Image src={SendIcon} />
                    </SendContainer>
                </Form.Item>
                
            </Form>
            
            
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
