import React from "react";
import { Button, Modal, Card } from "react-bootstrap";
import useAppInstallPrompt from "./useAppInstallPrompt";
import PwaIcon from "./pwa.ico";

//prompts users to install app on devices
//rendered once a day; only on mobile
export const PwaPrompt = () => {
  const [appInstallPrompt, onPromptClick] = useAppInstallPrompt();

  if (!appInstallPrompt) {
    return null;
  }
  return (
    <Modal show={true}>
      <Modal.Header>
        <img
          className="mx-auto"
          style={{
            borderTopRightRadius: "50%",
            borderTopLeftRadius: "50%",
          }}
          width="40rem"
          src={PwaIcon}
          alt="Icon"
        />
      </Modal.Header>
      <Modal.Body>
        <Card.Text className="text-center">
          Open browser menu and tap &quot;Add to Home Screen&quot; to install
          the app
        </Card.Text>
        <div className="d-flex justify-content-center">
          <Button onClick={onPromptClick}>Close</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
