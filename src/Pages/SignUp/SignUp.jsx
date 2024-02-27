import useLocalStorage from "use-local-storage";
import { useNavigate, NavLink } from "react-router-dom";
import { Toggle } from "../../components/Toggle/Toggle";
import Input from "../../components/Input/Input";
import { InputCountries } from "../../components/inputCountries/inputCountry";
import Button from "../../components/Button/Button";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import { useState } from "react";
import { database } from "../../FirebaseAuth/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    createUserWithEmailAndPassword(database, email, password)
    .then(data => {
      console.log(data, "authData");
      navigate('/meun');
    }).catch(err => {
      alert(err.code)
    })
  } 


  return (
    <>
      <div
        className="flex justify-center items-center w-full min-h-[100vh]"
        data-theme={isDark ? "dark" : "light"}
      >
        <div className="md:w-[80%] w-[90%] mx-auto md:min-h-[80vh] min-h-[100vh]">
          <div className="flex justify-between relative items-center">
            <h1 className="text-[#048970] text-[30px] font-[600]">feQuiz</h1>
            <div className="absolute right-0 top-[-20px]">
              <Toggle
                isChecked={isDark}
                handleChange={() => setIsDark(!isDark)}
              />
            </div>
          </div>
          <h1 className="text-center font-[700] text-[25px] text-[#048970] pt-8">
            Let's Get Started!
          </h1>
          <p className={`text-[${isDark}] text-center text-[14px] font-[500]`}>
            Enter your details below to create your account and get started with
            the Quiz 👉
          </p>
          <form className="mt-[50px]" onSubmit={(e) => handleSubmit(e)}>
            <div className="flex md:flex-row flex-col gap-9 justify-between items-center">
              <Input
                inputClass={`bg-[#C4C4C4] w-full rounded-[8px] h-[50px] px-5`}
                type="text"
                placeholder="Enter first name"
              />
              <Input
                inputClass={`bg-[#C4C4C4] w-full rounded-[8px] h-[50px] font-[500] px-5`}
                type="text"
                placeholder="Enter last name"
              />
            </div>
            <div className="flex md:flex-row flex-col gap-9 justify-between items-center mt-[40px]">
              <div className="flex gap-2 items-center bg-[#C4C4C4] w-full ps-5 rounded-[8px]">
                <EmailOutlinedIcon className="text-[#28282c]" />
                <Input
                  inputClass={`bg-[#C4C4C4] w-full rounded-[8px] h-[50px]`}
                  type="email"
                  placeholder="Enter email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full">
                <InputCountries />
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-9 justify-between items-center mt-[40px]">
              <PasswordInput
                inputClass="bg-[#C4C4C4] w-full rounded-[8px] h-[50px]"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <PasswordInput
                inputClass="bg-[#C4C4C4] w-full rounded-[8px] h-[50px]"
                placeholder="Comfirm password"
              />
            </div>
            <div className="flex justify-center mt-5">
              <Button
                label="Sign Up"
                type="submit"
                styles="bg-[#28282c] text-[#048970] text-[15px] font-[500] rounded-[5px] py-[10px] shadow-2xl w-[100%] md:w-[30%] hover:md:w-[50%] transition-all ease-in-out duration-[0.5s]"
              />
            </div>
          </form>
          <div className="flex gap-1 text-[14px] font-[500] justify-center pt-3 pb-5 md:pb-0">
            <p className={`${isDark}`}>Already have an account</p>
            <NavLink to="/">
              <span className="text-[#048970]">Log In</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;