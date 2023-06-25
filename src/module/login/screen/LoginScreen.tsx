import Button from '../../../shared/buttons/button/Button.tsx';
import Input from '../../../shared/inputs/input/Input.tsx';
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage, TitleLogin } from '../styles/LoginScreenStyles.ts';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./nfe-icon.png"/>
          <TitleLogin level={2} type='secondary'> LOGIN </TitleLogin>
          <Input title='Usuário'/>
          <Input title='Senha'/>
          <Button type='primary' margin='64px 0px 16px 0px'> ENTRAR </Button>
        </LimitedContainer>  
      </ContainerLogin>
      <BackgroundImage src='./background.png'/>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
