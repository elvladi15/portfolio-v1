import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useState } from "react";

export default function ContactModal({ show, handleClose }) {
  const [name, setName] = useState({ value: "", isFirstRender: true });
  const [email, setEmail] = useState({ value: "", isFirstRender: true });
  const [subject, setSubject] = useState({ value: "", isFirstRender: true });
  const [message, setMessage] = useState({ value: "", isFirstRender: true });

  function isInvalidName() {
    if (name.isFirstRender) return false;
    if (name.value === "") return true;
    return false;
  }
  function isInvalidEmail() {
    if (email.isFirstRender) return false;
    if (email.value === "") {
      return true;
    }
    if (!email.value.includes("@")) return true;
    return false;
  }
  function isInvalidSubject() {
    if (subject.isFirstRender) return false;
    if (subject.value === "") return true;
    return false;
  }
  function isInvalidMessage() {
    if (message.isFirstRender) return false;
    if (message.value === "") return true;
    return false;
  }
  function getInvalidEmailMessage() {
    if (email.value === "") return "@Please fill out the email";
    if (!email.value.includes("@")) return "*Please type a valid email address";
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
    if (isInvalidName() || isInvalidEmail() || isInvalidSubject() || isInvalidMessage()) {
      return true;
    }

    return false;
  }
  function handleSubmit(e) {
    e.preventDefault();
    setName({ value: "", isFirstRender: true });
    setEmail({ value: "", isFirstRender: true });
    setSubject({ value: "", isFirstRender: true });
    setMessage({ value: "", isFirstRender: true });

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
              isInvalid={isInvalidName()}
              id="name"
              type="text"
            />
            {isInvalidName() && <p className="text-danger">*Please fill out the name</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              value={email.value}
              isInvalid={isInvalidEmail()}
              onChange={e => setEmail({ value: e.target.value, isFirstRender: false })}
              id="email"
              type="email"
            />
            {isInvalidEmail() && <p className="text-danger">{getInvalidEmailMessage()}</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="subject">Subject</Form.Label>
            <Form.Control
              value={subject.value}
              onChange={e => setSubject({ value: e.target.value, isFirstRender: false })}
              isInvalid={isInvalidSubject()}
              id="subject"
              type="text"
            />
            {isInvalidSubject() && <p className="text-danger">*Please fill out the subject</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control
              value={message.value}
              onChange={e => setMessage({ value: e.target.value, isFirstRender: false })}
              isInvalid={isInvalidMessage()}
              id="message"
              as="textarea"
              rows={3}
            />
            {isInvalidMessage() && <p className="text-danger">*Please fill out the message</p>}
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
