import React, { FormEvent, useCallback, useState } from 'react';

interface IUserRegister {
  nome: string;
  usuario: string;
  senha: string;
}

const FormSignUp: React.FC = () => {

  const [formDataContent, setFormDataContent] = useState<IUserRegister>({} as IUserRegister);
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoad(true)
      
    }, []
  );
  return (
    <div>
      { isLoad ? (
        <p>Carregando</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Insira seu nome"
            onChange={e => setFormDataContent({ ...formDataContent, nome: e.target.value })}
          />
          <input
            type="text"
            name="username"
            placeholder="Insira seu nome de usuário"
            onChange={e => setFormDataContent({ ...formDataContent, usuario: e.target.value })}

          />
          <input
            type="password"
            name="password"
            placeholder="Insira sua senha"
            onChange={e => setFormDataContent({ ...formDataContent, senha: e.target.value })}
          />
          <input
            type="submit"
            value="Criar conta"
          />
        </form>
      )}
    </div>
  );
}

export default FormSignUp;