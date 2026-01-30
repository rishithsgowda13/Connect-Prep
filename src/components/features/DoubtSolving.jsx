import React, { useState } from 'react';
import { mockBackend } from '../../services/mockBackend';
import { MessageCircle, Video, Upload, User, Check, Clock, Mic } from 'lucide-react';
import './FeatureStyles.css';

const DoubtSolving = () => {
    const { doubts, tutors } = mockBackend;
    const [askMode, setAskMode] = useState(false);
    const [matching, setMatching] = useState(false);
    const [matchedTutor, setMatchedTutor] = useState(null);
    const [doubtText, setDoubtText] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleAskDoubt = (e) => {
        e.preventDefault();
        setMatching(true);

        // Simulate AI Matching
        setTimeout(() => {
            // Find a random tutor for demo
            const tutor = tutors[Math.floor(Math.random() * tutors.length)];
            setMatchedTutor(tutor);
            setMatching(false);
        }, 2000);
    };

    const handleJoinCall = () => {
        alert(`Connecting to secure Video Call with ${matchedTutor.name}...`);
    };

    return (
        <div className="feature-container">
            <div className="feature-header">
                <h1>1-to-1 Doubt Solving</h1>
                {!askMode && (
                    <button className="login-btn" style={{ width: 'auto', padding: '0.5rem 1rem' }} onClick={() => setAskMode(true)}>
                        <Video size={18} style={{ marginRight: '8px' }} /> Connect with Tutor
                    </button>
                )}
            </div>

            {askMode ? (
                <div className="grid-container" style={{ gridTemplateColumns: 'minmax(300px, 600px)', justifyContent: 'center' }}>
                    <div className="card" style={{ textAlign: 'center' }}>
                        {!matchedTutor ? (
                            <>
                                <h3>Upload Your Doubt</h3>
                                <p style={{ color: '#888', marginBottom: '1.5rem' }}>Our AI will find the best expert for you instantly.</p>

                                {matching ? (
                                    <div style={{ padding: '2rem' }}>
                                        <div className="spinner" style={{ margin: '0 auto 1rem', width: '40px', height: '40px', border: '4px solid #333', borderTop: '4px solid #646cff', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                                        <p>Analyzing Topic...</p>
                                        <p style={{ color: '#666', fontSize: '0.9rem' }}>Matching with active tutors...</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleAskDoubt} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <textarea
                                            placeholder="Type your question here..."
                                            className="filter-select"
                                            style={{ minHeight: '100px', cursor: 'text' }}
                                            value={doubtText}
                                            onChange={(e) => setDoubtText(e.target.value)}
                                            required
                                        />

                                        <div style={{ display: 'flex', gap: '1rem' }}>
                                            <div className="file-upload-box" style={{ flex: 1, border: '1px dashed #666', padding: '1rem', borderRadius: '8px', cursor: 'pointer' }}>
                                                <input type="file" id="doubt-file" style={{ display: 'none' }} onChange={(e) => setSelectedFile(e.target.files[0])} />
                                                <label htmlFor="doubt-file" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                                                    <Upload size={20} />
                                                    <span style={{ fontSize: '0.8rem' }}>{selectedFile ? selectedFile.name : 'Photo / Video'}</span>
                                                </label>
                                            </div>
                                            <div className="file-upload-box" style={{ flex: 1, border: '1px dashed #666', padding: '1rem', borderRadius: '8px', cursor: 'pointer', opacity: 0.7 }}>
                                                <Mic size={20} />
                                                <span style={{ fontSize: '0.8rem', display: 'block', marginTop: '0.5rem' }}>Record Audio</span>
                                            </div>
                                        </div>

                                        <button type="submit" className="login-btn">Find Tutor</button>
                                        <button type="button" className="icon-btn" style={{ background: 'transparent', border: 'none' }} onClick={() => setAskMode(false)}>Cancel</button>
                                    </form>
                                )}
                            </>
                        ) : (
                            <div style={{ animation: 'fadeIn 0.5s ease' }}>
                                <div style={{ width: '80px', height: '80px', background: '#333', borderRadius: '50%', margin: '0 auto 1rem', border: '3px solid #4ade80', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <User size={40} color="#fff" />
                                </div>
                                <h2 style={{ color: '#4ade80', margin: '0.5rem 0' }}>It's a Match!</h2>
                                <h3 style={{ margin: 0 }}>{matchedTutor.name}</h3>
                                <p style={{ color: '#888', margin: '0.5rem 0 1.5rem' }}>Expert in {matchedTutor.specialization.join(', ')}</p>

                                <button className="login-btn" style={{ background: '#4ade80', color: '#000', fontSize: '1.2rem', padding: '1rem' }} onClick={handleJoinCall}>
                                    <Video size={24} style={{ marginRight: '10px' }} /> Join Video Call
                                </button>
                                <button type="button" className="icon-btn" style={{ background: 'transparent', border: 'none', marginTop: '1rem', width: '100%' }} onClick={() => { setMatchedTutor(null); setAskMode(false); }}>Close</button>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="grid-container" style={{ gridTemplateColumns: '1fr' }}>
                    <div className="card">
                        <h3>Previous Doubts</h3>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {doubts.map((d) => (
                                <div key={d.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#333', borderRadius: '8px' }}>
                                    <div>
                                        <h4 style={{ margin: 0 }}>{d.question}</h4>
                                        <span style={{ fontSize: '0.8rem', color: '#888' }}>{d.subject}</span>
                                    </div>
                                    <span style={{ color: d.status === 'Resolved' ? '#4ade80' : '#f59e0b', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        {d.status === 'Resolved' ? <Check size={16} /> : <Clock size={16} />} {d.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <style>{`
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default DoubtSolving;
