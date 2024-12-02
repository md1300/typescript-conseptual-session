{
    //mapped type

    type ToDo={
        task:string;
        completed:boolean;
        dueDate:number;
    }

    const requireToDo:ToDo={
       task:'kaj coltece',
       completed:false,
       dueDate:23
    }

    type OptionalToDo={
        [T in keyof ToDo]?:ToDo[T]
    }

    const task:OptionalToDo={
        task:' ami kaj shes korci'
    }
    //
}