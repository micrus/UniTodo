import React, { useState } from 'react';
import styled from "styled-components";

import Heading from "../../components/UI/Headings/Heading";
import { Container } from "../../hoc/layout/elements";
import AddTodo from './AddTodo/AddTodo';


const Wrapper = styled.div`
  width: 100%;
  align-self: flex-start;
  height: 100%;
  min-height: calc(100vh - 6rem);
  background-color: var(--color-mainLight);
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 4rem;
`;

const Todos = () => {
  return (
    <Wrapper>
      <Container>
        <InnerWrapper>
          <Heading noMargin size="h1" color="white">
            I tuoi Todo
          </Heading>
          <Heading bold size="h4" color="white">
            Tutto quello che devi fare...
          </Heading>
          <AddTodo />
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};

export default Todos;
