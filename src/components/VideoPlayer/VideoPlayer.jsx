import React, { useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import "./VideoPlayer.css"; // Import CSS file

const VideoPlayer = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(null);

    const captureFrame = async () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        if (video && ctx) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Convert canvas image to Tensor
            const imageTensor = tf.browser.fromPixels(canvas);
            console.log("Captured Tensor:", imageTensor.shape);

            // Convert canvas to data URL for preview
            const imageDataUrl = canvas.toDataURL("image/png");
            setImageSrc(imageDataUrl);

            // Convert image to Blob (Bitstream)
            canvas.toBlob((blob) => {
                if (blob) {
                    const reader = new FileReader();
                    reader.readAsArrayBuffer(blob); // Convert Blob to ArrayBuffer (Binary)
                    reader.onloadend = () => {
                        const arrayBuffer = reader.result;
                        console.log("Bitstream (ArrayBuffer):", new Uint8Array(arrayBuffer)); 
                    };
                }
            }, "image/png");
        }
    };

    const convertVideoToBitstream = async () => {
        try {
            // Fetch the video file
            const response = await fetch("/car.mp4"); // Ensure the correct path
            const blob = await response.blob(); // Convert response to Blob
            console.log("Video Blob:", blob);

            // Convert Blob to ArrayBuffer
            const arrayBuffer = await blob.arrayBuffer();
            const bitstream = new Uint8Array(arrayBuffer);

            // Log the raw binary data
            console.log("Video Bitstream (Uint8Array):", bitstream);
        } catch (error) {
            console.error("Error converting video to bitstream:", error);
        }
    };

    return (
        <div className="video-container">
            <h1>Video Frame Capture</h1>
            <video ref={videoRef} className="video-player" controls>
                <source src="/car.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="button-container">
                <button onClick={captureFrame} className="btn">
                    Capture Frame
                </button>
                <button onClick={convertVideoToBitstream} className="btn">
                    Convert Video to Bitstream
                </button>
            </div>

            <canvas ref={canvasRef} className="hidden-canvas"></canvas>

            {imageSrc && (
                <div className="image-preview">
                    <h3>Captured Frame</h3>
                    <img src={imageSrc} alt="Captured Frame" className="captured-image" />
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;
