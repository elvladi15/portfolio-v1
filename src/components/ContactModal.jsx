import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useState } from "react";

export default function ContactModal({ show, handleClose }) {
  const fieldInitialValue = { value: "", isFirstRender: true };

  const [name, setName] = useState(fieldInitialValue);
  const [email, setEmail] = useState(fieldInitialValue);
  const [subject, setSubject] = useState(fieldInitialValue);
  const [message, setMessage] = useState(fieldInitialValue);

  const emailRegEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

  const isInvalidName = isInvalidField(name);
  const isInvalidEmail = isInvalidField(email);
  const isInvalidSubject = isInvalidField(subject);
  const isInvalidMessage = isInvalidField(message);

  function isInvalidField(field) {
    if (field.isFirstRender) return false;
    if (field.value === "") return true;

    if (field === email) {
      return !emailRegEx.test(email.value);
    }
    return false;
  }

  function getInvalidEmailMessage() {
    if (email.value === "") return "*Please fill out the email";
    if (!emailRegEx.test(email.value)) return "*Please type a valid email address";
  }
  function isSubmitButtonDisabled() {
    if (
      name.isFirstRender ||
      email.isFirstRender ||
      subject.isFirstRender ||
      message.isFirstRender
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
    setName(fieldInitialValue);
    setEmail(fieldInitialValue);
    setSubject(fieldInitialValue);
    setMessage(fieldInitialValue);

    handleClose();
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-uppercase">Contact me</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={e => handleSubmit(e)}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              value={name.value}
              onChange={e => setName({ value: e.target.value, isFirstRender: false })}
              isInvalid={isInvalidName}
              id="name"
              type="text"
            />
            {isInvalidName && <p className="text-danger">*Please fill out the name</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              value={email.value}
              isInvalid={isInvalidEmail}
              onChange={e => setEmail({ value: e.target.value, isFirstRender: false })}
              id="email"
              type="email"
            />
            {isInvalidEmail && <p className="text-danger">{getInvalidEmailMessage()}</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="subject">Subject</Form.Label>
            <Form.Control
              value={subject.value}
              onChange={e => setSubject({ value: e.target.value, isFirstRender: false })}
              isInvalid={isInvalidSubject}
              id="subject"
              type="text"
            />
            {isInvalidSubject && <p className="text-danger">*Please fill out the subject</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control
              value={message.value}
              onChange={e => setMessage({ value: e.target.value, isFirstRender: false })}
              isInvalid={isInvalidMessage}
              id="message"
              as="textarea"
              rows={3}
            />
            {isInvalidMessage && <p className="text-danger">*Please fill out the message</p>}
          </Form.Group>

          <Stack>
            <Button type="submit" className="ms-auto" disabled={isSubmitButtonDisabled()}>
              Send
            </Button>
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
