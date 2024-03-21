import * as yup from "yup";

export const schema = yup.object().shape({
    username: yup.string().min(4).required("username is Required!"),
    email: yup.string().email().required("email is Required!"),
    password: yup.string().min(4).max(20).required(),
    repeat_password: yup.string().oneOf([yup.ref("password"), undefined], "passwords don't match!").required(),
});
