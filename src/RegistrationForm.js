import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    sendEmail(data);
  };

  // const sendEmail = (data) => {
  //   emailjs
  //     .send(
  // "service_kmh9iad", //service_kmh9iad
  // "template_5z2zxrc", //  template_5z2zxrc
  //       {
  //         to_name: data.name,
  //         to_email: data.email,
  //       },
  //       "ZD22_SHsZzzBOaH6v"
  //     )
  //     .then((response) => {
  //       console.log("Email sent successfully!", response.text);
  //     })
  //     .catch((error) => {
  //       console.error("Error sending email:", error);
  //     });
  // };
  const sendEmail = (data) => {
    emailjs
      .send(
        "service_kmh9iad",
        "template_5z2zxrc",
        {
          to_name: data.name,
          to_email: data.email,
          from_name: "Yejoka Hotel",
          from_email: "addisuagerie544@gmail.com",
          reply_to: "addisuagerie544@gmail.com",
        },
        "ZD22_SHsZzzBOaH6v"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.text);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" {...register("name", { required: true })} />
      {errors.name && <span>Name is required</span>}

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        {...register("email", { required: true })}
      />
      {errors.email && <span>Email is required</span>}

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
