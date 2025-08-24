import axios from 'axios';
window.axios = axios;

// Tell Laravel this is an AJAX request
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Add CSRF token from Blade meta
const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
} else {
    console.error('CSRF token not found: check your Blade layout!');
}