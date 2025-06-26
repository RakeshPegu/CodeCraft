import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Button} from '@/components/ui/button'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {Input} from '@/components/ui/input'
import { Link } from "react-router"
function Register (){
    const schema = z.object({
        username: z.string().min(2,{
            message: "username must be atleast 2 characters"

        }),
        email: z.string(),
        password:z.string().min(5, {
            message:"password must be atleat 5 characters"
        })
    })
    const form =useForm({
        resolver: zodResolver(schema),
        defaultValues:{
            username:'',
            email:'',
            password:""
            
        }
    })
    const onsubmit = async(data)=>{
        console.log('this is the formdata', data)
    }

    return(
        <div className=" flex flex-col items-center relative h-[90vh] top-10">           
            <div className="bg-indigo-50 rounded-2xl h-[65%] w-[90%] md:w-[400px] outline-1 outline-blue-200 pl-10 pr-10 flex flex-col gap-4">
            <div className="pt-4">
                <h1 className="text-2xl font-bold"> Welcome !</h1>
                <h2>signup to continue</h2>
            </div>
            <div >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onsubmit)} className="flex flex-col gap-2">
                    <FormField control={form.control } name='username' render={({field})=>(
                        <FormItem>
                            <FormLabel> username</FormLabel>
                            <FormControl>
                                <Input placeholder='Enter your username' {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>                   


                    )}/>
                       <FormField control={form.control } name='email' render={({field})=>(
                        <FormItem>
                            <FormLabel> Email</FormLabel>
                            <FormControl>
                                <Input type='email' placeholder='Enter your email' {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>                   


                    )}/>
                      <FormField control={form.control } name='password'  render={({field})=>(
                        <FormItem>
                            <FormLabel> password</FormLabel>
                            <FormControl>
                                <Input type='password' placeholder='Enter your password' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>                   


                    )}/>
                    <Button type='submit' className="bg-blue-400 mt-3">Submit</Button>
                    <span className="text-center">Have a account?  <Link to={'/login'} className="text-blue-400"> Sign in</Link></span>
                </form>
            </Form>
            </div>
            </div>
        </div>
    );
}
export default Register;