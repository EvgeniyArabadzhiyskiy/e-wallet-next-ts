import * as yup from 'yup';

const valueAfterComma = (value: number | undefined) => {
  const idxComma = String(value).indexOf('.')
  const isTwoDigits = String(value).length - idxComma < 4 

  if (idxComma === -1) {
    return true
  }
  
  return isTwoDigits
}

const schema = {

  register: yup.object().shape({
    email: yup.string().email('Invalid email').required(),
    password: yup
      .string()
      .min(6, 'Minimun 6 characters')
      .max(12, 'Maximum 12 characters')
      .required('Required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Password do not match')
      .required(),
    name: yup
      .string()
      .min(1, 'Minimun 1 characters')
      .max(12, 'Maximum 12 characters')
      .required('Required'),
  }),

  login: yup.object().shape({
    email: yup.string().email('Invalid email').required(),
    password: yup.string().required('Required'),
  }),

  transactionShema: yup.object().shape({
    category: yup.string()
    .required('This field is required'),
    
    amount: yup.number()
      .typeError('You need to enter a number')
      .positive('Only positive value')
      .test(
        'is-decimal',
        'Maximum two digits after comma',
        value => valueAfterComma(value)
      )
      .required('This field is required'),
  
    comment: yup.string()
      .min(2, 'Must be longer than 2 letters')
      .max(20, 'Must be shorter than 20 letters')
      .required('This field is required'),
  }),
};

export default schema;