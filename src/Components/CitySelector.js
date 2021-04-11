import React, { useState,useEffect }from 'react';
import {Container, Row, Col, FormControl, Button} from 'react-bootstrap';
// import {API_KEY, API_BASE_URL} from '../apis/config'

export default function CitySelector({onSearch}) {
    const [city, setCity] = useState('')
    // const [results, setResults] = useState(null)

    // const onKeyDown = (e) => {
    //     if (e.keyCode === 13) {
    //         onSearch();
    //     }

    // }
    // const onSearch = () => {
    //     fetch(`${ API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
    //     .then((response) => response.json())
    //     .then((result) => console.log(result));
    // }



    return (
        <Container>
            
                <Row>
                    <Col>
                    <h1>Search Your City</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} className="text-center">
                        <FormControl 
                            placeholder="Enter City"
                            onChange={(e) => setCity(e.target.value) }
                            value= {city}
                            // onKeyDown={onKeyDown}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={() => onSearch(city)}>Check Weather
                        
                        </Button>
                    </Col>
                </Row>
            
        </Container>
    )

}
