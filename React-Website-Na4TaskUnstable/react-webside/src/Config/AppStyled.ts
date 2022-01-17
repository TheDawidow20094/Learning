import styled from 'styled-components'


export const MainDivAppWindow = styled.div`
    background-color: #303030;
    display: flex;
    height: 96vh;
    width: 96vw;
    margin: 2%;
`
export const LeftBoxAppWindow = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    flex-direction: column;
`
export const TopicAppWindow = styled.div`
    background-color: #4E4949;
    display: flex;
    width: 100%;
    height: 15%;
    border: 2px solid grey;
    justify-content: center;
    align-items: center;
`
export const TaskListAppWindow = styled.div`
    display: flex;
    width: 100%;
    height: 85%;
    overflow-y: scroll;
    border: 2px solid gray; 
    color: white;
    font-size: 40px;
    justify-content: center;
`
export const RightBoxAppWindow = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    flex-direction: column;

`
export const PanelAppWindow = styled.div`
    background-color: #4E4949;
    flex-direction: column;
    display: flex;
    width: 90%;
    height: 85%;
    margin: 5%;
    border-left: 2px solid #404040;
    border-top: 2px solid #404040;
    border-right: 2px solid gray;
    border-bottom: 2px solid gray;
`
export const FooterAppWindow = styled.div`   
    background-color: #4E4949;
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: center;
    align-items: center;
`
export const UserTextAppWindow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 96%;
    height: 71%;
    margin: 2%;
`
export const ButtonAppWindow = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    width: 96%;
    height: 21%;
    margin: 2%;
`






export const StyledTopic = styled.h1 `
    color: white;
    font-size: 40px;
`;

export const StyledFooter = styled.h1 `
    color: white;
    font-size: 40px;
`;

export const FooterLink = styled.a`
    color: white;
    text-decoration: none;

`;

export const StyledAddButton = styled.button `
    border: 4px solid green;
    font-size: 35px;
    cursor: pointer;
    &:active{
        background-color: #cccccc;
        border: 4px solid #004400;
    }
`;

export const TextBox = styled.textarea`
    resize: none;
    height: 40%;
    width: 75%;
    font-size: 40px;
    margin: 2%;
`

export const Header = styled.div`
    color: red;
    font-size: 60px;
    margin: 10px;
    border-bottom: 2px dotted white;
    padding: 10px;
`

export const ListContent = styled.div`
    border: 4px solid white;
    width: 90%;
`

export const StyledUl = styled.ul`
    width: 100%;
    list-style-type: none;
`

export const DescDiv = styled.div`
    margin: 20px;
    color: white
    font-size: 20px;
    
`

export const ButtonPanel = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const DeleteButton = styled.button`
    margin: 10px;
    display: flex;
    border: 4px solid red;
    font-size: 20px;
    cursor: pointer;
    &:active{
        background-color: #cccccc;
        border: 4px solid red;
    }
`
export const TopicWarning = styled.text`
    display: flex;
    color: #FF0000;  
`
export const DescWarning = styled.text`
    display: flex;
    color: #FF0000;  
`
