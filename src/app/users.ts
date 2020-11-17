import { User } from './user';

// This model represents what a request for users returns
export class Users {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}
