import {Form,  FormField, FormItem, FormControl, FormMessage, FormLabel} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import {z} from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router'
function Login(){
    const schema =z.object({
        email:z.string(),
        password:z.string().min(5)
    }) 
    const form = useForm({
        resolver:zodResolver(schema),
        defaultValues:{
            email:'',
            password:''
        }
    })
    const onSubmit = async(data)=>{
        console.log(data)
    }
    return(
        <div className='relative h-[90vh] top-10 flex justify-center'>
            <div className='bg-indigo-50 h-[60%] rounded-2xl w-[90%] md:w-[400px] pl-10 pr-10 outline-1 outline-blue-200 flex flex-col gap-6 pt-6'>
                <div>
                    <h1 className='text-2xl font-bold'> Welcome !</h1>
                    <h2> Sign in to continue</h2>
                </div>
                <div >
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onsubmit )} className='flex flex-col gap-4'>
                            <FormField control={form.control} name="email" render={({field})=>(
                                <FormItem>
                                    <FormLabel>email</FormLabel>
                                    <FormControl>
                                       <Input placehoder="enter your email" type='email' {...field}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>

                            )}/>
                               <FormField control={form.control} name="email" render={({field})=>(
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                       <Input placehoder="enter the password" type='password' {...field}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>

                            )}/>
                             <Button className="bg-blue-500" type="submit">Submit</Button>
                            <span className="text-center">Don't Have a account?  <Link to={'/register'} className="text-blue-400"> Sign up</Link></span>
                        </form>
                    </Form>
                </div>
            </div>
            
        </div>
    )
}
export default Login;