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

export default class Statistices extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.navbar}>
            <View style={styles.inlineTextIcon}>
              <Text style={[styles.boldText, {marginRight: 10}]}>
                This Month
              </Text>
              <Icon name="chevron-down" size={14} color="#000" />
            </View>
            <View style={styles.inlineTextIcon}>
              <Icon name="cog" size={30} color="#000" />
            </View>
          </View>
          <View style={styles.navbarData}>
            <Text style={styles.dataCouter}>12,9762</Text>
            <Text style={[styles.sdataCouter]}>miles</Text>
          </View>
          <View style={styles.dataViwerCal}>
            <View style={styles.inlineTextIcon}>
              <Icon name="fire" size={25} style={styles.icon} color="#B2B2B2" />
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
          <View style={styles.dataView}>
            <View style={styles.dataCouterView}>
              <View style={[styles.dataCouterViewItem, {height: '20%'}]}></View>
              <View style={[styles.dataCouterViewItem, {height: '50%'}]}></View>
              <View style={[styles.dataCouterViewItem, {height: '10%'}]}></View>
              <View style={[styles.dataCouterViewItem, {height: '60%'}]}></View>
              <View style={[styles.dataCouterViewItem, {height: '30%'}]}></View>
              <View style={[styles.dataCouterViewItem, {height: '50%'}]}></View>
              <View style={[styles.dataCouterViewItem, {height: '40%'}]}></View>
              <View
                style={[
                  styles.dataCouterViewItem,
                  {height: '90%', backgroundColor: 'black'},
                ]}></View>
            </View>
          </View>
          <View style={styles.DatedataView}>
            <View style={styles.dataCouterView}>
              <Text style={styles.dataCouterViewItemText}>M</Text>
              <Text style={styles.dataCouterViewItemText}>T</Text>
              <Text style={styles.dataCouterViewItemText}>W</Text>
              <Text style={styles.dataCouterViewItemText}>T</Text>
              <Text style={styles.dataCouterViewItemText}>F</Text>
              <Text style={styles.dataCouterViewItemText}>S</Text>
              <Text style={styles.dataCouterViewItemText}>S</Text>
              <Text style={[styles.dataCouterViewItemText, {color: '#000'}]}>
                M
              </Text>
            </View>
          </View>
          <View style={styles.hr}></View>
          <View style={styles.dataline}><Text style={styles.datalineHeader} >Mon, 02</Text></View>
          <View style={styles.dataline}>
            <View style={styles.inlineTextIcon}>
              <Text style={styles.boldText}>5.1 mi</Text>
            </View>
            <View style={styles.inlineTextIcon}>
              <Text style={styles.boldText}>4331 cal</Text>
            </View>
            <View style={styles.inlineTextIcon}>
              <Text style={styles.boldText}>42:33 m</Text>
            </View>
          </View>
          <View style={styles.dataline}><Text style={styles.datalineHeader} >Sun, 02</Text></View>
          <View style={styles.dataline}>
            <View style={styles.inlineTextIcon}>
              <Text style={styles.boldText}>7.1 mi</Text>
            </View>
            <View style={styles.inlineTextIcon}>
              <Text style={styles.boldText}>3854 cal</Text>
            </View>
            <View style={styles.inlineTextIcon}>
              <Text style={styles.boldText}>17:34 m</Text>
            </View>
          </View>
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
    paddingBottom: 40,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 34,
  },

  navbarData: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingHorizontal: 34,
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
    height: 260,
  },
  dataCouter: {
    fontWeight: 'bold',
    fontSize: 60,
  },
  sdataCouter: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    marginBottom: 11,
    marginLeft: 10,
  },
  dataCouterView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flex: 1,
    height: '100%',
    marginBottom: 18,
    paddingHorizontal: 34,
  },
  dataCouterViewItem: {
    width: 30,
    borderRadius: 30,
    backgroundColor: '#E5E5E5',
    marginLeft: 8,
  },
  dataCouterViewItemText: {
    width: 30,
    borderRadius: 30,
    marginLeft: 8,
    color: '#A2A2A2',
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginTop: 15,
    fontWeight: 'bold',
  },
  dataCouterFade: {
    color: '#A2A2A2',
    fontSize: 18,
  },
  dataViwerCal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingHorizontal: 34,
  },
  dataline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 34,
  },
  datalineHeader: {
    fontSize: 28,
    color: '#A2A2A2',
    marginTop: 20
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
