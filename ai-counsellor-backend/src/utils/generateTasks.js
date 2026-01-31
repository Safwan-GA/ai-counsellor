export const generateApplicationTasks = (universityId) => {
return [
{ title: 'Write SOP', description: 'Draft your Statement of Purpose', universityId },
{ title: 'Prepare Resume', description: 'Create academic CV', universityId },
{ title: 'Collect Transcripts', description: 'Request official transcripts', universityId },
{ title: 'Book Exam', description: 'Schedule IELTS/TOEFL/GRE', universityId },
{ title: 'Request LORs', description: 'Ask professors for recommendations', universityId },
];
};