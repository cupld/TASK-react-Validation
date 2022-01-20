import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup.string().min(3).required("this field is required"),
    lastName: yup.string().min(3).required("this field is required"),
    phoneNumber: yup.string().matches(/[569]\d{7}$/, "this field should be numbers only").max(7).required("this field is required"),
    email: yup.string().matches(/^\S+@\S+\.\S+$/, "please enter a valid email").required("this field is required"),
    civilId: yup.string().matches(/^(1|2|3)((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229)(\d{5})$/, "this field should be numbers only").max(12).min(12).required("this field is required"),
    grade:  yup.string().matches(/^\d+$/, "this field should be numbers only").max(100).min(0).required("this field is required"),
})

function StudentsForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
      
      const onSubmit = (data) => console.log(data);

  return (
    <div class="container">
    <form onSubmit={handleSubmit(onSubmit)}>
          <label for="firstName">Enter Your First Name</label>
          <input {...register("firstName")} type="text" placeholder='Ahmed' />
          <p className="error">{errors.firstName?.message}</p>

          <label for="lastName">Enter Your Last Name</label>
          <input {...register("lastName")} type="text" placeholder='Dashti' />
          <p className="error">{errors.lastName?.message}</p>

          <label for="phoneNumber">Enter Your Phonenumber</label>
          <input {...register("phoneNumber")} type="text" placeholder='Phonenumber' />
          <p className="error">{errors.phoneNumber?.message}</p>

          <label for="email">Enter Your Email</label>
          <input {...register("email")} type="text" placeholder='email@domain.com' />
          <p className="error">{errors.email?.message}</p>

          <label for="civilId">Enter Your Civil ID</label>
          <input {...register("civilId")} type="text" placeholder='Civil ID' />
          <p className="error">{errors.civilId?.message}</p>

          <label for="grade">Enter Your HighSchool Grade</label>
          <input {...register("grade")} type="text" placeholder='HighSchool Grade' />
          <p className="error">{errors.grade?.message}</p>

          <button type="submit" className='btn'> Submit</button>
      </form>
  </div>);
}

export default StudentsForm;
