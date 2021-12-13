// 오늘의 할일 list
import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    // 자신이 차질할 수 있는 모든 영역
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    // 항목 양에 따라 스크롤바
    overflow-y: auto;
`;

function TodoList() {
    const todos = useTodoState();
    return (
        <TodoListBlock>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                />
            ))}
        </TodoListBlock>
    );
}

export default TodoList;
