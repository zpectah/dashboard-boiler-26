export interface ReverseGeocodingStorage {
  locationName: string;
  timestamp: number;
  coords: {
    lat: number;
    lng: number;
  };
}

export interface NominatimReverseResponse {
  address?: {
    city?: string;
    town?: string;
    village?: string;
    municipality?: string;
    county?: string;
    state?: string;
    country?: string;
  };
}
