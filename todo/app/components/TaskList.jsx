import { Task } from './Task';

const TaskList = ({tasks}) => {
    <ul>{tasks.map(task => <Task name={task}/>)}</ul>
};

export { TaskList };