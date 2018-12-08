import React, { Component } from 'react'
// import { View, Text, Button } from 'react-native'
import { Container, Content, Text, List, ListItem, Spinner } from 'native-base'
import axios from 'axios'

const results = []

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home',        
    };

    state = {
        categories: [],
        isLoading: false
    }

    async componentDidMount(){
        //endpoint API backend JSON array of obj
        const apiUrl = 'http://192.168.0.6:3000/api/v1/categories'
        this.setState({isLoading: true})

        //VERSI TANPA ASYNC AWAIT
        // axios.get(apiUrl).then((res)=>{
        //     this.setState({
        //         categories: res.data,
        //         isLoading: false
        //     })
        // })

        //VERSI ASYNC AWAIT
        const res = await axios.get(apiUrl)
        this.setState({
            categories: res.data,
            isLoading: false
        })

        //VERSI BARBAR HARDCODE
        // const categories = [
        //     {
        //         id: 1,
        //         title: "Love/Hate"
        //     },
        //     {
        //         id: 2,
        //         title: "Culture"
        //     },
        // ]
            
        // this.setState({categories})
    }

    render() {
      return (
        <Container>
            <Content>
                {this.state.isLoading? (
                    <Spinner/>
                ):(
                    <List>
                        {this.state.categories.map(category=>(
                            <ListItem key={category.id}>
                                <Text>{category.title}</Text>
                            </ListItem>
                        ))}
                    </List>    
                )}                
            </Content>
        </Container>
      );
    }
  }