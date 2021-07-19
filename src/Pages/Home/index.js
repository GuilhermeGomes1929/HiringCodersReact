import React, {useState} from 'react';
import * as S from './styled';
import centralPerkLogo from "./img/centralPerkLogo.png"
import cafe from "./img/café.jpg"
import capuccino from "./img/capuccino.jpeg"
import milkshake from "./img/milkshake.jpeg"



function Home(props) {
  var [name, setNome] = useState('');
  var [email, setEmail] = useState('');

  function save(){
    let nameElement = document.getElementById('name');
    let emailElement = document.getElementById('email');
    setNome(nameElement.value);
    setEmail(emailElement.value);

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    alert(`Olá, ${nameElement.value}. O e-mail ${emailElement.value} foi cadastrado com sucesso.`)
  }
  

  return (
    <>
      <S.Header >
        <S.Content>
          <S.Logo src={centralPerkLogo}/>
          <S.Title>Cafeteria</S.Title>
        </S.Content>
          
        <S.Cadastro id="cadastro">
          <S.Info>Cadastre-se e receba por e-mail as melhores promoções de café do Central perk.</S.Info>
          <S.PCadastro>Nome:</S.PCadastro>
          <S.Input id="name" type="text"/>
          <S.PCadastro>E-mail:</S.PCadastro>
          <S.Input id="email" type="text"/>
          <S.Button id="cadastra" onClick={save}>Cadastrar</S.Button>
        </S.Cadastro>
      </S.Header>
      <S.MenuPromocao id="menuPromocao">
        <S.Element className="elementos">
          <S.ElementHeader>
            <S.ElementTitle>Café</S.ElementTitle>
          </S.ElementHeader>
          <S.Images src={cafe}/>
          <S.P>de <strong>R$10,00</strong> por apenas <strong>R$7,00</strong>.</S.P>
        </S.Element>
        <S.Element className="elementos">
          <S.ElementHeader>
            <S.ElementTitle>Milkshake</S.ElementTitle>
          </S.ElementHeader>
          <S.Images src={milkshake}/>
          <S.P>de <strong>R$20,00</strong> por apenas <strong>R$16,00</strong>.</S.P>
        </S.Element>
        <S.Element className="elementos">
          <S.ElementHeader>
            <S.ElementTitle>Capuccino</S.ElementTitle>
          </S.ElementHeader>
          <S.Images src={capuccino}/>
          <S.P>de <strong>R$17,00</strong> por apenas <strong>R$14,00</strong>.</S.P>
        </S.Element>      
        

      </S.MenuPromocao>

      

    </>
    );
}

export default Home;

