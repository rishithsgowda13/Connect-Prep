import React from 'react';
import { mockBackend } from '../../services/mockBackend';
import { CheckCircle, XCircle } from 'lucide-react';
import './FeatureStyles.css';

const Attendance = () => {
    const { attendance } = mockBackend;

    return (
        <div className="feature-container">
            <h1>Attendance Tracking</h1>

            <div className="attendance-stats">
                <div className="stat-box success">
                    <h3>Present</h3>
                    <span className="value">{attendance.present}%</span>
                </div>
                <div className="stat-box warning">
                    <h3>Absent</h3>
                    <span className="value">{100 - attendance.present}%</span>
                </div>
                <div className="stat-box info">
                    <h3>Total Classes</h3>
                    <span className="value">{attendance.total}</span>
                </div>
            </div>

            <div className="history-section">
                <h3>Recent History</h3>
                <div className="history-list">
                    {attendance.history.map((record, index) => (
                        <div key={index} className="history-item">
                            <span className="date">{record.date}</span>
                            <span className={`status ${record.status.toLowerCase()}`}>
                                {record.status === 'Present' ? <CheckCircle size={16} /> : <XCircle size={16} />}
                                {record.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Attendance;
