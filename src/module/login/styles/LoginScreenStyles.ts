import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

export const ContainerLoginScreen = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`; 

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0; // começa do ponto zero a esquerda da tela
  top: 0; // começa do ponto zero no topo
  height: 100vh; //vh usado pra não seguir a altura do pai que n tem 100%
  width: 100%;
  object-fit: cover; // cover usado pra adptar a imagem no container
  z-index: -1;
`;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  width: 100%;
  height: 100vh;
  max-width: 646px;
  padding: 22px;
`;

export const TitleLogin = styled(Title)`
  color: #006397;
`;

export const LogoImage = styled.img`
`; 

export const LimitedContainer = styled.div`
  width: 100%;
  max-width: 498px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;