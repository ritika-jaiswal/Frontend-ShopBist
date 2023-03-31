import { request } from "http";
import React, { useState } from "react";
import { useNavigate , NavLink} from "react-router-dom";

interface SignupForm {
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC = () => {
const navigate = useNavigate();
let headers = new Headers();
headers.append('Access-Control-Allow-Origin', 'http://localhost:3000',);
headers.append('Access-Control-Allow-Headers','Authorization')
  const [form, setForm] = useState<SignupForm>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
  
  //   event.preventDefault();
    
      
  //   console.log("Form submitted: ", form);
  //   navigate("/login")
  // };
  interface FormData {
    email: string;
    password: string;
  }
  
  const submitForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const myFormData: FormData = {
      email: "johndoe@example.com",
      password: "abc@123"
    };
    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myFormData),
    });
    {console.log(response)}
    if (response.status === 200) {
      const tokens = {
        isLoggedIn: true,
        user: response,FormData,
      };
      navigate("/login");
      const responseData = await localStorage.setItem("tokens", JSON.stringify(tokens));
      return responseData;
     
    }
  
    // const responseData = await response.json();
    // return responseData;
  };

  return (
    <div className="flex bg-gradient-to-tl from-green-400 to-indigo-900 rounded-md h-screen w-screen">
        
        <div className="flex items-center justify-center">
        
        
   <div className="  flex-col h-72 w-[30rem] bg-white shadow-xl ml-[30rem] rounded-xl ">
   <div className="flex-col flex justify-center my-4 font-semibold mx-[13rem]">
        <h1>Sign Up</h1>
        </div>
      <form onSubmit={submitForm}>
         
        <div className="flex items-center justify-center my-4">
          <label htmlFor="email" style={{padding: 4}}>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            placeholder={"abc123@gmail.com"}
            required
            className={" bg-gray-200 h-8 rounded-md px-3"}
          />
        </div>
        <div className="flex my-4 ml-[5.3rem]">
          <label htmlFor="password" style={{padding: 4}}>Password:</label>
          <input
            type="password"
            name="password"
            className={" bg-gray-200 h-8 rounded-md px-3"}
            value={form.password}
            onChange={handleInputChange}
            placeholder={"Abc123#"}
            minLength={6}
            required
          />
        </div>
        <div className="flex my-4 ml-[1.5rem]">
          <label htmlFor="confirmPassword"style={{padding: 4}}>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            className={" bg-gray-200 h-8 rounded-md px-3"}
            value={form.confirmPassword}
            onChange={handleInputChange}
            placeholder={"Abc123#"}
            minLength={6}
            required
          />
        </div>
        <div className="flex justify-center my-8">
        <button className=" rounded-md " type="submit" style={{backgroundColor:"#7BCCB5", padding:6, width:96}}>Sign Up</button>
        </div>
        
      </form>
      </div>
    </div>
    </div>
  );
};

export default Signup;