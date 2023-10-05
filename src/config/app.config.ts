interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee', 'Administrator', 'Applicant'],
  tenantName: 'Company',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own customer information',
    'View associated company information',
    'Read own transaction history',
    'Submit queries or complaints',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage company data',
    'Manage applicant data',
    'Manage employee information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/6fc8a209-02bd-4ce8-83fb-773971776960',
};
