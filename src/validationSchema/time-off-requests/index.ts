import * as yup from 'yup';

export const timeOffRequestValidationSchema = yup.object().shape({
  status: yup.string().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
