import "../App.css"
import { React, useState } from "react";
import { Link } from "react-router";

const HomePage = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  /* const navigateToJobForm = () => {
    // Placeholder navigation - replace with actual routing (e.g., React Router)
    alert('Redirecting to Job Reflection Form...');
    navigate('/job-reflection');
    // Example for React Router: navigate('/job-reflection-form');
  };

  const navigateToLogs = () => {
    // Placeholder navigation - replace with actual routing
    alert('Redirecting to Logs page...');
    // Example for React Router: navigate('/logs');
  }; */

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-12 shadow-2xl max-w-md w-full border border-white/20">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Job Reflection Portal
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Track your career journey and analyze your professional growth
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="space-y-6 mt-10">
          <Link 
            to="/job-reflection"
            className={`
              w-full py-4 px-8 rounded-full text-white font-semibold text-lg
              bg-gradient-to-r from-indigo-500 to-purple-600
              hover:from-indigo-600 hover:to-purple-700
              transform transition-all duration-300 ease-in-out
              shadow-lg hover:shadow-xl`}>
                Job Reflection Form
          </Link>
        </div>
        <div className="space-y-6 mt-10">
          <Link 
            to="/job-reflection-logs"
            className={`
              w-full py-4 px-8 rounded-full text-white font-semibold text-lg
              bg-gradient-to-r from-indigo-500 to-purple-600
              hover:from-indigo-600 hover:to-purple-700
              transform transition-all duration-300 ease-in-out
              shadow-lg hover:shadow-xl`}>
                Job Reflection Logs
          </Link>

          {/* <button
            onClick={navigateToJobForm}
            onMouseEnter={() => setHoveredButton('form')}
            onMouseLeave={() => setHoveredButton(null)}
            className={`
              w-full py-4 px-8 rounded-full text-white font-semibold text-lg
              bg-gradient-to-r from-indigo-500 to-purple-600
              hover:from-indigo-600 hover:to-purple-700
              transform transition-all duration-300 ease-in-out
              shadow-lg hover:shadow-xl
              ${hoveredButton === 'form' ? 'scale-105 -translate-y-1' : ''}
              relative overflow-hidden group
            `}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative flex items-center justify-center">
              <span className="mr-3 text-xl">📝</span>
              Job Reflection Form
            </div>
          </button> */}

          {/* <button
            onClick={navigateToLogs}
            onMouseEnter={() => setHoveredButton('logs')}
            onMouseLeave={() => setHoveredButton(null)}
            className={`
              w-full py-4 px-8 rounded-full text-white font-semibold text-lg
              bg-gradient-to-r from-pink-500 to-rose-500
              hover:from-pink-600 hover:to-rose-600
              transform transition-all duration-300 ease-in-out
              shadow-lg hover:shadow-xl
              ${hoveredButton === 'logs' ? 'scale-105 -translate-y-1' : ''}
              relative overflow-hidden group
            `}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative flex items-center justify-center">
              <span className="mr-3 text-xl">📊</span>
              View Logs
            </div>
          </button> */}
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-500 text-sm mt-4">
            Welcome to your professional growth dashboard
          </p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* <style tsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style> */}
    </div>
  );
};

export default HomePage;