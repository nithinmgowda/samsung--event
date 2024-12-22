import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { HospitalCard } from './components/HospitalCard';
import { searchHospitals } from './utils/search';
import { SearchResult } from './types';
import { Stethoscope } from 'lucide-react';

function App() {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (query: string) => {
    const results = searchHospitals(query);
    setSearchResults(results);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Stethoscope className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Emergency Medical Search
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find specialist surgeons and nearby hospitals for immediate medical attention
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {hasSearched && (
          <div className="space-y-6">
            {searchResults.length > 0 ? (
              <>
                <h2 className="text-xl font-semibold text-gray-900">
                  Found {searchResults.length} nearby hospitals
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchResults.map((result) => (
                    <HospitalCard 
                      key={`${result.hospital.id}-${result.specialist.id}`} 
                      result={result} 
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">
                  No hospitals found with available specialists for this condition.
                  Please try a different search or contact emergency services.
                </p>
                <div className="mt-4">
                  <a
                    href="tel:911"
                    className="inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Call Emergency Services (911)
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;