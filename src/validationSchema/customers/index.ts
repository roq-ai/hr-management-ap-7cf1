import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  contact_number: yup.string().required(),
  address: yup.string().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
