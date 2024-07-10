import * as yup from 'yup'

export const signupAgentFormSchema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().optional(),
    // userName: yup.string().optional(),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), undefined], 'Passwords must match')
        .nullable()
        .required('Confirm Password is required')
});

export const signupRenterFormSchema = yup.object({
    name: yup.string().required('Name is required').min(3),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), undefined], 'Passwords must match')
        .nullable()
        .required('Confirm Password is required')
});

export const loginFormSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().min(6)
})