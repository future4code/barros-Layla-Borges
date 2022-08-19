import { useState } from "react";

export function useForm(initialState){
    const [form, setForm] = useState(initialState)

    const onChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value })

    }
    const clear=()=>{
        setForm(initialState)
    }
    return [form,onChange,clear]
}