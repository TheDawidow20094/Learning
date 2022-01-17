import {ListProps} from '../Todo';
import {DescDiv} from '../Config/AppStyled';
import {DeleteButton} from '../Config/AppStyled';
import {Header} from '../Config/AppStyled';
import {ListContent} from '../Config/AppStyled';
import {StyledUl} from '../Config/AppStyled';
import {ButtonPanel} from '../Config/AppStyled';
import { Dispatch, SetStateAction } from 'react';

interface TaskListProps 
{
    elementsList : ListProps[];
    onDelete : Dispatch<SetStateAction<ListProps[]>>
}

const TaskList = (props: TaskListProps) =>
{
    const generateList = () =>
    {

        

        let readyListComponents = []
        for(let i=0; i<props.elementsList.length; i++)
        {
            const handleDelete = () =>
            {
                const filteredList = props.elementsList.filter((value: ListProps, index: number)=>{
                    return i !== index; 
                });
                props.onDelete(filteredList);
            } 

            const listContent = (

                <li id = {"" + i}>
                    <ListContent>

                      <Header> {props.elementsList[i].topicValue} </Header>
                        <DescDiv> {props.elementsList[i].descryptionValue} </DescDiv>
                        <ButtonPanel>
                            <DeleteButton onClick = {handleDelete}> Delete task </DeleteButton>
                        </ButtonPanel>

                    </ListContent>
                </li>
            
            
            )
            readyListComponents.push(listContent)
        }
       
        return readyListComponents;
    }
 
    return(
        <StyledUl>
            {generateList()}
        </StyledUl>
    );
}

export default TaskList;