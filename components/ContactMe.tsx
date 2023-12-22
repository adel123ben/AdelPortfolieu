"use client";
import  {motion} from "framer-motion"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {

}

const ContactMe = ({}: Props) => {
    const handelEface = () => {
        setName('');
        Setemail('');
        setSubject('');
        setMesseg('');
    }
    const [name, setName] = useState<string>('');
    const [email, Setemail] = useState<string>("");
    const [subject, setSubject] = useState<string>('');
    const [message, setMesseg] = useState<string>('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (Formdata) => {
    window.location.href = `mailto:adelformat541@gmail.com?subject=${Formdata.subject}&body=Hi my name is ${Formdata.name}${Formdata.message} (${Formdata.email})`
  };
    return(
        <div className="h-screen flex relative text-center  flex-col md:flex-row md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
           <h3 className="top-24 absolute uppercase tracking-[20px] text-gray-500 text-2xl">Cotact Me</h3>
           <div className="flex flex-col space-y-10 mt-24">
            <h4 className="text-4xl font-semibold text-center">
                I Have Go Just What You Need.<span className="decoration-[#f7ab0a] underline">Lets Talk.</span>
            </h4>
           <div className="space-y-10">
            <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#f7ab01]" />
            <p className="text-2xl">+1235847869</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#f7ab01]" />
            <p className="text-2xl">Email Me</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#f7ab01]" />
            <p className="text-2xl">123 developeur line</p>
            </div>
            
           </div>

           <motion.form
           initial={{
            x: -200,
            opacity: 0
           }}
           transition={{
            duration: 1.2
           }}
           whileInView={{
            x: 0,
            opacity: 1
           }}
           onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto" action="">
            <div className="flex space-x-2">
                <input {...register('name')} value={name} onChange={e => setName(e.target.value)}  placeholder="name" className="ContactInput" type="text" name="" id="" />
                <input {...register('email')} value={email} onChange={e => Setemail(e.target.value)}  placeholder="email" className="ContactInput" type="email" name="" id="" />
            </div>
            <input  {...register('subject')} value={subject} placeholder="Subject" onChange={e => setSubject(e.target.value)}  className="ContactInput" type="text" name="" id="" />
            <textarea  value={message} {...register('message')} onChange={e => setMesseg(e.target.value)} placeholder="Message" className="ContactInput" />
            <button onClick={handelEface}  type="submit" className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
           </motion.form>
           </div>
        </div>
    )
}

export default ContactMe;