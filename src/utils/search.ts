import { SearchResult } from '../types';
import { hospitals } from '../data/hospitals';
import { CONDITIONS_TO_SPECIALIZATIONS } from '../data/specializations';
import { calculateDistance } from './distance';

// Bangalore coordinates as default reference point
const DEFAULT_COORDINATES = { lat: 12.9716, lng: 77.5946 };

export function searchHospitals(condition: string): SearchResult[] {
  const normalizedCondition = condition.toLowerCase().trim();
  const specializations = CONDITIONS_TO_SPECIALIZATIONS[normalizedCondition] || [];

  if (specializations.length === 0) {
    return [];
  }

  const results: SearchResult[] = [];

  hospitals.forEach((hospital) => {
    hospital.specialists.forEach((specialist) => {
      if (specializations.includes(specialist.specialization) && specialist.availability) {
        const distance = calculateDistance(DEFAULT_COORDINATES, hospital.coordinates);
        
        results.push({
          hospital,
          specialist,
          distance: `${distance.toFixed(1)} km`
        });
      }
    });
  });

  // Sort by actual calculated distance
  return results.sort((a, b) => 
    parseFloat(a.distance) - parseFloat(b.distance)
  );
}