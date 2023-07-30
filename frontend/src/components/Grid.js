import React from "react";
import axios from "axios";
import styled from "styled-components"
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { getReceitas } from "../../../api/users/user.controller";

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

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-button: inset;
  padding-botton: 5px;
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => props.width ? props.width : "auto"};
`;

const Grid = ({ receitas }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th width="30%">Nome</Th>
          <Th width="30%">Tempo de Preparo</Th>
          <Th width="20%">Dificuldade</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <tbody>
        {receitas.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item.nome}</Td>
            <Td width="30%">{item.tempo_preparo}</Td>
            <Td width="30%">{item.dificuldade}</Td>
            <Td alignCenter width="5%">
              <FaEdit />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash />
            </Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Grid;