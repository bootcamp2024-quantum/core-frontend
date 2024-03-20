import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Registration.css";

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
         <h2 className="register-title">Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="divFormRegister">
          <input className="register-input" type="text" placeholder="Username..." {...register("username")} />
          <input className="register-input" type="text" placeholder="Email..." {...register("email")}  />
          <input className="register-input" type="password" placeholder="Password..." {...register("password")} />
          <input className="register-input" type="password" placeholder="Confirm password..." {...register("repeat_password")} />
          <input className="register-input" type="file" accept="image/*" onChange={handleAvatarChange}/>

          {errors.username && <p className="register-notification">{errors.username.message}</p>}
          {errors.email && <p className="register-notification">{errors.email.message}</p>}
          {errors.password && <p className="register-notification">{errors.password.message}</p>}
          {errors.repeat_password && <p className="register-notification">{errors.repeat_password.message}</p>}

          <input className="register-btn" type="submit" disabled={!isValid} placeholder="submit"/>
        </form>
       </>
    );
};


