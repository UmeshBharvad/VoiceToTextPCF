/**
 * Voice to Text Control Component
 * @author Umesh Bharvad
 * @description A React component that implements voice-to-text functionality using the Web Speech API.
 * This component provides a user interface for voice input and converts speech to text in real-time.
 * @created 2025-09-13
 */

import * as React from 'react';
import { useState, useEffect } from 'react';

/**
 * Props interface for the VoiceToText component
 * @interface IVoiceToTextProps
 * @property {string} value - The current text value of the control
 * @property {function} onChange - Callback function to handle text changes
 * @property {boolean} disabled - Optional flag to disable the control
 */
export interface IVoiceToTextProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}

/**
 * VoiceToText Component
 * @component
 * @author Umesh Bharvad
 * @description Provides voice-to-text functionality with a simple user interface
 */
export const VoiceToText: React.FC<IVoiceToTextProps> = (props) => {
    // State to track whether voice recording is active
    const [isListening, setIsListening] = useState(false);
    // State to store the speech recognition instance
    const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
    // State to track error messages
    const [error, setError] = useState<string | null>(null);
    // State to track microphone status
    const [isMicrophoneAvailable, setIsMicrophoneAvailable] = useState<boolean>(true);
    // State to track speech recognition support
    const [isSupported, setIsSupported] = useState<boolean>(true);

    /**
     * Initialize speech recognition on component mount
     * @author Umesh Bharvad
     */
    /**
     * Check microphone availability
     * @author Umesh Bharvad
     */
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(() => {
                setIsMicrophoneAvailable(true);
                setError(null);
            })
            .catch((err) => {
                setIsMicrophoneAvailable(false);
                setError('Microphone access denied or not available');
                console.error('Microphone error:', err);
            });
    }, []);

    /**
     * Initialize speech recognition
     * @author Umesh Bharvad
     */
    useEffect(() => {
        // Check for browser support of SpeechRecognition
        if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
            setIsSupported(true);
            // Get the appropriate SpeechRecognition implementation
            const SpeechRecognitionImpl = (window.SpeechRecognition || window.webkitSpeechRecognition) as typeof SpeechRecognition;
            const recognitionInstance = new SpeechRecognitionImpl();
            
            // Configure speech recognition settings
            recognitionInstance.continuous = true; // Don't stop recording after first result
            recognitionInstance.interimResults = true; // Get results as user speaks
            recognitionInstance.lang = 'en-US'; // Set language to English

            /**
             * Handle speech recognition results
             * @param {SpeechRecognitionEvent} event - The speech recognition event
             */
            recognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
                // Convert results to text
                const transcript = Array.from(event.results)
                    .map(result => result[0]) // Get first alternative for each result
                    .map(result => result.transcript) // Extract transcript text
                    .join(''); // Combine all results
                
                // Update control value
                props.onChange(transcript);
            };

            /**
             * Handle speech recognition errors
             * @param {SpeechRecognitionErrorEvent} event - The error event
             */
            recognitionInstance.onerror = (event: SpeechRecognitionErrorEvent) => {
                console.error('Speech recognition error:', event.error);
                setIsListening(false); // Stop listening on error
            };

            // Store recognition instance in state
            setRecognition(recognitionInstance);
        }

        // Cleanup function to stop recognition when component unmounts
        return () => {
            if (recognition) {
                recognition.stop();
            }
        };
    }, []);

    /**
     * Toggle voice recording on/off
     * @author Umesh Bharvad
     * @description Starts or stops the speech recognition based on current state
     */
    const toggleListening = () => {
        if (!recognition) return; // Exit if speech recognition is not supported

        if (isListening) {
            recognition.stop(); // Stop recording
            setIsListening(false);
        } else {
            recognition.start(); // Start recording
            setIsListening(true);
        }
    };

    /**
     * Render the voice-to-text control
     * @returns {JSX.Element} The rendered component
     */
    return (
        <div className="voice-to-text-control" role="application" aria-label="Voice to text control">
            <div className="field-container">
                <div className="input-wrapper">
                    <input 
                        type="text"
                        value={props.value}
                        onChange={(e) => props.onChange(e.target.value)}
                        placeholder="Type or click microphone to speak..."
                        disabled={props.disabled}
                        aria-label="Voice to text input"
                        className={isListening ? 'recording' : ''}
                    />
                    <button 
                        onClick={toggleListening}
                        disabled={props.disabled || !recognition || !isMicrophoneAvailable || !isSupported}
                        className={`mic-button ${isListening ? 'recording' : ''}`}
                        aria-label={isListening ? 'Stop voice recording' : 'Start voice recording'}
                        title={isListening ? 'Stop Recording' : 'Start Recording'}
                    >
                        <span className="button-icon" aria-hidden="true">
                            {isListening ? '⏹' : '🎤'}
                        </span>
                    </button>
                </div>
                
                {/* Error Messages */}
                {(!isSupported || !isMicrophoneAvailable || error) && (
                    <div className="message-container">
                        {!isSupported && (
                            <div className="error-message" role="alert">
                                Browser not supported. Use Chrome, Edge, or Safari.
                            </div>
                        )}
                        {!isMicrophoneAvailable && (
                            <div className="error-message" role="alert">
                                Please enable microphone access.
                            </div>
                        )}
                        {error && (
                            <div className="error-message" role="alert">
                                {error}
                            </div>
                        )}
                    </div>
                )}

                {/* Recording Status */}
                {isListening && (
                    <div className="status-indicator" role="status" aria-live="polite">
                        Recording...
                    </div>
                )}
            </div>
        </div>
    );
};
