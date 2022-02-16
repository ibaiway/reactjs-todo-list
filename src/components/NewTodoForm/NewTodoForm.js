import React from "react";
import { Formik } from "formik";
import { v4 as uuid } from "uuid";
import Input from "../Input";

import todoSchema from "./todo-schema";

function addTodoDetails(todo) {
  return {
    id: uuid(),
    ...todo,
    done: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

function NewTodoForm({ saveNewTodo }) {
  return (
    <Formik
      initialValues={{
        title: "",
      }}
      validationSchema={todoSchema}
      onSubmit={(values) => {
        const newTodo = addTodoDetails(values);
        saveNewTodo(newTodo);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        values,
        touched,
        // isValidating,
        // isValid,
      }) => (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            label={false}
            id="text"
            value={values.text}
            placeholder="Todo Text"
            handleChange={handleChange}
            handleBlur={handleBlur}
            hasErrorMessage={touched.text}
            errorMessage={errors.text}
            data-testid="create-todo-input"
          />
        </form>
      )}
    </Formik>
  );
}

export default NewTodoForm;
