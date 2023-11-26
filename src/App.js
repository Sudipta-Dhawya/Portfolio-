
import { Container, Grid } from '@mui/material';
import './App.css';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Portfolio from './pages/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';
import Resume from './pages/Resume/Resume';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
      <Container >
        <h1>  Here is a resume clone.</h1>
        <Grid container>

    <Grid item xs={12} sm={12} md={4} lg={3} style={{backgroundColor:'blue'}} >
      <Profile/>
    </Grid>
    <Grid item xs style={{backgroundColor:'red'}}>
      <Header/>
      <Router>
        <Routes>
        
        <Route path="/Portfolio" element={<Portfolio/>} />
    
      
      <Route path="/" element={<Resume/>} />
    
     
      </Routes>
      </Router>
      <Footer/>
    </Grid>
    </Grid>
    </Container>
  
  );
}

export default App;
