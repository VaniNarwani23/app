import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Award, Calendar, Shield, ExternalLink, CheckCircle } from 'lucide-react';
import { certifications } from '../data/mock';
import { Button } from './ui/button';

const CertificationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const certification = certifications.find((c) => c.id === parseInt(id));

  if (!certification) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Certificate Not Found</h1>
          <Button onClick={() => navigate('/')} className="bg-pink-500 hover:bg-pink-600">
            Go Back Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Close button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 right-6 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
      >
        <span className="text-2xl">&times;</span>
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>

        {/* Certificate Card */}
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50">
          {/* Certificate Image */}
          <div className="relative h-72 overflow-hidden">
            <img
              src={certification.image}
              alt={certification.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
            
            {/* Badge overlay */}
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

          {/* Certificate Info */}
          <div className="p-8 md:p-12">
            {/* Title */}
            <h1
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {certification.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 rounded-xl">
                <Calendar className="w-4 h-4 text-pink-400" />
                <span className="text-gray-300 text-sm">Issued: {certification.issueDate}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 rounded-xl">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-gray-300 text-sm">ID: {certification.credentialId}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">About This Certification</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {certification.description}
              </p>
            </div>

            {/* Skills Gained */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">Skills Demonstrated</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {certification.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 px-4 py-3 bg-gray-700/30 rounded-xl"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-200">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <Button
              onClick={() => window.open(certification.verifyUrl, '_blank')}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-6 rounded-xl text-base font-medium transition-all"
            >
              <ExternalLink size={20} className="mr-2" />
              Verify Certificate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationDetail;
