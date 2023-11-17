import { from } from 'rxjs';
import { apiService } from './api.service';

export const getUser = () => {
  return from(apiService.get('/user'));
};

export const getUserById = (id: string) => {
  return from(apiService.get(`/users/${id}`));
};