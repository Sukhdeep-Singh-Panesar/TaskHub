import './App.css'
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Card} from "@/components/ui/card.tsx";
import {Calendar} from "@/components/ui/calendar.tsx";
import {useState, type SetStateAction, useEffect} from "react";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import {AlertContext} from "@/context/AlertContext.ts";
import Alert from "./components/Alert.tsx"
function App() {
    const today: Date = new Date();

    const day = today.toLocaleString("en-US", {
        weekday: "long",
    });

    const fullYearDetail: string = today.toLocaleString("en-UK", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    type Todo = {
        id: number;
      title: string;
      detail: string;
      completed: boolean;
    }

    const[addTitle, setAddTitle] = useState<string>("");
    const[addDetail, setAddDetail] = useState<string>("");
    const[todo, setTodo] = useState<Todo[]>(()=>{
        const todos = localStorage.getItem("todo");
        if(todos){
            return JSON.parse(todos);
        }
        else {
            return []
        }
    });
    const[edit, setEdit] = useState<number | null>(null);
    const[alert, setAlert] = useState<boolean>(false);



    useEffect( () => {
        localStorage.setItem("todo", JSON.stringify(todo))
    },[todo]
    )

    const handleAdd = (e: { target: { value: SetStateAction<string>; }; }) => {
        setAddTitle(e.target.value);
    };
    const handleAddDetail = (e: { target: { value: SetStateAction<string>; }; }) => {
        setAddDetail(e.target.value);
    }

    const handleDelete = (id:number) => {
        setTodo(todo.filter(item=> item.id !== id))

    }
    const handleEdit = (item: Todo) => {
        setAddTitle(item.title);
        setAddDetail(item.detail)
        setEdit(item.id)
    }
    const handleComplete = (id:number) => {
        const newTodo = todo.map((item) =>
        {
            if (item.id === id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            else{
                return item
                }
            }
        )
        setTodo(newTodo)

    }



    const completed = todo.filter(item=>item.completed).length
    const pendingTask = todo.filter(item=>!item.completed).length
    const created = todo.length
  return (



        <AlertContext.Provider value={{
            alert,
            setAlert,
            addTitle,
            addDetail
        }}>
            <div className="min-h-screen bg-slate-50 text-slate-900">
     <Navbar />




        {/*Upper Section*/}
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 pt-10 pb-6 text-3xl font-semibold tracking-tight text-slate-900">Hello,
        <div className="text-base font-normal text-slate-500"> Start planning today</div> </div>

                <Card className="mx-4 mb-12 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:mx-8 sm:p-6 xl:mx-auto xl:max-w-6xl">
        {/*Middle Section*/}
        <div className="flex flex-col gap-3 px-4 py-6 sm:px-6 lg:flex-row lg:items-end">
            <div className="text-sm font-medium text-slate-500 lg:min-w-28 lg:pb-3">
                {day}
            </div>

        <Input value={addTitle} onChange={handleAdd} type={'text'} placeholder="Task title" className="h-12 w-full rounded-xl border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-indigo-500 lg:w-64"/>
        <Input  value={addDetail} onChange={handleAddDetail} type={'text'} placeholder="Add a description..." className="h-12 w-full rounded-xl border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-indigo-500 lg:flex-1"/>



        <Button className="h-12 w-full gap-2 rounded-xl bg-indigo-600 px-5 font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 lg:w-auto" onClick={()=> {
            if(addTitle.trim() === "" || addDetail.trim() === "")
            {
                setAlert(true)
                return;
            }

            if (edit !== null) {
                setTodo(todo.map(item =>
                    item.id === edit
                        ? { ...item, title: addTitle, detail: addDetail }
                        : item
                ));

                setEdit(null);
            }
            else{
                setTodo([{
                    title: addTitle,
                    id: Date.now(),
                    detail: addDetail,
                    completed: false
                }, ...todo],);
            }
            setAddTitle("")
            setAddDetail("")

        }}>
            <IoMdAdd className="h-5 w-5" />
            <span>{edit !== null ? "Save Changes" : "Add Task"}</span>
        </Button>

        </div>

            {/*middle-Middle part*/}
            <div className="middlemiddle flex items-center justify-between p-6 pt-1 w-full ml-2 ">
                <div className="datecontainer text-3xl pr-20 font-semibold text-red-300">
                    {fullYearDetail}
                </div>
                {/*<div className="searchbar">*/}
                {/*    <input type={'search'} placeholder={'search...'} className="h-7 w-30 text-sm border-4 border-y-yellow-300 rounded-full placeholder:text-center"></input>*/}
                {/*</div>*/}
            </div>

            <div className="grid grid-cols-1 gap-6 px-4 pb-6 sm:px-6 lg:grid-cols-[270px_minmax(0,1fr)]">

            <div className="w-full">
                <Calendar
                    mode="single"
                    className="rounded-lg border border-collapse"
                />
                </div>
                {/*Todo List Print*/}

                <div className="min-w-0">

                    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {todo.map(item =>(
                     <li key={item.id} className="min-w-0">
                         <Card className="flex h-full min-h-40 flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">


                             <div className="checkb flex items-center gap-2">
                                 <input type="checkbox" className="h-4 w-4 accent-indigo-600"  aria-label={`Mark ${item.title} as ${item.completed ? "incomplete" : "complete"}`} checked={item.completed}
                                        onChange={() => handleComplete(item.id)}

                                 />
                                 <span className="text-xs font-medium text-slate-500">
                                    {item.completed ? "Completed" : "Mark as complete"}
                                </span>
                             </div>
                        <div className="edit flex justify-between items-center">
                             <span className={`min-w-0 flex-1 wrap-break-word text-base font-semibold text-slate-900 ${item.completed ? "line-through opacity-50" : ""}`}>
                                {item.title}
                            </span>
                             <Button variant="ghost"
                                     size="icon"
                                     aria-label={`Edit ${item.title}`}
                                     className="shrink-0 rounded-lg cursor-pointer text-slate-500 hover:bg-indigo-50 hover:text-indigo-600" onClick={ ()=> {
                                     handleEdit(item);
                                 }
                             }><CiEdit />
                             </Button>
                        </div>
                             <div className="edit flex  justify-between items-center">
                       <span className={`min-w-0 flex-1 wrap-break-word text-sm leading-relaxed text-slate-500 ${item.completed ? "line-through opacity-50" : ""}`}>
                            {item.detail}
                        </span>
                             <Button  variant="ghost"
                                      size="icon"
                                      aria-label={`Delete ${item.title}`}
                                      className="shrink-0 rounded-lg text-slate-500 hover:bg-red-50 hover:text-red-600 cursor-pointer" onClick={()=> handleDelete(item.id)}><MdDelete />
                             </Button>
                                 </div>
                         </Card>
                        </li>
                    ))}

                </ul>

            </div>
                </div>


            <div className="taskCard flex items-center p-2 pt-1 ml-14 gap-3 mr-10">
                <Card className="h-37 w-47 text-[#3A3A36] bg-[#C7AE93] items-center text-xl">
                    Task
                    Completed
                    <span className="text-3xl font-bold">{completed}</span></Card>

                <Card className="h-37 w-47 text-[#3A3A36] bg-[#C4A49F] items-center text-xl">Pending Task
                     <span className="text-3xl font-bold">{pendingTask}</span>
                </Card>

                <Card className="h-37 w-47 flex-1 items-center text-3xl text-sky-400">Task Created
                     <span className="text-3xl font-bold text-black">{created}</span>
                </Card>
            </div>

            </Card>

        <Footer />
            <Alert/>
    </div>
        </AlertContext.Provider>

  )
}

export default App
