import * as yup from 'yup';

export const hrManagerValidationSchema = yup.object().shape({
  department: yup.string().required(),
  employee_count: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
