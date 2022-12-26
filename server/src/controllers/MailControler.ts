import { MailServer } from "src/services/MailServer";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();

const SendMail = async (request: Request, response: Response) => {
    try {
        const {name, email, phone, howYouMetSustmat, WhyAreYouContactingUs} = request.body

        await MailServer({
            destinationUser: process.env.EMAIL_WILL_RECEIVE,
            subjectText: 'Um usuário entrou em contato',
            htmlOption: 
            `<p>
                <b>Nome do usuário:</b> ${name} <br>
                <b>E-mail do usuário:</b> ${email} <br>
                <b>Contato:</b> ${phone} <br>
                <b>Como conheceu a Sustmat: ${howYouMetSustmat} </b>
                <b>Por que entrou em contato?: ${WhyAreYouContactingUs} </b> 
            </p>`
        })

        return response.status(200).send({
            answer: 'Enviado.'
        })
    } catch (error) {
        return response.status(500).send({
            answer: 'Desculpe, ocorreu um problema.'
        })
    }
}

export {SendMail};