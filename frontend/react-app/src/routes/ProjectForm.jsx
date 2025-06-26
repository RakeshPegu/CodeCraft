import { Button } from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";

function ProjectForm(){
    const schema = z.object({
        name:z.string(),
        description:z.string(),
         

    })
    const form = useForm({
        resolver:zodResolver(schema),
        defaultValues: {
            name:'',
            description:'',
            
        }
    })
    const onsubmit=async(data)=>{
        console.log(data)

    }
    return(
        <div className="flex  justify-center h-[100vh] bg-blue-100  ">
            <div className="bg-indigo-50 h-[55%]  w-[90%] relative top-10 pr-10 pl-10 flex flex-col  gap-10 outline-1 rounded-2xl outline-blue-400 md:w-[400px]">
            <div>
               <h1 className="text-3xl text-center pt-4 "> upload project</h1>
            </div>
            <div className="">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onsubmit)} className="flex flex-col gap-5" >
                        <FormField control={form.control} name="name" render={({field})=>(
                            <FormItem>
                                <FormLabel> name</FormLabel>
                                <FormControl>
                                    <Input type='text'  placeholder="enter the project name" {...field}/>
                                </FormControl>
                            </FormItem>

                        )}/>
                         <FormField control={form.control} name="description" render={({field})=>(
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input type='text' placeholder="describe the project" {...field}/>
                                </FormControl>
                            </FormItem>

                        )}/>
                        <Button type="submit" className='bg-blue-500' >Submit</Button>
                       
                    </form>
                </Form>
            </div>
            </div>
        </div>
    )
}
export default ProjectForm;