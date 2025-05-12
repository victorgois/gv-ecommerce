"use client";
import { useTranslation } from "@/hooks/useTranslation";
import { useRouter } from "next/navigation";
import React from "react";

const AuthRequired = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleLogin = () => {
    router.push("/sign-in");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <div className="auth-modal-content">
          <div className="auth-modal-header">
            <h4>{t("Login required")}</h4>
            <button className="auth-modal-close" onClick={onClose}>
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="auth-modal-body">
            <p>{t("You need to be logged in")}</p>
          </div>
          <div className="auth-modal-footer">
            <button className="cancel-btn" onClick={onClose}>
              {t("Cancel")}
            </button>
            <button className="continue-btn" onClick={handleLogin}>
              {t("Continue")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthRequired;
