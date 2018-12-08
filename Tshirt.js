import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class Tshirt extends Component {
    render(){
        return (
            <View style={{backgroundColor: this.props.color}}>
                <Text>
                    Tshirt with color {this.props.color}
                    with size {this.props.size}
                </Text>
                {this.props.children}
            </View>
        )
    }
}