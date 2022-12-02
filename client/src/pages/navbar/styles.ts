import styled from 'styled-components'; 

//implementar animação cores.
export const NavbarContainer = styled.div`
position: fixed;
z-index= 10;
width: 1300px;
height: 110px;
left: 0%;
top: 0px;
filter: drop-shadow(0px -6px 25px rgba(0, 0, 0, 0.24));

right: 0%;
display: flex;
flex-direction: row;

button {
    background-color: transparent;
    border: transparent;
}

img {
    position: absolute;
    width: 107px;
    height: 84px;
    left: 115px;
    top: 16px;    
}

.Tteam {
    position: absolute;
    width: 58px;
    height: 25px;
    left: 1052px;
    top: 45px;
    
    font-family: 'Sen';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    
    color: #222222;

    &:hover {
        font-weight: 700;

        background: linear-gradient(280.74deg, #52A5E1 54.39%, #7EDAF6 138.84%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
}

.Ttechnology {
    position: absolute;
    width: 113px;
    height: 25px;
    left: 885px;
    top: 45px;
    
    font-family: 'Sen';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    
    color: #222222;

    &:hover {
        font-weight: 700;

        background: linear-gradient(280.74deg, #52A5E1 54.39%, #7EDAF6 138.84%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
}

.Tadvantages {
    position: absolute;
    width: 113px;
    height: 25px;
    left: 718px;
    top: 45px;
    
    font-family: 'Sen';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    
    color: #222222;

    &:hover {
        font-weight: 700;
        
        background: linear-gradient(280.74deg, #52A5E1 54.39%, #7EDAF6 138.84%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
}

.Thome {
    position: absolute;
    width: 62px;
    height: 25px;
    left: 602px;
    top: 45px;
    
    font-family: 'Sen';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #222222;

    &:hover {
        font-weight: 700;
        
        background: linear-gradient(280.74deg, #52A5E1 54.39%, #7EDAF6 138.84%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
}

.contact {
    position: absolute;
    width: 138px;
    height: 42px;
    left: 1130px;
    top: 38px;
}

.Tcontact {
    position: absolute;
    width: 78px;
    height: 25px;
    left: 28px;
    top: 7px;
    z-index: 10;
    
    font-family: 'Sen';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    color: #FFFFFF;
    
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.17);
}

.group45 {
    position: absolute;
    width: 138px;
    height: 42px;
    left: 0px;
    top: 0px;
}

.rectangle150 {
    position: absolute;
    width: 138px;
    height: 42px;
    left: 0px;
    top: 0px;
    
    background: linear-gradient(278.87deg, #6AA5FE 27.2%, #73D5E5 111.13%);
    border-radius: 21px;

    &:hover {
        background: linear-gradient(11.36deg, #4688EA -32.18%, #73D5E5 201.12%);
    }
}

.rectangle2 {
    position: block;
    width: 1300px;
    height: 110px;
    left: 0%;
    top: 0px;

    right: 0%;
    display: flex;
    flex-direction: row;
    
    background: #FFFFFF;
    box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.1);
}
`;