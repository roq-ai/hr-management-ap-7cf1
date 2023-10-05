import * as yup from 'yup';

export const applicantValidationSchema = yup.object().shape({
  resume: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
