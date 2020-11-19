/* eslint-disable */
import React, {useEffect, useState} from 'react';
import { Container } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '../../../components/Appbar';
import NavBar from '../../../components/Navbar';
import Card from '../../../components/Card';
import { useStyles } from './styles';
import api from '../../../services/api.js'


const MyTournament = () => {
  const styles = useStyles();
  const [created_tournaments_list, setCreatedTournamentsList] = useState([])
  const [participation_tournaments_list, setParticipationTournamentsList] = useState([])
  const [value, setValue] = useState(0);
  

  useEffect(()=>{
    async function getTournamnets(){
      const response = await api.get('/tournament')
      console.log(response.data)
      if(response.status == 200){
        setCreatedTournamentsList(response.data.tournament)
      }

      const response2 = await api.get('/user/tournaments');
      if(response2.status == 200){
        console.log(response2.data)
        setParticipationTournamentsList(response2.data.solicitation)
      }
      
    }
    getTournamnets();
  },[]);

    
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  function handlerCard(id){
    console.log('O link foi clicado.',id);
    console.log(participation_tournaments_list)
  }

  return (
    <Container maxWidth="md" className={styles.styleDiv}>
      <AppBar />
      <Tabs
        indicatorColor="secondary"
        variant="scrollable"
        scrollButtons="auto"
        value={value}
        onChange={handleChange}
        className={styles.tabs}
      >
        <Tab label="Criados" value={0} {...a11yProps(0)}/>
        <Tab label="Inscritos" value={1} {...a11yProps(1)}/>
      </Tabs>
      <div>
        { value == 1 ? 
          participation_tournaments_list.map(tournament =>(
            <div key={tournament.tournaments.id} onClick={()=>handlerCard(tournament.tournaments.id)}>
                <Card  
                  nome={tournament.tournaments.name} 
                  local={tournament.tournaments.endereco} 
                  data={tournament.tournaments.start_date} 
                />
            </div>)
            ) 
            :
            created_tournaments_list.map(tournament =>(
              <div key={tournament.id} onClick={()=>handlerCard(tournament.id)}>
                <Card  
                  nome={tournament.name} 
                  local={tournament.endereco} 
                  data={tournament.start_date} 
                />
              </div>)
            )
        }
      </div>
      <div>
        <NavBar />
      </div>
    </Container>
  );
};

export default MyTournament;
