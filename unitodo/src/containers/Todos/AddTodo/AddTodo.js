import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../../../components/UI/Forms/Button/Button";
import styled from "styled-components";
import * as Yup from "yup";
import { Formik, Field } from "formik";

import Heading from "../../../components/UI/Headings/Heading";
import Modal from "../../../components/UI/Modal/Modal";
import Input from "../../../components/UI/Forms/Input/Input";
import Message from "../../../components/UI/Message/Message";
import { StyledForm } from "../../../hoc/layout/elements";
import * as actions from "../../../store/actions";

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-around;
`;

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0rem;
  width: 100%;
  padding: 0 3rem;
`;

const TodoSchema = Yup.object().shape({
  todo: Yup.string()
    .required("Il todo è richiesto.")
    .min(4, "Troppo corto")
});

const AddTodo = ({ addTodo, loading, error }) => {
  const [isOpened, setisOpened] = useState(false);
  return (
    <>
      <Button color="main" contain onClick={() => setisOpened(true)}>
        Aggiungi Todo
      </Button>
      <Modal opened={isOpened} close={() => setisOpened(false)}>
        <Heading noMargin size="h1" color="white">
          Aggiungi il tuo nuovo todo
        </Heading>
        <Heading bold size="h4" color="white">
          Scrivi il tuo todo e clicca aggiungi
        </Heading>
        <Formik
          initialValues={{
            todo: ""
          }}
          validationSchema={TodoSchema}
          onSubmit={async (values, { setSubmitting }) => {
            const res = await addTodo(values);
            if (res) {
                setisOpened(false);
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid }) => (
            <StyledForm>
              <Field
                type="text"
                name="todo"
                placeholder="Scrivi il tuo todo..."
                component={Input}
              />
              <ButtonsWrapper>
                <Button
                  contain
                  color="main"
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  loading={loading ? "Aggiunta in corso..." : null}
                >
                  Aggiungi todo
                </Button>
                <Button color="main" contain onClick={() => setisOpened(false)}>
                  Cancel
                </Button>
              </ButtonsWrapper>
              <MessageWrapper>
                <Message error show={error}>
                  {error}
                </Message>
              </MessageWrapper>
            </StyledForm>
          )}
        </Formik>
      </Modal>
    </>
  );
};

const mapStateToProps = ({ todos }) => ({
  loading: todos.loading,
  error: todos.error
});

const mapDispatchToProps = {
  addTodo: actions.addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
