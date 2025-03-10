import axios from 'axios';

const getAllMyTasks = (setMyTasks) => {
    axios.get('https://todo-list-react-node.onrender.com')
        .then(({data}) => {console.log(data); setMyTasks(data)});
    };

    const addTask = (title, setTitle, setTask) => {
        axios.post('https://todo-list-react-node.onrender.com/saveTask', {title})
            .then(({data}) => {
                console.log(data);
                setTitle('');
                setTask(setTask);
            });
    }

    const editTask = (taskId, title, setTitle, setTask, setEditing, deleteTask) => {
        axios.put('https://todo-list-react-node.onrender.com/editTask', {_id: taskId, title})
            .then((data) => {
                console.log(data);
                setTitle('');
                setEditing(false);
                getAllMyTasks(setTask);
            });
    }

    const deleteTask = (taskId, setTask) => {
        axios.delete('https://todo-list-react-node.onrender.com/deleteTask', {data: {_id: taskId}})
            .then((data) => {
                console.log(data);
                getAllMyTasks(setTask);
            });
    }

    export { getAllMyTasks, addTask, editTask, deleteTask };