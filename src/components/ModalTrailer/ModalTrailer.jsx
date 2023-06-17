import React, { useRef, useEffect } from "react";
import "../ModalTrailer/ModalTrailer.scss";
import { Carousel, Modal } from "antd";

export default function ModalTrailer({ trailer, maPhim, open, handleToggle }) {
 
  const playerRef = useRef(null);

  const getId = (url) => {
    if (!url) return null;
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };
  const video_id = getId(trailer);

  const handleModalClose = () => {
    handleToggle(false);
  };

  useEffect(() => {
    if (!open && playerRef.current) {
      const iframe = playerRef.current;
      iframe.src = `https://www.youtube.com/embed/${video_id}`;
    }
  }, [open]);
  

  return (
    <Modal
      width={"60%"}
      onCancel={handleModalClose}
      open={open}
      footer={null}
      closeAfterTransition
      className="full-width-modal"
    >
      {open && (
        <div className="w-full">
          <div className="relative w-full h-full">
            <div className="flex w-full justify-center items-center">
              <iframe
                ref={playerRef}
                title={maPhim}
                width="100%"
                height={`${window.innerHeight}px`}
                src={`https://www.youtube.com/embed/${video_id}`}
                
                allowFullScreen
                className="w-full"
              />
            </div>
            {/* button close */}
            <div
              style={{
                fontSize: 50,
                fontWeight: "bold",
                top: 2,
                right: 10,
                cursor: "pointer",
                border: "5px solid #fff",
                borderRadius: "50%",
                width: 50,
                height: 50,
                zIndex: "9000",
              }}
              className="absolute flex justify-center items-center text-white p-6"
              onClick={handleModalClose}
            >
              X
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
