import styled from 'styled-components';

export const BackgroundImage = styled.img`
  position: relative;
  left: 0; // começa do ponto zero a esquerda da tela
  top: 0; // começa do ponto zero no topo
  height: 100vh; //vh usado pra não seguir a altura do pai que n tem 100%
  width: 100%;
  object-fit: cover; // cover usado pra adptar a imagem no container
`;
