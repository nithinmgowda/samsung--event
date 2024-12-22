export interface Hospital {
  id: string;
  name: string;
  address: string;
  phone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  specialists: Specialist[];
}

export interface Specialist {
  id: string;
  name: string;
  specialization: string;
  availability: boolean;
}

export interface SearchResult {
  hospital: Hospital;
  distance: string;
  specialist: Specialist;
}