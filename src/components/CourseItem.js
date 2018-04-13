import React, { Component } from 'react'
import {
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles/CourseItem.styles'

class CourseItem extends Component {
  render() {
    const {
      id,
      title,
      imgSrc,
      onPress,
    } = this.props
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => onPress(id)} underlayColor='white'>
          <Image
            style={styles.icon}
            source={imgSrc} />
        </TouchableHighlight>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    )
  }
}

CourseItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default CourseItem
