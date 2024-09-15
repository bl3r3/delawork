"use client";
import { useState, useEffect } from "react";

const CookieModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowModal(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowModal(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div style={modalContainerStyle as React.CSSProperties}>
      <div style={modalStyle as React.CSSProperties}>
        <p style={textStyle as React.CSSProperties}>
          Utilizamos cookies para mejorar su experiencia en nuestro sitio web.
          Al aceptar, nos permite hacerlo.
        </p>
        <div style={buttonContainerStyle}>
          <button onClick={handleAccept} style={acceptButtonStyle}>
            Aceptar
          </button>
          <button onClick={handleDecline} style={declineButtonStyle}>
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};

// Estilos
const modalContainerStyle = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semi-transparente
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: "#0052A1", // Color corporativo
  color: "#FFFFFF", // Texto blanco
  padding: "20px",
  borderRadius: "10px",
  maxWidth: "600px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const textStyle = {
  fontSize: "16px",
  marginBottom: "20px",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
};

const acceptButtonStyle = {
  backgroundColor: "#FFFFFF",
  color: "#0052A1",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
};

const declineButtonStyle = {
  backgroundColor: "#FFFFFF",
  color: "#0052A1",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default CookieModal;
