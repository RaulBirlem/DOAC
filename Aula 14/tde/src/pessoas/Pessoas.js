let pessoas = []; 

export const buscarPessoas = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pessoas); // delay
      console.log(pessoas)
    }, 500);
  });
};

export const adicionarPessoa = (pessoa) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      pessoas.push(pessoa); 
      resolve(pessoa); 
    }, 500);
  });
};
