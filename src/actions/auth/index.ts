'use server'
import { redirect } from "next/navigation"
import { fetchRestApi } from "@/utils/utils"
import { cookies } from 'next/headers'

interface State {
    [key: string]: string; // Clé de type string, valeur de type quelconque
  }

export async function register(state: State, formData: FormData) {
    const username = formData.get('username')
    const email = formData.get('email')
    const password = formData.get('password')
    if(!username){
        return{
            message: "first name is required",
            messageType: "",
            success: false
        }
    }else{
        const data = {
            username,
            email,
            password
        }
        const res = await fetchRestApi("auth/register", "POST", data)
        console.log(res)
        await new Promise((resolve) => setTimeout(resolve, 1000))
        redirect("/auth/login")
    }
}

export async function login(state: State, formData: FormData) {
    const email = formData.get('email')
    const password = formData.get('password')
    console.log(email, password)
    if(!email){
        return{
            message: "email is required",
            messageType: "",
            success: false
        }
    }else{
        const res = await fetchRestApi("auth/login", "POST", {email, password})
        console.log(res)
        const cookieStore = await cookies()
        cookieStore.set('jwt', res.token)
        await new Promise((resolve) => setTimeout(resolve, 1000))
        redirect("/dashboard")
    }
}

export async function logout() {
    (await cookies()).delete('jwt')
    redirect("/auth/login")
}