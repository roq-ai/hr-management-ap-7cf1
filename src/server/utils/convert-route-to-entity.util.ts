const mapping: Record<string, string> = {
  applicants: 'applicant',
  companies: 'company',
  customers: 'customer',
  employees: 'employee',
  'hr-managers': 'hr_manager',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
