import React from 'react';
import { Award, Calendar, Shield, ExternalLink, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

const CertificationDetail = ({ certification }) => {
  if (!certification) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl overflow-hidden">
      <div className="relative h-72 overflow-hidden">
        <img
          src={certification.image}
          alt={certification.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        
        <div className="absolute bottom-6 left-8 flex items-center gap-3">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Award className="w-8 h-8 text-white" />
          </div>
          <div>
            <p className="text-gray-300 text-sm">Issued by</p>
            <p className="text-white font-semibold text-lg">{certification.issuer}</p>
          </div>
        </div>
      </div>

      <div className="p-8 md:p-12">
        <h1
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {certification.title}
        </h1>

        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700/50 rounded-xl">
            <Calendar className="w-4 h-4 text-pink-500 dark:text-pink-400" />
            <span className="text-gray-600 dark:text-gray-300 text-sm">Issued: {certification.issueDate}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700/50 rounded-xl">
            <Shield className="w-4 h-4 text-green-500 dark:text-green-400" />
            <span className="text-gray-600 dark:text-gray-300 text-sm">ID: {certification.credentialId}</span>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">About This Certification</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            {certification.description}
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Skills Demonstrated</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {certification.skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-700/30 rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-200">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={() => window.open(certification.verifyUrl, '_blank')}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-6 rounded-xl text-base font-medium transition-all"
        >
          <ExternalLink size={20} className="mr-2" />
          Verify Certificate
        </Button>
      </div>
    </div>
  );
};

export default CertificationDetail;
