// Collection of algorithm snippets with their time complexities
export interface Algorithm {
  id: number;
  name: string;
  code: string;
  complexity: string;
  explanation: string;
  language?: string;
}

// Import algorithms data from JSON file
import algorithmsData from './algorithms.json';

export const algorithms: Algorithm[] = algorithmsData.algorithms as Algorithm[];

// Export complexity options from the JSON file
export const complexityOptions = algorithmsData.complexityOptions as string[];
