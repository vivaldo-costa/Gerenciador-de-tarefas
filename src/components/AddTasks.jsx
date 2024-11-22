import { useState } from "react";
function AddTasks({onAddTaskSubmit}) {

const [title, setTitle] = useState("");
const [description, setDescription] = useState("");

return (
<div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col" >
<input 
type="text" 
placeholder="Digite o nome da tarefa" 
className="border-slate-300  outline-slate-400 px-4 py-2" 
value={title} onChange={(event) => setTitle(event.target.value)} 
/>

<input 
type="text" 
placeholder="Digite a descrição da tarefa" 
className="border-slate-300  outline-slate-400 px-4 py-2" 
value={description} onChange={(event) => setDescription(event.target.value)}  
/>


<button 
onClick={ () => {
    //Verificar se o titulo e a descricao nao estao vazios
    if (!title.trim() || !description.trim()) {
        return alert ("Por favor, preencha os campos");
    }
    onAddTaskSubmit(title, description)
    setTitle("")
    setDescription("")
}} 
className="bg-slate-500 rounded-md text-white px-4 py-2 font-medium ">Adicionar</button>
</div>
);


} 

export default AddTasks;