import {User} from './user';
import {Repository} from './repository';

export interface Repositories {
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
}

