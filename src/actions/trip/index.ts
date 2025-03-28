'use server'
import { fetchRestApi } from "@/utils/utils"

interface State {
    message?: string;
}

export async function addTrip(state: State, formData: FormData): Promise<{ message: string }> {
    const origin = formData.get('origin') as string | null;
    const destination = formData.get('destination') as string | null;
    const transportMode = formData.get('transportMode') as string | null;

    if (!origin || !destination || !transportMode) {  
        return { message: "All fields are required" };
    }

    try {
        const data = { origin, destination, transportMode };
        const res = await fetchRestApi("", "POST", data);
        console.log(res);

        return { message: "Trip successfully added!" };  // ✅ Respecte la structure attendue
    } catch (error) {
        console.error("Error adding trip:", error);
        return { message: "An error occurred while adding the trip" };
    }
}
