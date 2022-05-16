import {useState} from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from 'store/collectionSlice';
import NewCollectionForm from 'components/for_collection/NewTodoForm';
import CollectionList from 'components/for_collection/CollectionList';

const CollectionPage = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAction = () => {
        if(text.trim().length) {
            dispatch(addTodo({text}));
            setText('');
        }
    }

    return (
        <>
        <div>
        <NewCollectionForm
            value={text}
            updateText={setText}
            handleAction={handleAction}
        />
        <CollectionList />
        </div>
        </>
    );
}

export default CollectionPage