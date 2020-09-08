import { useState, useEffect } from "react";
import Link from "next/link";
// import styled from "@emotion/styled";
import dynamic from "next/dynamic";
// import { useRouter } from "next/router";
// import { DialogKey } from "/constant/Dialogs"
// import Modal from "antd/lib/modal/Modal";
// import Form from "antd/lib/form";

// const Checkbox = dynamic(() => import("antd/lib/checkbox"));
// const Input = dynamic(() => import("../ant-form/input/Input"));
// const { Item } = Form;

const validate = dynamic(() =>
  import("components/Validation/ValidatePass"));

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [callback, errors, isSubmitting]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

const SignInForm = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  function login() {
    console.log('No errors, submit callback called!');
  }

  return (
    // <CustomAuthen>
    //   <AuthenticationWrapper>
    //     <AuthenticationTitle>
    //       Hello!
    //       <br />
    //       Log in with your account.
    //     </AuthenticationTitle>

    //     {/* <AuthenticationForm form={form} onFinish={_onFinish}></AuthenticationForm> */}

    //     <AuthenticationForm>
    //       <FormControl>
    //         <Input
    //           label="Email address" //Display khi chua nhap gi
    //           name="email"
    //           id="email"
    //           rules={[
    //             {
    //               required: true, //Bat buoc nhap email, ko de trong
    //               message: "Please input your email!",
    //               whitespace: true,
    //             },
    //             {
    //               type: "email",
    //               message: "Please input valid email!",
    //             },
    //           ]}
    //         />
    //       </FormControl>

    //       <FormControl>
    //         <Input
    //           type="password"
    //           label="Password"
    //           name="password"
    //           id="password"
    //           rules={[
    //             {
    //               required: true,
    //               message: "Please input your password!",
    //               whitespace: true,
    //             },
    //             // {
    //             //   min: 8,
    //             //   message: "At least 8 character"
    //             // },
    //             {
    //               pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //               message: "At least one uppercase, lowercase, numeric, special and 8 characters!"
    //             }
    //           ]}
    //         />
    //       </FormControl>
    //     </AuthenticationForm>
    //   </AuthenticationWrapper>
    // </CustomAuthen>

    <div className="CustomAuthen">
      <div className="AuthenticationWrapper">
        <div className="AuthenticationTitle">
          Hello!
          <br />
          Log in with your account.
        </div>
        <div className="AuthenticationForm">
          <form onSubmit={handleSubmit} noValidate>
            <div className="FormControlEmail">
              <input autoComplete="off" type="email" name="email" placeholder="Email address" onChange={handleChange} value={values.email || ''} required />
              {errors.email}
            </div>


            <div className="FormControlPass">
              <input type={passwordShown ? "text" : "password"} name="password" placeholder="Password" onChange={handleChange} value={values.password || ''} required />
              <span onClick={togglePasswordVisiblity}>Show</span>
            </div>
            {errors.password}

            <div className="Password">
              <input type="checkbox" value="IsRememberMe" id="rememberMe" />
              <label>Remember me</label>
              <div className="Forgot">
                <a href="/">Forgot password</a>
              </div>
            </div>

            <div className="Privacy">
              I accept that my business profile (e.g., my name, company name and
              email address) will be shared within the community, in accordance
              with SingEx Group’s{" "}
              <Link href="/">
                <a target="_blank">Privacy Policy </a>
              </Link>
              and{" "}
              <Link href="/">
                <a target="_blank">Terms of Service</a>
              </Link>
              .
            </div>

            <div className="LogInButton">
              <button type="submit">Log in</button>
            </div>
          </form>
        </div>

        <div className="CreateAccount">
          <div className="CustomText">
            Don`&apos;`t have an account?
            <a href="/">Create one</a>
          </div>
        </div>
      </div>
    </div>


  );


}

// SignInForm.propTypes = {};

export default SignInForm;

// const AuthenticationWrapper = styled.div`
//   width: 860px;
//   max-height: 100%;
//   padding: 40px 15px;
//   box-sizing: border-box;
//   overflow: auto;
//   background-color: #fff;
//   border-radius: 8px;
//   position: relative;
//   a {
//     transition: all 0.3s ease;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const AuthenticationTitle = styled.p`
//   font-size: 32px;
//   line-height: 1.5;
//   color: #101010;
//   font-weight: 700;
//   text-align: center;
//   letter-spacing: -0.8px;
//   margin-bottom: 0;

//   a {
//     text-decoration: underline;
//     color: yellow;
//   }
// `;

// const AuthenticationForm = styled(Form)`
//   margin-top: 25px;
// `;

// const FormControl = styled.div`
//   margin-bottom: 34px;
//   flex-basis: 100%;

//   input {
//     width: 100%;
//   }
// `;

// const Text = styled.p`
//   text-transform: uppercase;
//   font-size: 16px;
//   line-height: 1.625;
//   text-align: center;
//   font-weight: 700;

//   @media screen and (max-width: 767px) {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-wrap: wrap;
//   }
// `;

// const WrapperScroll = styled.div`
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const CustomAuthen = styled(WrapperScroll)`
//   .signup {
//     padding: 50px 15px;

//     > p {
//       font-size: 24px;
//     }
// `;
// const Password = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   .ant-form-item {
//     margin-bottom: 0;
//   }

// `;

// const Remember = styled(Checkbox)`
//   text-transform: uppercase;
//   font-weight: 600;
//   color: #101010;

//   .ant-checkbox-inner {
//     width: 28px;
//     height: 28px;
//     border-radius: 4px;
//     ${({ checked }) => !checked && "background: #f3f3f3;"}

//     &::after {
//       width: 10px;
//       height: 15px;
//     }
//   }
// `;

// const Forgot = styled.a`
//   font-size: 14px;
//   line-height: 1.5625;
//   color: red;
//   text-transform: uppercase;
//   font-weight: 600;

// `;

// const LogInButton = styled(Item)`
//   display: flex;
//   margin-bottom: 30px;
//   color: #000;
//   text-align: center;
// `;

// const CreateAccount = styled.div``;

// const SignUp = styled.a`
//   color: red;
// `;

// const CustomText = styled(Text)`
//   font-size: 14px;

//   a {
//     margin-left: 4px;
//   }
// `;

// const Button = styled.button`
//   outline: none;
//   text-transform: uppercase;
//   border-radius: 26px;
//   border: 0;
//   padding: 10px 60px;
//   margin: 40px auto 0;
//   font-size: 16px;
//   background-color: red;
//   color: white;
// `;

// const Privacy = styled.p`
//   text-align: center;
//   font-size: 16px;
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: normal;
//   letter-spacing: -0.8px;
//   color: #101010;
//   max-width: 420px;
//   margin: 0 auto;

//   a {
//     font-weight: 700;

//     &:hover {
//       color: red;
//     }
//   }
// `;
