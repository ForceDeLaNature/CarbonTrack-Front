'use server'
import { redirect } from "next/navigation"
import { fetchRestApi } from "@/utils/utils"

interface State {
    [key: string]: string; // Clé de type string, valeur de type quelconque
  }

export async function addTrip(state: State, formData: FormData) {
    const origin = formData.get('origin')
    const destination = formData.get('destination')
    const transportMode = formData.get('transportMode')

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