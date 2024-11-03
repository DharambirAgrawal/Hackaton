"use client";
import { Gallery } from "@/components/Gallery";

import { Button } from "@/components/ui/button";
import { Upload, Image as ImageIcon, Send } from "lucide-react";
import Image from "next/image";
import { useState, useCallback, CSSProperties } from "react";
import { useDropzone } from "react-dropzone";
import { X } from "lucide-react";
import Modal from 'react-modal';

interface ModalStyles {
  overlay?: CSSProperties;
  content?: CSSProperties;
}

const customStyles: ModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)', // Dark overlay
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%', // Adjust width as needed
    //maxWidth: '600px', // Set a maximum width
    maxHeight: '90%', // You can set a specific height if needed
    padding: '20px',
    overflowY: 'auto',
    borderRadius: '10px', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
    backgroundColor: 'white', 
  },
};


Modal.setAppElement('body');


export default function ImageUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<any>([]);

  //let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
    setFile(null);
  }


  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const handleSubmit = async () => {
    if (file) {
      console.log(file);
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch(
          `https://hackaton-pk3q.onrender.com/api/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log("Upload successful:", result.data);
        setData(result.data);
        openModal();
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        // Reset the file state after upload
        setFile(null);
      }
    }
  };

  return (
    <section id="imageUploader" className="min-h-[80vh] sm:py-4 py-16 sm:px-2">
      <div id="#image-uploader" className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
        <div
          {...getRootProps()}
          className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${
            isDragActive
              ? "border-primary bg-primary/10"
              : "border-gray-300 hover:border-primary"
          }`}
        >
          <input {...getInputProps()} />
          {file ? (
            <div className="relative">
              <Image
                src={URL.createObjectURL(file)}
                alt="Preview"
                width={300}
                height={300}
                className="mx-auto rounded-lg object-cover"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFile(null);
                }}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            <div className="text-gray-500">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2">
                Drag & drop an image here, or click to select
              </p>
            </div>
          )}
        </div>
        <Button onClick={handleSubmit} disabled={!file} className="w-full mt-4">
          {file ? "Upload Image" : "Select an Image"}
        </Button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      > 
        <div className="relative overflow-auto">
          <Gallery information={data} />
          <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeModal();
                  }}
                  className="fixed z-10 top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  <X size={20} />
          </button>
        </div>
        
      </Modal>
       
    </section>
  );
}
