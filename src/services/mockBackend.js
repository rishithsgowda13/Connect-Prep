export const mockBackend = {
    alumni: [
        { id: 1, name: 'John Doe', batch: '2022', role: 'Software Engineer', company: 'Google' },
        { id: 2, name: 'Jane Smith', batch: '2021', role: 'Product Manager', company: 'Microsoft' },
        { id: 3, name: 'Alice Johnson', batch: '2023', role: 'Data Scientist', company: 'Amazon' },
        { id: 4, name: 'Bob Wilson', batch: '2020', role: 'Frontend Lead', company: 'Meta' },
    ],
    studyMaterials: [
        { id: 1, title: 'Calculus III - Integration Techniques', author: 'Dr. Srinivasan', category: 'Teacher Note' },
        { id: 2, title: 'Network Security Fundamentals', author: 'Prof. Ramesh', category: 'Teacher Note' },
        { id: 3, title: 'OS Deadlock Prevention Mindmap', author: 'Rahul Gupta', verifiedBy: 'Prof. Mehra', category: 'Best Student Note' },
        { id: 4, title: 'Database Normalization Short Notes', author: 'Sanjana K', verifiedBy: 'Dr. Reddy', category: 'Best Student Note' },
    ],
    pyqs: [
        { id: 1, question: 'Explain the difference between TCP and UDP with examples.', subject: 'Computer Networks', yearsAsked: ['2023', '2021', '2019'] },
        { id: 2, question: 'Solve the Fourier Transform of a rectangular pulse.', subject: 'Signals & Systems', yearsAsked: ['2022', '2020'] },
        { id: 3, question: 'Discuss various page replacement algorithms.', subject: 'Operating Systems', yearsAsked: ['2023', '2022', '2018'] },
    ],
    attendance: {
        curriculums: ['B.E - Computer Science (2021 Scheme)', 'B.E - Electronics (2021 Scheme)'],
        terms: ['III Semester', 'IV Semester', 'V Semester'],
        courseSummary: [
            { course: 'Operating Systems (21CS52)', present: 42, total: 45, percentage: 93 },
            { course: 'Computer Networks (21CS51)', present: 38, total: 45, percentage: 84 },
            { course: 'Theory of Computation (21CS54)', present: 28, total: 45, percentage: 62 },
        ],
        daywise: [
            { course: 'Operating Systems', date: '2025-03-05', status: 'Present', docStatus: 'Verified' },
            { course: 'Computer Networks', date: '2025-03-05', status: 'Present', docStatus: 'Verified' },
            { course: 'Theory of Computation', date: '2025-03-04', status: 'Absent', docStatus: 'Not Applicable' },
        ]
    },
    getAnalysis: (fileName) => {
        return {
            score: 85,
            comparison: [
                { q: 1, topic: 'Networking', status: 'Excellent', feedback: 'Your explanation of the OSI model matches the reference exactly.' },
                { q: 2, topic: 'Subnetting', status: 'Needs Improvement', feedback: 'Calculations for Host ID were slightly off. Refer to page 42 of course notes.' },
                { q: 3, topic: 'Security', status: 'Excellent', feedback: 'Good use of diagrams to explain RSA encryption.' },
            ]
        };
    },
    doubts: [
        { id: 1, question: 'How to implement Red-Black Tree rotation?', subject: 'Data Structures', status: 'Resolved' },
        { id: 2, question: 'Difference between IPv4 and IPv6 headers?', subject: 'Computer Networks', status: 'Pending' },
    ],
    tutors: [
        { id: 1, name: 'Aditya Hegde', specialization: ['Data Structures', 'Algorithms'] },
        { id: 2, name: 'Sanjana Bhat', specialization: ['Computer Networks', 'OS'] },
    ],
    p2pSchedule: [
        { id: 1, topic: 'Big O Notation & Complexity', tutor: 'Rahul M', time: '2025-03-12 10:30AM', venue: 'Library Seminar Hall', studentsRegistered: 45 },
        { id: 2, topic: 'Introduction to React Hooks', tutor: 'Priya S', time: '2025-03-14 02:00PM', venue: 'Lab 4', studentsRegistered: 28 },
    ],
    questionPapers: [
        { id: 1, title: 'Advanced Data Structures - Sem End Exam', year: '2023', subject: 'CS', type: 'Semester' },
        { id: 2, title: 'Digital Signal Processing - IA-2', year: '2024', subject: 'EC', type: 'Internal' },
    ],
    results: [
        { id: 1, exam: 'V Semester End Exam', sgpa: 8.75, cgpa: 8.42, status: 'Pass' },
    ],
    groups: [
        { id: 1, name: 'Cloud Computing Enthusiasts', members: 12, topic: 'AWS/Azure' },
    ],
    marathons: [
        { id: 1, title: 'Mid-Sem Prep: Discrete Math', date: '2025-03-15', duration: '4 Hours' },
    ],
    p2p: [
        { id: 1, mentor: 'Suresh Kumar', subject: 'Python for Data Science', rating: 4.8 },
    ],
    library: {
        books: [
            { id: 1, title: 'Clean Code', author: 'Robert C. Martin', available: true },
            { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', available: false },
        ]
    }
};
