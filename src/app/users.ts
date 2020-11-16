import { User } from './user';

// This model represents what a request for users returns
export interface Users {
  total: number;
  incomplete_results: boolean;
  items: User[];
}
