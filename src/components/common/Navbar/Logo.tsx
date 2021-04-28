import React, { Component } from 'react';
import { Image } from '@chakra-ui/react';

export default class Logo extends Component {
    render() {
        return (
            <Image 
                src="/Creative_logo.png" 
                align="center"
                boxSize="40px"
                objectFit="cover"
                alt="Creative Logo"
                w="full" 
            />
        )
    }
}
