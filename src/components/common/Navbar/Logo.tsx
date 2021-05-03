import React, { Component } from 'react';
//import { Image } from '@chakra-ui/react';
import Image from 'next/image';

export default class Logo extends Component {
    render() {
        return (
            <Image 
                src="/img/Creative_logo.png"
                alt="Creative Logo"
                width={50}
                height={40} 
            />
        )
    }
}
