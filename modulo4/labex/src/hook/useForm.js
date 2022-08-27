
import { useState } from "react";

export function useForm (inicio){
    const [form, setForm] = useState(inicio)

    const onChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value })

    }
    const clear=()=>{
        setForm(inicio)
    }
    return [form, onChange]
};