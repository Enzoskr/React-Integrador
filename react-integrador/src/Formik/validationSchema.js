import * as Yup from 'yup';
import { regularExpresions } from '../utils/regExp';

export const checkoutValidationSchema = Yup.object({
    name: Yup.string().required('Campo necesario'),
    cellphone: Yup.string().required('Campo necesario'),
    location: Yup.string().required('Campo necesario'),
    address: Yup.string().required('Campo necesario'),
})

export const registerValidationSchema = Yup.object({
    name: Yup.string().required('Campo necesario'),
    email: Yup.string().matches(regularExpresions, 'Correo invalido').required('Campo necesario'),
    password: Yup.string().min( 6, 'Minimo 6 caracteres' ).required('Campo necesario'),
    name: Yup.string().required('Campo necesario'),
    name: Yup.string().required('Campo necesario'),
})