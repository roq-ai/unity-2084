import axios from 'axios';
import queryString from 'query-string';
import { TimeOffRequestInterface, TimeOffRequestGetQueryInterface } from 'interfaces/time-off-request';
import { GetQueryInterface } from '../../interfaces';

export const getTimeOffRequests = async (query?: TimeOffRequestGetQueryInterface) => {
  const response = await axios.get(`/api/time-off-requests${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createTimeOffRequest = async (timeOffRequest: TimeOffRequestInterface) => {
  const response = await axios.post('/api/time-off-requests', timeOffRequest);
  return response.data;
};

export const updateTimeOffRequestById = async (id: string, timeOffRequest: TimeOffRequestInterface) => {
  const response = await axios.put(`/api/time-off-requests/${id}`, timeOffRequest);
  return response.data;
};

export const getTimeOffRequestById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/time-off-requests/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTimeOffRequestById = async (id: string) => {
  const response = await axios.delete(`/api/time-off-requests/${id}`);
  return response.data;
};
