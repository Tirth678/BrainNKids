import React from 'react';
import { X } from 'lucide-react';

interface BranchesPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const branches = [
  {
    name: 'MANJALPUR',
    phone: '99785 84763',
    address: 'Manjalpur, Vadodara'
  },
  {
    name: 'MANEJA',
    phone: '87580 43853',
    address: 'Maneja, Vadodara'
  },
  {
    name: 'KALALI ROAD',
    phone: '95129 65413',
    address: 'Kalali Road, Vadodara'
  },
  {
    name: 'KHODIYAR NAGAR',
    phone: '93282 09462',
    address: 'Khodiyar Nagar, Vadodara'
  },
  {
    name: 'WAGHODIA ROAD',
    phone: '95103 85760',
    address: 'Waghodia Road, Vadodara'
  }
];

const BranchesPopup = ({ isOpen, onClose }: BranchesPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Our Branches</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {branches.map((branch, index) => (
              <div 
                key={index} 
                className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors"
              >
                <h3 className="text-xl font-semibold text-red-500 mb-2">{branch.name}</h3>
                <p className="text-gray-300 mb-2">{branch.address}</p>
                <a 
                  href={`tel:${branch.phone}`}
                  className="text-white hover:text-red-400 transition-colors flex items-center"
                >
                  <svg 
                    className="w-5 h-5 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                    />
                  </svg>
                  {branch.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchesPopup; 