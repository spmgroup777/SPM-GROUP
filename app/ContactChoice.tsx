"use client";

import { useState } from "react";

const CONTACTS = [
  {
    phone: "+919966051151",
    display: "+91 99660 51151",
  },
  {
    phone: "+917997105675",
    display: "+91 79971 05675",
  },
];

export default function ContactChoice() {
  const [selectedPhone, setSelectedPhone] =
    useState<string | null>(null);

  const selectedContact = CONTACTS.find(
    (contact) => contact.phone === selectedPhone
  );

  function handleCall() {
    if (!selectedContact) {
      return;
    }

    window.location.href =
      `tel:${selectedContact.phone}`;
  }

  function handleWhatsApp() {
    if (!selectedContact) {
      return;
    }

    const whatsappNumber =
      selectedContact.phone.replace("+", "");

    const message = encodeURIComponent(
      "Hello SPM Green Tech & Developers, I would like to know more about your projects."
    );

    window.location.href =
      `https://wa.me/${whatsappNumber}?text=${message}`;
  }

  return (
    <>
      {/* =====================================================
          CONTACT NUMBERS
      ===================================================== */}

      <div className="numbers">

        {CONTACTS.map((contact) => (

          <button
            key={contact.phone}
            type="button"
            className="contactNumber"
            onClick={() =>
              setSelectedPhone(contact.phone)
            }
          >
            {contact.display}
          </button>

        ))}

      </div>


      {/* =====================================================
          CONTACT POPUP
      ===================================================== */}

      {selectedContact && (

        <div
          className="contactOverlay"
          onClick={() =>
            setSelectedPhone(null)
          }
        >

          <div
            className="contactChoice"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* Close */}

            <button
              type="button"
              className="contactClose"
              onClick={() =>
                setSelectedPhone(null)
              }
              aria-label="Close"
            >
              ×
            </button>


            {/* Heading */}

            <p className="contactChoiceEyebrow">
              CONTACT SPM
            </p>

            <h3>
              How would you like
              <span>
                {" "}to contact us?
              </span>
            </h3>

            <p className="contactChoiceNumber">
              {selectedContact.display}
            </p>


            {/* Contact options */}

            <div className="contactChoiceButtons">

              {/* CALL */}

              <button
                type="button"
                className="contactCallButton"
                onClick={handleCall}
              >

                <span>
                  📞
                </span>

                <div>

                  <strong>
                    Call on Phone
                  </strong>

                  <small>
                    Open your phone calling app
                  </small>

                </div>

              </button>


              {/* WHATSAPP */}

              <button
                type="button"
                className="contactWhatsappButton"
                onClick={handleWhatsApp}
              >

                <span>
                  💬
                </span>

                <div>

                  <strong>
                    Chat on WhatsApp
                  </strong>

                  <small>
                    Open WhatsApp and start chatting
                  </small>

                </div>

              </button>

            </div>


            {/* Cancel */}

            <button
              type="button"
              className="contactCancel"
              onClick={() =>
                setSelectedPhone(null)
              }
            >
              Cancel
            </button>

          </div>

        </div>

      )}

    </>
  );
}