import { useSelector } from 'react-redux';
import CollectionItem from './CollectionItem';

const CollectionList = () => {
    const todos = useSelector(state => state.todos.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <CollectionItem
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default CollectionList;