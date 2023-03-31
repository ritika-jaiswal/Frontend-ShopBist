import React, { useState } from "react";

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
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
  // };

  interface FormData {
    email: string;
    password: string;
  }
  
  const submitForm = async (event: React.FormEvent) => {
    console.log(FormData)
    event.preventDefault();
    const myFormData: FormData = {
      email: "johndoe@example.com",
      password: "abc@123"
    };
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myFormData),
    });
  
    if (response.status === 200) {
      
      window.alert("Login succesfully");
    }
  
    const responseData = await response.json();
    return responseData;
  };

  return (
    <div className="flex bg-gradient-to-tl from-green-400 to-indigo-900 rounded-md h-screen w-screen">
        
        <div className="flex items-center justify-center">
        
        
   <div className="  flex-col h-64 w-[26rem] bg-white shadow-xl ml-[30rem] rounded-xl ">
   <div className="flex-col flex justify-center my-4 font-semibold mx-[12rem]">
        <h1>Login</h1>
        </div>
      <form onSubmit={submitForm}>
        
        <div className="flex items-center justify-center my-4">
          <label htmlFor="email" style={{padding: 4}}>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            required
            className={" bg-gray-200 h-8 rounded-md px-3"}
          />
        </div>
        <div className="flex my-4 ml-[3.3rem]">
          <label htmlFor="password" style={{padding: 4}}>Password:</label>
          <input
            type="password"
            name="password"
            className={" bg-gray-200 h-8 rounded-md px-3"}
            value={form.password}
            onChange={handleInputChange}
            minLength={6}
            required
          />
        </div>
   <div className="flex justify-center text-blue"><button style={{}}>Forget Password</button></div>
        <div className="flex justify-center my-8">
        <button className=" rounded-md " type="submit" style={{backgroundColor:"#7BCCB5", padding:6, width:96}}>Login</button>
        </div>
        
      </form>
      </div>
    </div>
    </div>
  );
};

export default Login;