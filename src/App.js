import { Container } from 'react-bootstrap';
import './App.css';
// import WeatherCard from './Components/WeatherCard';
import CitySelector from './Components/CitySelector';
import UseFetch from './hooks/UseFetch'
import {API_KEY, API_BASE_URL} from './apis/config';
import WeatherList from './Components/WeatherList';

const App = () => {
  //destructure the return values from the API call
  const { data, error, isLoading, setUrl } = UseFetch();

  const getContent =() => {
    if(error) 
        return 
          <h2>
              Error when fetching: {error}
          </h2>
    if(!data && isLoading)
        return 
          <h2>
            Loading...
          </h2>
    if(!data) return null;
    // return 
      // <WeatherList />
      <WeatherList weathers={data.list}/>

  }
  

  return (
      <Container className='App'>
          
          <h1 className='API_title'>What's the Weather Today?</h1>
            <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&units=imperial&appid=${API_KEY}`)} />
            {getContent()}
            
            {data && <WeatherList weathers={data.list}/>}
            {/* <WeatherCard 
              dt = {1602104400 *1000}
              temp_min = '22.67'
              temp_max = '24.39'
              main = 'Clear'
              icon = '01d'
              /> */}
              
      </Container>
    
  );
}
export default App;
