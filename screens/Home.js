import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {LineChart} from 'react-native-chart-kit';

export default class Home extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            style={styles.headerCard}
            source={require('./../assets/images/header.jpg')}>
            <Text style={styles.cardHeaderText}>WORKOUT SCHEDUAL</Text>
            <Text style={styles.cardHeaderBigText}>Day 21</Text>
          </ImageBackground>
          <View style={styles.subcontainer}>
            <Text style={styles.latest}>Latest Activity</Text>
            <View style={styles.dataView}>
              <Text style={styles.dataCouter}>12,976</Text>
              <View style={styles.dataCouterView}>
                <View
                  style={[styles.dataCouterViewItem, {height: '20%'}]}></View>
                <View
                  style={[styles.dataCouterViewItem, {height: '50%'}]}></View>
                <View
                  style={[styles.dataCouterViewItem, {height: '10%'}]}></View>
                <View
                  style={[styles.dataCouterViewItem, {height: '60%'}]}></View>
                <View
                  style={[styles.dataCouterViewItem, {height: '30%'}]}></View>
                <View
                  style={[styles.dataCouterViewItem, {height: '50%'}]}></View>
                <View
                  style={[styles.dataCouterViewItem, {height: '90%'}]}></View>
              </View>
            </View>
            <Text style={styles.dataCouterFade}>Total steps</Text>
            <View style={styles.dataViwerCal}>
              <View style={styles.inlineTextIcon}>
                <Icon
                  name="fire"
                  size={25}
                  style={styles.icon}
                  color="#B2B2B2"
                />
                <Text style={styles.boldText}>4,500 cal</Text>
              </View>
              <View style={styles.inlineTextIcon}>
                <Icon
                  name="route"
                  size={25}
                  style={styles.icon}
                  color="#B2B2B2"
                />
                <Text style={styles.boldText}>431 Km</Text>
              </View>
            </View>
            <View style={styles.hr}></View>
            <Text style={styles.latest}>Latest Activity</Text>
          </View>
          <LineChart
            data={{
              labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              datasets: [
                {
                  data: [30, 34, 3, 12, 88, 34, 4],
                },
              ],
            }} // from react-native
            height={200}
            withInnerLines={false}
            withOuterLines={false}
            withVerticalLabels={true}
            withHorizontalLabels={true}
            width={Dimensions.get('window').width}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 4, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              propsForDots: {
                r: '6',
                strokeWidth: '1',
                stroke: '#fff',
              },
            }}
            bezier
            hideLegend={false}
            style={styles.chart}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 20,
  },
  headerCard: {
    height: 260,
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 16,
    marginVertical: 30,
    backgroundColor: 'rgba(0,0,0,0.5)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  headerInnerCard: {
    height: 260,
    position: 'relative',
  },
  cardHeaderText: {
    position: 'absolute',
    fontWeight: 'bold',
    bottom: 80,
    left: 30,
    color: '#fff',
  },
  cardHeaderBigText: {
    position: 'absolute',
    fontWeight: 'bold',
    bottom: 30,
    left: 30,
    color: '#fff',
    fontSize: 40,
  },
  subcontainer: {
    paddingHorizontal: 25,
    paddingTop: 15,
  },
  latest: {
    fontWeight: '400',
    fontSize: 20,
    color: '#000',
  },
  dataView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  dataCouter: {
    fontWeight: 'bold',
    fontSize: 60,
    flex: 1,
  },
  dataCouterView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1,
    height: '100%',
    marginBottom: 18,
  },
  dataCouterViewItem: {
    width: 10,
    borderRadius: 5,
    backgroundColor: '#E5E5E5',
    marginLeft: 8,
  },
  dataCouterFade: {
    color: '#A2A2A2',
    fontSize: 18,
  },
  dataViwerCal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  inlineTextIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  icon: {
    marginRight: 10,
  },
  hr: {
    width: '100%',
    height: 3,
    backgroundColor: '#F6F6F6',
    marginBottom: 20,
  },
  chart: {
    padding: 25,
  },
});
