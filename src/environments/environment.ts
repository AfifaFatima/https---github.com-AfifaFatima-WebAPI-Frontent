import { HttpHeaders } from "@angular/common/http";

export const environment = {
    production : true,
    baseURLNew: 'https://localhost:44315/',
};
export const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${localStorage.getItem('token')}`
  });