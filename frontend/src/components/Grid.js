import React from "react";
import axios from "axios";
import styled from "styled-components"
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20%;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 800px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: center;
  border-button: inset;
  padding-botton: 5px;
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
`;

const Grid = ({ receitas, setReceitas, setOnEdit, getReceitas }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  }

  const handleDelete = async (codigo_receita) => {
    await axios
    .delete("http://localhost:3000/api/receitas/" + codigo_receita)
    .then(({ data }) => {
      getReceitas();
      toast.success(data);
    }).catch(({data}) => toast.error(data));

    setOnEdit(null);
  }

  return (
    <Table>
      <Thead>
        <Tr>
          <Th width="30%">Nome</Th>
          <Th width="30%">Tempo Preparo</Th>
          <Th width="30%">Dificuldade</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {receitas.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item.nome}</Td>
            <Td width="30%">{item.tempo_preparo}</Td>
            <Td width="30%">{item.dificuldade}</Td>
            <Td aligncenter="true" width="5%">
              <FaEdit onClick={() => handleEdit(item)}/>
            </Td>
            <Td aligncenter="true" width="5%">
              <FaTrash onClick={() => handleDelete(item.codigo_receita)}/>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;