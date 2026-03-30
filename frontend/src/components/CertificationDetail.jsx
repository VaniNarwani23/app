import React from 'react';
import { Award, Calendar, Shield, ExternalLink, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

const CertificationDetail = ({ certification }) => {
  if (!certification) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-background rounded-3xl overflow-hidden">
      <div className="relative h-60 sm:h-72 overflow-hidden">
        <img
          src={certification.image}
          alt={certification.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8 flex items-center gap-3">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand rounded-2xl flex items-center justify-center shadow-lg">
            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <div>
            <p className="text-gray-300 text-xs sm:text-sm">Issued by</p>
            <p className="text-white font-semibold text-base sm:text-lg">{certification.issuer}</p>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 md:p-12">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {certification.title}
        </h1>

        <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
          <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 dark:bg-gray-700/50 rounded-xl">
            <Calendar className="w-4 h-4 text-brand" />
            <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">Issued: {certification.issueDate}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 dark:bg-gray-700/50 rounded-xl">
            <Shield className="w-4 h-4 text-green-500 dark:text-green-400" />
            <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">ID: {certification.credentialId}</span>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">About This Certification</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
            {certification.description}
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Skills Demonstrated</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certification.skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-700/30 rounded-xl"
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-200 text-sm sm:text-base">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={() => window.open(certification.verifyUrl, '_blank')}
          className="w-full bg-brand hover:bg-brand-accent text-brand-foreground py-6 rounded-xl text-base font-medium transition-all"
        >
          <ExternalLink size={20} className="mr-2" />
          Verify Certificate
        </Button>
      </div>
    </div>
  );
};

export default CertificationDetail;
