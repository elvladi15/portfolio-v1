import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Alert from "react-bootstrap/Alert";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const STATUS = {
  UNSUBMITTED: "unsubmitted",
  LOADING: "loading",
  SUCCESS: "success",
  FAILED: "failed",
};

export default function ContactModal({ show, handleClose }) {
  const fieldsInitialValue = {
    name: { value: "", isFirstRender: true },
    email: { value: "", isFirstRender: true },
    subject: { value: "", isFirstRender: true },
    message: { value: "", isFirstRender: true },
  };

  const [fields, setFields] = useState(fieldsInitialValue);
  const [status, setStatus] = useState(STATUS.UNSUBMITTED);
  const [showAlert, setShowAlert] = useState(false);

  const emailRegEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

  const isInvalidName = isInvalidField(fields.name);
  const isInvalidEmail = isInvalidField(fields.email);
  const isInvalidSubject = isInvalidField(fields.subject);
  const isInvalidMessage = isInvalidField(fields.message);

  function isInvalidField(field) {
    if (field.isFirstRender) return false;
    if (field.value === "") return true;

    if (field === fields.email) {
      return !emailRegEx.test(fields.email.value);
    }
    return false;
  }
  function getInvalidEmailMessage() {
    if (fields.email.value === "") return "*Please fill out the email";
    if (!emailRegEx.test(fields.email.value)) return "*Please type a valid email address";
  }
  function handleFieldChange(e) {
    setFields(prevFields => ({
      ...prevFields,
      [e.target.name]: {
        value: e.target.value,
        isFirstRender: false,
      },
    }));
  }
  function isSubmitButtonDisabled() {
    if (status === STATUS.LOADING) return true;
    if (
      fields.name.isFirstRender ||
      fields.email.isFirstRender ||
      fields.subject.isFirstRender ||
      fields.message.isFirstRender
    ) {
      return true;
    }

    if (isInvalidName || isInvalidEmail || isInvalidSubject || isInvalidMessage) {
      return true;
    }

    return false;
  }
  function handleSubmit(e) {
    e.preventDefault();
    setStatus(STATUS.LOADING);

    emailjs
      .send(
        "service_fh9vvkk",
        "template_69x0rdi",
        {
          name: fields.name.value,
          email: fields.email.value,
          subject: fields.subject.value,
          message: fields.message.value,
        },
        "user_41dUhujWsaFE2v9iFHxPU"
      )
      .then(response => {
        console.log(response);
        setStatus(STATUS.SUCCESS);
        setShowAlert(true);
        setFields(fieldsInitialValue);
      })
      .catch(error => {
        console.log(error);
        setStatus(STATUS.FAILED);
        setShowAlert(true);
        setFields(fieldsInitialValue);
      });
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-uppercase">Contact me</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert
          show={showAlert}
          variant={status === STATUS.SUCCESS ? "success" : "danger"}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          {status === STATUS.SUCCESS
            ? "Contact information submitted successfully!"
            : "Could not send contact information. Please try again."}
        </Alert>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              value={fields.name.value}
              name="name"
              onChange={handleFieldChange}
              isInvalid={isInvalidName}
              type="text"
            />
            {isInvalidName && <p className="text-danger">*Please fill out the name</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              value={fields.email.value}
              isInvalid={isInvalidEmail}
              name="email"
              onChange={handleFieldChange}
              type="email"
            />
            {isInvalidEmail && <p className="text-danger">{getInvalidEmailMessage()}</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="subject">Subject</Form.Label>
            <Form.Control
              value={fields.subject.value}
              name="subject"
              onChange={handleFieldChange}
              isInvalid={isInvalidSubject}
              id="subject"
            />
            {isInvalidSubject && <p className="text-danger">*Please fill out the subject</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control
              value={fields.message.value}
              name="message"
              onChange={handleFieldChange}
              isInvalid={isInvalidMessage}
              as="textarea"
              rows={3}
            />
            {isInvalidMessage && <p className="text-danger">*Please fill out the message</p>}
          </Form.Group>

          <Stack>
            <Button
              variant="primary"
              type="submit"
              className="ms-auto"
              disabled={isSubmitButtonDisabled()}
            >
              {status === STATUS.LOADING ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-1"
                    role="status"
                    aria-hidden={true}
                  />
                  Loading...
                </>
              ) : (
                "Send"
              )}
            </Button>
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
