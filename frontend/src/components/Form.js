import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 140px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`
const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getReceitas, onEdit, setOnEdit }) => {
  const ref = useRef();
  const [nome, setNome] = useState("");
  const [tempo_preparacao, setTempo_preparacao] = useState(0);
  const [num_pessoas, setNum_pessoas] = useState(0);
  const [dificuldade, setDificuldade] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preparacao, setPreparacao] = useState("");

  useEffect(() => {
    if (onEdit) {
      
      setNome(onEdit.nome);
      setTempo_preparacao(onEdit.tempo_preparacao);
      setNum_pessoas(onEdit.num_pessoas);
      setDificuldade(onEdit.dificuldade);
      setCategoria(onEdit.categoria);
      setPreparacao(onEdit.preparacao);
    }
  }, [onEdit]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (
      nome === "" ||
      tempo_preparacao === "" ||
      num_pessoas === "" ||
      dificuldade === "" ||
      categoria === "" ||
      preparacao === ""
      ) {
      return toast.warn("Preencha todos os campos");
    }
    
    
      if (onEdit) {
      await axios
        .put("http://localhost:3000/api/receitas/", {
          codigo_receita : onEdit.codigo_receita,
          nome: nome,
          tempo_preparacao: tempo_preparacao,
          num_pessoas: num_pessoas,
          dificuldade: dificuldade,
          categoria: categoria,
          preparacao: preparacao,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:3000/api/receitas/", {
          nome: nome,
          tempo_preparacao: tempo_preparacao,
          num_pessoas: num_pessoas,
          dificuldade: dificuldade,
          categoria: categoria,
          preparacao: preparacao,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }
    setNome("");
    setTempo_preparacao("");
    setNum_pessoas("");
    setDificuldade("");
    setCategoria("");
    setPreparacao("");

    setOnEdit(null);
    getReceitas();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label >Nome</Label>
        <Input value={nome} name="nome" onChange={e => setNome(e.target.value)}/>
      </InputArea>
      <InputArea>
        <Label>Tempo de preparação</Label>
        <Input type="number" value={tempo_preparacao} name="tempo_preparação" onChange={e => setTempo_preparacao(e.target.value)}/>
      </InputArea>
      <InputArea>
        <Label>Número de pessoas</Label>
        <Input type="number" value={num_pessoas} name="num_pessoas" onChange={e => setNum_pessoas(e.target.value)}/>
      </InputArea>
      <InputArea>
        <Label>Dificuldade</Label>
        <Input value={dificuldade} name="dificuldade" onChange={e => setDificuldade(e.target.value)}/>
      </InputArea>
      <InputArea>
        <Label>Categoria</Label>
        <Input value={categoria} name="categoria" onChange={e => setCategoria(e.target.value)}/>
      </InputArea>
      <InputArea>
        <Label>Preparção</Label>
        <Input value={preparacao} name="preparacao" onChange={e => setPreparacao(e.target.value)}/>
      </InputArea>

      <Button type="submit">Salvar</Button>
    </FormContainer>
  );
};

export default Form;