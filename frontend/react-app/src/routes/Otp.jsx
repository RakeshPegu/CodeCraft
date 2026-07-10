import { useAuthStore } from "@/stores/auth.store"
import { useRef } from "react"
import { useLocation, useNavigate } from "react-router"

function VerifyOtp(){
    const {signUp} = useAuthStore()
    const navigate = useNavigate()
    const location = useLocation()
    const stateData = location.state?.data
    console.log('data to send sign up', stateData)
    const inputRefs = useRef([])

    const handleChange = (e, index) => {
        const value = e.target.value
        if(value && index < inputRefs.current.length - 1){
            inputRefs.current[index + 1].focus()
        }
    }

    const handleKeyDown = (e, index) => {
        if(e.key === "Backspace" && !e.target.value && index > 0){
            inputRefs.current[index - 1].focus()
        }
    }

    const handlePaste = (e) => {
        e.preventDefault()
        const pasted = e.clipboardData.getData("text").trim().slice(0, 6).split("")
        pasted.forEach((char, i) => {
            if(inputRefs.current[i]){
                inputRefs.current[i].value = char
            }
        })
        const nextIndex = Math.min(pasted.length, 5)
        inputRefs.current[nextIndex]?.focus()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const otp = inputRefs.current.map(input => input.value).join("")
        stateData? stateData.otp = otp: " "
        const res = await signUp(stateData)
        if(res){
            navigate('/')
        }
        
    }

    return(
        <div className="flex justify-center h-screen items-center">
            <form onSubmit={handleSubmit} className="bg-gray-300 flex flex-col items-center w-[98%] gap-5 sm:w-[400px] h-[400px] rounded-3xl">
                <span className="text-3xl text-center font-mono mt-10"> Enter OTP</span>
                <p className="flex justify-center items-center"> We have sent a verification code to email address</p>
                <div className="flex flex-row flex-wrap h-14 gap-1 mb-8 mt-5">
                    {[0,1,2,3,4,5].map((_, index) => (
                        <input
                            key={index}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            required
                            ref={(el) => inputRefs.current[index] = el}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            onPaste={index === 0 ? handlePaste : undefined}
                            className="bg-gray-50 text-center w-9 rounded-xl focus:border-1"
                        />
                    ))}
                </div>

                <button type="submit" className="rounded-2xl bg-blue-500 px-20 py-2 cursor-pointer transition-colors hover:bg-blue-300 duration-500 "> verify</button>
                <p className="flex flex-col">Didn't receive the code? <button type="button" className="text-lg text-blue-900"> Resend code</button></p>
            </form>
        </div>
    )
}
export default VerifyOtp