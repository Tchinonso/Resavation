import axios from 'axios';

const RESAVATION_URL = "https://resavation-service.onrender.com/api/v1/auth"
const RESAVATION_PUBLIC_URL = "https://resavation-service.onrender.com/api/v1"

const authAxios = axios.create({
  baseURL: RESAVATION_URL,
  headers: {
    'Content-Type': 'application/json',
  }
})

/**
 * @desc axiosPublic - for fetching requests without token
 */
export const axiosPublic = axios.create({
  baseURL: RESAVATION_PUBLIC_URL,
  headers: {
    'Content-Type': 'application/json',
  }
})

export const axiosPrivate = axios.create({
  baseURL: RESAVATION_PUBLIC_URL,
  headers: { 'Content-Type': 'application/json' },
  // withCredentials: true
})

export default authAxios