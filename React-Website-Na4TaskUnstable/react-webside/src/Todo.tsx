import './App.css';
import TaskList from './Components/TaskList'
import React, { useState } from 'react';

import {StyledTopic} from './Config/AppStyled'
import {StyledFooter} from './Config/AppStyled'
import {StyledAddButton} from './Config/AppStyled'
import {TextBox} from './Config/AppStyled'
import {FooterLink} from './Config/AppStyled'
import {TopicWarning} from './Config/AppStyled'
import {DescWarning} from './Config/AppStyled'


import {MainDivAppWindow} from './Config/AppStyled';
import {LeftBoxAppWindow} from './Config/AppStyled';
import {TopicAppWindow} from './Config/AppStyled';
import {TaskListAppWindow} from './Config/AppStyled';
import {RightBoxAppWindow} from './Config/AppStyled';
import {PanelAppWindow} from './Config/AppStyled';
import {FooterAppWindow} from './Config/AppStyled';
import {UserTextAppWindow} from './Config/AppStyled';
import {ButtonAppWindow} from './Config/AppStyled';

export interface ListProps 
{
  topicValue : string;
  descryptionValue : string;
}


function App() {
  
  const [topicWasUsed, setTopicWasUsed] = useState(false);
  const [descWasUsed, setDescWasUsed] = useState(false);

  const [textboxValue, setTextboxValue] = useState("");
  const [textboxDescValue, setTextboxDescValue] = useState("");
  const [listOfAllElements, setListOfAllElements] = useState<ListProps [] >([]);

  //PODPOWIEDZI DO ZADANIA Z WYSZUKIWANIEM
  //state -> elements to show
  //state -> valiue of search field
  //listy mają wbudowaną funkcję find -> poczytaj sobie
  //w useEffekcie dajesz logikę odpowiedzialną za ustawienie wartości do listOfAllElements

  //PODPOWIEDZI DO ZADANIA Z ZMIANĄ KOLEJNOŚCI TASKÓW:
  // Kolejność w tablicy w reakcie i JS nie jest gwarantem kolejności
  // ZALECANY dodatkowy props z informacją o pozycji, który będzie wymuszany i który będzie zmieniany przy pomocy strzałek
  //  Klikam przycisk -> do zmiennej przypisuję wynik mapowania tablicy (listy mają wbudowaną funkcję map) -> zapisujesz do state'a z wszystkimi elementami

  //EXAMPLE OF MAPING
  // interface MyType {
  //   value: string;
  //   id: number;
  // }

  // const exampletTab = [{value: "dawid", id: 1}, {value: "radek", id: 2}, {value: "kamil", id: 3}];
  // const aaa = exampletTab.map((value: MyType, index: number)=>{
  //   if(value.id == 3){
  //     return {value: value.value, id: index};
  //   }
  //   else{
  //     return{value: value.value, id: -1};
  //   }
  // });
  // debugger;

  const handleOnClick = () =>
  { 
    if (textboxValue === "" || textboxDescValue === "")
    {
      
    }
    else
    {
      setListOfAllElements([...listOfAllElements, {topicValue : textboxValue, descryptionValue : textboxDescValue} ]);
      setTextboxValue("");
      setTextboxDescValue("");
    }

  }

  const handleTopicWarning = (textboxValue : string) =>
  {
    if (textboxValue === "" && topicWasUsed === true)
    {
      return <TopicWarning> *Task field can't be empty </TopicWarning>
    }   
    else 
    {
     return <TopicWarning>  </TopicWarning>
    }
  }


  const handleDescWarning = (textboxDescValue : string) =>
  {
    if (textboxDescValue === "" && descWasUsed === true)
    {
      return <DescWarning> *Descryption field can't be empty </DescWarning>
    }   
    else 
    {
     return <DescWarning>  </DescWarning>
    }
  }



  return (
    <>
      <MainDivAppWindow>

        <LeftBoxAppWindow>

          <TopicAppWindow>

            <StyledTopic> List To-do </StyledTopic>
        
          </TopicAppWindow>

          <TaskListAppWindow>
            {/* {TaskList({elementsList : listOfAllElements})} */}
            <TaskList elementsList = {listOfAllElements} onDelete = {setListOfAllElements}/>
      
          </TaskListAppWindow>
          

        </LeftBoxAppWindow>




        <RightBoxAppWindow>

          <PanelAppWindow>

            <UserTextAppWindow>

              <TextBox value={textboxValue} onChange={(event)=>{setTextboxValue(event.target.value); {setTopicWasUsed(true)}}} placeholder="Type your task"/> 
                 {handleTopicWarning(textboxValue)}
              <TextBox value={textboxDescValue} onChange={(event)=>{setTextboxDescValue(event.target.value); setDescWasUsed(true)}} placeholder="Type descryption of task"/>
                 {handleDescWarning(textboxDescValue)} 
                

            </UserTextAppWindow>

            <ButtonAppWindow>

              <StyledAddButton onClick = {handleOnClick}> Add task </StyledAddButton>
              
            </ButtonAppWindow>

          </PanelAppWindow>

          <FooterAppWindow>
            <StyledFooter> 

              <FooterLink href="https://github.com/TheDawidow20094" target="_blank"> React App By Dawid </FooterLink>
            
            </StyledFooter>

          </FooterAppWindow>
          

        </RightBoxAppWindow>
      </MainDivAppWindow>
    </>
  );
}

export default App;
