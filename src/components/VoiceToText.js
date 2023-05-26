import { useState } from 'react';
import styles from '../styles/VoiceToText.module.css';

const VoiceToText = () => {
  const [transcript, setTranscript] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    setIsRecording(true);
    recognition.start();
  };

  const stopRecording = () => {
    setIsRecording(false);
    recognition.stop();
  };

  const handleSpeechRecognition = (e) => {
    const lastResultIndex = e.results.length - 1;
    const lastTranscript = e.results[lastResultIndex][0].transcript;
    setTranscript((prevTranscript) => prevTranscript + lastTranscript + ' ');
  };

  const SpeechRecognition = typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  if (recognition) {
    recognition.continuous = true;
    recognition.onresult = handleSpeechRecognition;
  }

  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <div className={`table-responsive ${styles.responsiveTable}`}>
          <table className={`table table-bordered ${styles.table}`}>
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }, (_, index) => (
                <tr key={index}>
                  <td>Before we continue (Customer name), please note that African Bank is an authorised Financial Services and Credit Provider, it holds Professional Indemnity and Fidelity Insurance Cover, and as a standard procedure all our calls are recorded for quality and security purposes. I am a registered representative authorised to sell Long Term Insurance Subcategory A, B1- A and B2 -A Which is Funeral Policies & Credit Life.s {index + 1}</td>
                  <td>Data {index + 1}</td>
                  <td>Data {index + 1}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className={styles.buttonsContainer}>
                  <button
                    onClick={startRecording}
                    disabled={isRecording}
                    className={`${styles.btn} ${styles.btnStartRecording}`}
                  >
                    Start Recording
                  </button>
                  <button
                    onClick={stopRecording}
                    disabled={!isRecording}
                    className={`${styles.btn} ${styles.btnStopRecording}`}
                  >
                    Stop Recording
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className={styles.voiceToTextContainer}>
          <h1 className={styles.heading}>Voice to Text</h1>

          <div className={styles.transcript}>{transcript}</div>
        </div>
      </div>
    </div>
  );
};

export default VoiceToText;
