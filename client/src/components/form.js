import Input from "./input";
const Form = () => {
  return (
   <div className=" bg-white w-[500px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center">
    <div className=" text-4xl font-extrabold">Welcome</div>
    <div className=" text-xl font-light mb-5">Sign up now to get started</div>
    <Input label="Full Name" name="name" placeholder="Enter your Full Name" className="mb-5"/>
    <Input label="EmailAddress" name="email" placeholder="Enter your Email" className="mb-5"/>
    <Input label="Password" type="Password" name="password" placeholder="Enter your Password" className="mb-5"/>
   </div>
  );
}

export default Form;
