import React from 'react';
import { Phone, Navigation } from 'lucide-react';
import type { SearchResult } from '../types';

interface HospitalCardProps {
  result: SearchResult;
}

export function HospitalCard({ result }: HospitalCardProps) {
  const { hospital, distance, specialist } = result;

  const getDirectionsUrl = () => {
    const destination = encodeURIComponent(hospital.address);
    return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900">{hospital.name}</h3>
      <p className="text-gray-600 mt-2">{hospital.address}</p>
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-gray-700">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <Navigation className="h-5 w-5 text-blue-600" />
          </div>
          <span>{distance} away</span>
        </div>
        <div className="flex items-center text-gray-700">
          <div className="bg-green-100 p-2 rounded-full mr-3">
            <Phone className="h-5 w-5 text-green-600" />
          </div>
          <a href={`tel:${hospital.phone}`} className="hover:text-blue-600">
            {hospital.phone}
          </a>
        </div>
      </div>
      <div className="mt-4 p-4 bg-gray-50 rounded-md">
        <h4 className="font-medium text-gray-900">Available Specialist</h4>
        <p className="text-gray-700 mt-1">
          {specialist.name} - {specialist.specialization}
        </p>
      </div>
      <div className="mt-4">
        <a
          href={getDirectionsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
}