import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import css from "./Registration.module.css";

interface FormData {
    username: string;
    email: string;
    password: string;
    repeat_password: string;
    avatar?: File;
}

export const FormRegistration = () => {
    const schema = yup.object().shape({
        username: yup.string().min(4).required("username is Required!"),
        email: yup.string().email().required("email is Required!"),
        password: yup.string().min(4).max(20).required(),
        repeat_password: yup.string().oneOf([yup.ref("password"), undefined], "passwords don't match!").required(),
    });

    const [avatarFile, setAvatarFile] = useState<File | null>(null);

    const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setAvatarFile(file || null);
    };

    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<FormData>({
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        console.log(data,'data before formData created');
       
        const formData = new FormData();
        formData.append('username', data.username.trim().toLowerCase());
        formData.append('email', data.email.trim().toLowerCase());
        formData.append('password', data.password.trim());
        formData.append('repeat_password', data.repeat_password.trim());
        if (avatarFile) {
            formData.append('avatar', avatarFile);
            console.log(formData);
        }

        // try {
        //     const response = await fetch('server-endpoint', {
        //         method: 'POST',
        //         body: formData,
        //     });
        //     if (response.ok) {
        //         console.log('Form submitted successfully!');
        //         reset();
        //     } else {
        //         console.error('Error submitting form:', response.statusText);
        //     }
        // } catch (error) {
        //     console.error('Error submitting form:', error.message);
        // }

        reset();
    };

    return (
       <>
         <h2 className={css.registerTitle}>Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={css.divFormRegister}>
        <div className={css.registerGroup}>
          <div className={css.inputGroup}>
          <label htmlFor="username"><input id="username" className={css.registerInput} type="text" placeholder="Name and surname..." {...register("username")} /></label>
          {errors.username && <p className={css.registerNotification}>{errors.username.message}</p>}
          <label htmlFor="email"><input id="email" className={css.registerInput} type="text" placeholder="Email..." {...register("email")} /></label>
          {errors.email && <p className={css.registerNotification}>{errors.email.message}</p>}
          <label htmlFor="password"><input id="password" className={css.registerInput} type="password" placeholder="Password..." {...register("password")} /></label>
          {errors.password && <p className={css.registerNotification}>{errors.password.message}</p>}
          <label htmlFor="repeat_password"><input id="repeat_password" className={css.registerInput} type="password" placeholder="Confirm password..." {...register("repeat_password")} /></label>
          {errors.repeat_password && <p className={css.registerNotification}>{errors.repeat_password.message}</p>}
          </div>
          <div>
          <p className={css.photoTitle}>Photo(optional)</p>
          <div className={css.divPhotoThumb}></div>
          <label htmlFor="photo"><input id="photo" className={css.registerInput} type="file" accept="image/*" onChange={handleAvatarChange}/></label>
          </div>
        </div>
          <input className={css.registerBtn} type="submit" disabled={!isValid} placeholder="submit"/>
        </form>
       </>
    );
};


