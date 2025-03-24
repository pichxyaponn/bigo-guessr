// Collection of algorithm snippets with their time complexities
export interface Algorithm {
  id: number;
  name: string;
  code: string;
  complexity: string;
  explanation: string;
  language?: string;
  hint?: string;
}

import algorithmsData from './algorithms.json';

export const algorithms: Algorithm[] = algorithmsData.algorithms as Algorithm[];

export const complexityOptions = algorithmsData.complexityOptions as string[];
