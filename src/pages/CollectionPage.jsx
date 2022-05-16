//import {Navigate} from 'react-router-dom';
//import {useDispatch} from 'react-redux';
import {useState} from 'react';
//import { useAuth } from 'hooks/use-auth';
//import {removeUser} from 'store/slices/userSlice';

const CollectionPage = () => {
    const [names, setNames] = useState();
    const [text, setText] = useState();

    const add = () => {
        if (text.trim().length) {
        setNames([
            ...names,
            {
                id: new Date().toISOString(),
                text,
                completed: false,
            }
        ])
        setText('');
        }
    }

    return (
        <>
        <div>
            <h1>My Collections</h1>
            <label>
                <input value={text} onChange={(e) => setText(e.target.value)} />
                <button onClick={add}>Add</button>
            </label>

            <ul>
                {
                    names.map(todo => <li key={todo.id}>
                        <input type="checkbox"/>
                    </li>)
                }
            </ul>
        </div>
        </>
    ) 
}

export default CollectionPage