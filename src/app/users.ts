import { User } from './user';

// This model represents what a request for users returns
export interface Users {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}
