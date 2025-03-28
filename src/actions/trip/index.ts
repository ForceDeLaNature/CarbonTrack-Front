'use server'
import { fetchRestApi } from "@/utils/utils"

interface State {
    [key: string]: string; // Clé de type string, valeur de type quelconque
  }

export async function addTrip(state: State, formData: FormData) {
    const origin = formData.get('origin')
    const destination = formData.get('destination')
    const transportMode = formData.get('transportMode')

    if(!origin || !destination || !transportMode){  
        return{
            message: "is required",
            messageType: "",
            success: false
        }
    }else{
        const data = {
            origin,
            destination,
            transportMode
        }
        const res = await fetchRestApi("", "POST", data)
        console.log(res)
    }
}