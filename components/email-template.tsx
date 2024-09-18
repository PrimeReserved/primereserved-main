import * as React from 'react';

interface EmailTemplateProps {
  fullName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  serviceRequired: string;
  projectDetails: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  fullName,companyName, email, phoneNumber, serviceRequired, projectDetails
}) => (
  <div>
    <h1>Welcome, {fullName}!</h1>
    <p>{companyName}</p>
    <p>{email}</p>
    <p>{phoneNumber}</p>
    <p>{serviceRequired}</p>
    <p>{projectDetails}</p>
  </div>
);
