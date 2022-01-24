import CardContainer from "./CardContainer";
import React, { useState } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Card } from 'react-native-paper';

export default function List( {records} ) {
    return records.map((item) => {
        return (
            <View>
                <View>
                </View>
                <View key={item.key} style={{margin: 10}}>
                <Card>
                       <CardContainer data={item}/>
                    </Card>
               
                </View>
            </View>

        );
    });
}
