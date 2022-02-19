import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Alert from "react-bootstrap/Alert";

import { useState } from "react";
import { useLanguageContext } from "../LanguageContext";
import emailjs from "@emailjs/browser";
import { translations } from "../translations";

const STATUS = {
  UNSUBMITTED: "unsubmitted",
  LOADING: "loading",
  SUCCESS: "success",
  FAILED: "failed",
};

export default function ContactModal({ show, handleClose }) {
  const { language } = useLanguageContext();

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
    if (fields.email.value === "") return translations.contactMeModal.emptyEmailMessage[language];
    if (!emailRegEx.test(fields.email.value))
      return translations.contactMeModal.wrongEmailMessage[language];
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
      });
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-uppercase">
          {translations.contactMeModal.title[language]}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert
          show={showAlert}
          variant={status === STATUS.SUCCESS ? "success" : "danger"}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          {
            translations.contactMeModal[
              status === STATUS.SUCCESS ? "successSubmitAlert" : "failedSubmitAlert"
            ][language]
          }
        </Alert>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">{translations.contactMeModal.name[language]}</Form.Label>
            <Form.Control
              value={fields.name.value}
              name="name"
              onChange={handleFieldChange}
              isInvalid={isInvalidName}
              type="text"
            />
            {isInvalidName && (
              <p className="text-danger">
                {translations.contactMeModal.emptyNameMessage[language]}
              </p>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">{translations.contactMeModal.email[language]}</Form.Label>
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
            <Form.Label htmlFor="subject">
              {translations.contactMeModal.subject[language]}
            </Form.Label>
            <Form.Control
              value={fields.subject.value}
              name="subject"
              onChange={handleFieldChange}
              isInvalid={isInvalidSubject}
              id="subject"
            />
            {isInvalidSubject && (
              <p className="text-danger">
                {translations.contactMeModal.emptySubjectMessage[language]}
              </p>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="message">
              {translations.contactMeModal.message[language]}
            </Form.Label>
            <Form.Control
              value={fields.message.value}
              name="message"
              onChange={handleFieldChange}
              isInvalid={isInvalidMessage}
              as="textarea"
              rows={3}
            />
            {isInvalidMessage && (
              <p className="text-danger">
                {translations.contactMeModal.emptyMessageMessage[language]}
              </p>
            )}
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
                  {translations.contactMeModal.loading[language]}
                </>
              ) : (
                translations.contactMeModal.send[language]
              )}
            </Button>
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
