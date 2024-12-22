import { Hospital } from '../types';
import { SPECIALIZATION_TYPES } from './specializations';
import { KARNATAKA_REGIONS } from './locations/karnataka';

export const hospitals: Hospital[] = [
  {
    id: '1',
    name: 'Manipal Hospital - Old Airport Road',
    address: 'Old Airport Road, Bangalore, Karnataka 560017',
    phone: '+91 80-2502-4444',
    coordinates: {
      lat: 12.9583,
      lng: 77.6408
    },
    specialists: [
      {
        id: 's1',
        name: 'Dr. Sudarshan Ballal',
        specialization: SPECIALIZATION_TYPES.CARDIOLOGY,
        availability: true
      },
      {
        id: 's2',
        name: 'Dr. Hemant Kalyan',
        specialization: SPECIALIZATION_TYPES.ORTHOPEDICS,
        availability: true
      }
    ]
  },
  {
    id: '2',
    name: 'Narayana Health City',
    address: 'Bommasandra Industrial Area, Bangalore, Karnataka 560099',
    phone: '+91 80-7122-2222',
    coordinates: {
      lat: 12.8178,
      lng: 77.6987
    },
    specialists: [
      {
        id: 's3',
        name: 'Dr. Devi Prasad Shetty',
        specialization: SPECIALIZATION_TYPES.CARDIOLOGY,
        availability: true
      },
      {
        id: 's4',
        name: 'Dr. Varun Shetty',
        specialization: SPECIALIZATION_TYPES.NEUROSURGERY,
        availability: true
      }
    ]
  },
  {
    id: '3',
    name: 'Apollo Hospital - Bannerghatta Road',
    address: 'Bannerghatta Road, Bangalore, Karnataka 560076',
    phone: '+91 80-4030-4050',
    coordinates: {
      lat: 12.8892,
      lng: 77.5961
    },
    specialists: [
      {
        id: 's5',
        name: 'Dr. Sanjay Mehta',
        specialization: SPECIALIZATION_TYPES.NEUROLOGY,
        availability: true
      },
      {
        id: 's6',
        name: 'Dr. Radhika Krishnan',
        specialization: SPECIALIZATION_TYPES.ONCOLOGY,
        availability: true
      }
    ]
  },
  {
    id: '4',
    name: 'Fortis Hospital - Cunningham Road',
    address: 'Cunningham Road, Bangalore, Karnataka 560052',
    phone: '+91 80-6621-4444',
    coordinates: {
      lat: 12.9866,
      lng: 77.5993
    },
    specialists: [
      {
        id: 's7',
        name: 'Dr. Mohan Kumar',
        specialization: SPECIALIZATION_TYPES.EMERGENCY_MEDICINE,
        availability: true
      },
      {
        id: 's8',
        name: 'Dr. Priya Sharma',
        specialization: SPECIALIZATION_TYPES.INFECTIOUS_DISEASE,
        availability: true
      }
    ]
  },
  {
    id: '5',
    name: 'JSS Hospital',
    address: 'M.G. Road, Mysore, Karnataka 570004',
    phone: '+91 821-2548888',
    coordinates: KARNATAKA_REGIONS.MYSORE.coordinates,
    specialists: [
      {
        id: 's9',
        name: 'Dr. Rajesh Kumar',
        specialization: SPECIALIZATION_TYPES.TRAUMA_SURGERY,
        availability: true
      },
      {
        id: 's10',
        name: 'Dr. Anand Shenoy',
        specialization: SPECIALIZATION_TYPES.CARDIOLOGY,
        availability: true
      }
    ]
  },
  {
    id: '6',
    name: 'KMC Hospital',
    address: 'Dr. B.R. Ambedkar Circle, Mangalore, Karnataka 575001',
    phone: '+91 824-2238888',
    coordinates: KARNATAKA_REGIONS.MANGALORE.coordinates,
    specialists: [
      {
        id: 's11',
        name: 'Dr. Padmanabh Kamath',
        specialization: SPECIALIZATION_TYPES.CARDIOLOGY,
        availability: true
      },
      {
        id: 's12',
        name: 'Dr. Sandeep Rao',
        specialization: SPECIALIZATION_TYPES.NEUROLOGY,
        availability: true
      }
    ]
  },
  {
    id: '7',
    name: 'KIMS Hospital',
    address: 'Vidyanagar, Hubli, Karnataka 580021',
    phone: '+91 836-2378888',
    coordinates: KARNATAKA_REGIONS.HUBLI.coordinates,
    specialists: [
      {
        id: 's13',
        name: 'Dr. Mahesh Patil',
        specialization: SPECIALIZATION_TYPES.ORTHOPEDICS,
        availability: true
      },
      {
        id: 's14',
        name: 'Dr. Shwetha Kulkarni',
        specialization: SPECIALIZATION_TYPES.EMERGENCY_MEDICINE,
        availability: true
      }
    ]
  }
];