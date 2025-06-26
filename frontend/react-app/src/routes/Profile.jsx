import {Form,  FormField, FormItem, FormControl, FormMessage, FormLabel} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import {z} from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { email } from 'zod/dist/types/v4/core/regexes'
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
    return(
        <div>
            <div>
                <div>
                    <h1> Welcome !</h1>
                    <h2> Sign up to continue</h2>
                </div>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onsubmit )}>
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
                             

                        </form>
                    </Form>
                </div>
            </div>
            
        </div>
    )
}
export default Login;