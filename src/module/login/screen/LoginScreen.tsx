import Input from '../../../shared/inputs/input/Input.tsx';
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage } from '../styles/LoginScreenStyles.ts';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./nfe-icon.png"/>
          <Input title='Usuário'/>
          <Input title='Senha'/>
        </LimitedContainer>  
      </ContainerLogin>
      <BackgroundImage src='./background.png'/>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
