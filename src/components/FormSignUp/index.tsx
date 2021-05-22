import React from 'react';

const FormSignUp: React.FC = () => {
  return (
    <div>
      <form>
        <input type="text" name="name" placeholder="Insira seu nome" />
        <input type="text" name="username" placeholder="Insira seu nome de usuário" />
        <input type="password" name="password" placeholder="Insira sua senha" />
        <input type="submit" value="Criar conta" />
      </form>
    </div>
  );
}

export default FormSignUp;