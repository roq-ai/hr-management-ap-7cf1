import queryString from 'query-string';
import { ApplicantInterface, ApplicantGetQueryInterface } from 'interfaces/applicant';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getApplicants = async (
  query?: ApplicantGetQueryInterface,
): Promise<PaginatedInterface<ApplicantInterface>> => {
  return fetcher('/api/applicants', {}, query);
};

export const createApplicant = async (applicant: ApplicantInterface) => {
  return fetcher('/api/applicants', { method: 'POST', body: JSON.stringify(applicant) });
};

export const updateApplicantById = async (id: string, applicant: ApplicantInterface) => {
  return fetcher(`/api/applicants/${id}`, { method: 'PUT', body: JSON.stringify(applicant) });
};

export const getApplicantById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/applicants/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteApplicantById = async (id: string) => {
  return fetcher(`/api/applicants/${id}`, { method: 'DELETE' });
};
