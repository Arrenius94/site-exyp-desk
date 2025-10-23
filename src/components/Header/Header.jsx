import React from 'react';
import LogoBranco from '../../assets/icons-png/Logo Exypdesk Branco.png'
import { ContentContainer, InputContainer, InputHeader, LeftContainer, Logo, MainContainer, NavBarContainer, RightContainer, } from './styles';
import SetaSvg from '../../assets/icons/seta-svg';
import Lupa from '../../assets/icons/lupa';

export function Header() {



    return (
        <MainContainer>
            <ContentContainer>
                <LeftContainer>
                   <Logo src={LogoBranco}/>
                   <NavBarContainer>
                    <p>Produtos</p>
                    <SetaSvg/>
                   </NavBarContainer>

                   <NavBarContainer>
                    <p>Sobre</p>
                    <SetaSvg/>
                   </NavBarContainer>

                   <NavBarContainer>
                    <p>Carreiras</p>
                    <SetaSvg/>
                   </NavBarContainer>

                   <NavBarContainer>
                    <p>Cases</p>
                    <SetaSvg/>
                   </NavBarContainer>
                </LeftContainer>

                <RightContainer>
                    <InputContainer>
                    <InputHeader placeholder="Buscar..."/>
                        <Lupa/>
                    </InputContainer>
                </RightContainer>   
            </ContentContainer>
        </MainContainer>
    )
}