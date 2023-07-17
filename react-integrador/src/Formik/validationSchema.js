import * as Yup from 'yup';

export const checkoutValidationSchema = Yup.object({
    name: Yup.string().required('Campo necesario'),
    cellphone: Yup.string().required('Campo necesario'),
    location: Yup.string().required('Campo necesario'),
    address: Yup.string().required('Campo necesario'),
})