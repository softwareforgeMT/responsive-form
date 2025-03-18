'use client';

import { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';


const SignatureBox = () => {
  const sigCanvas = useRef(null);
  const [imageURL, setImageURL] = useState(null);
  const [isSigned, setIsSigned] = useState(false);

  const clearSignature = () => {
    sigCanvas.current.clear();
    setImageURL(null);
    setIsSigned(false); // Reset placeholder visibility
  };

  const saveSignature = () => {
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'));
  };

  const handleBegin = () => {
    setIsSigned(true); // Hide placeholder when drawing starts
  };

  return (
    <div className="max-w-md mt-10 p-6 bg-white-100">
      <h3 className="text-lg font-medium text-gray-900">
        Signature <span className="text-red-500">*</span>
      </h3>
      <div className="relative border border-gray-300 rounded-md p-2 bg-white">
        {!isSigned && (
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            Sign here...
          </span>
        )}
        <SignatureCanvas
          ref={sigCanvas}
          penColor="black"
          onBegin={handleBegin} // Detect when user starts drawing
          canvasProps={{ className: 'w-full h-32' }}
        />
      </div>
      <div className="flex justify-end mt-1">
        <button
          type="button"
          onClick={clearSignature}
          className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded"
        >
          Clear
        </button>
      </div>
      {imageURL && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Saved Signature:</h3>
          <img src={imageURL} alt="Saved Signature" className="border border-gray-300 rounded-md mt-2" />
        </div>
      )}
      
    </div>
  );
};

export default SignatureBox;
