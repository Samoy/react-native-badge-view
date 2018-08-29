/**
 * Created by Samoy on 2017/4/21.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import PropTypes from 'prop-types';

class BadgeView extends Component {


    static defaultProps = {
        badgePosition: 'right',
        badgeTextColor: 'white',
        badgeBackgroundColor: 'red',
        badgeSize: 20,
        autoSize: true,
        badgeImageWidth: 20,
        badgeImageHeight: 20
    };


    static propTypes = {
        badgePosition: PropTypes.oneOf(['left', 'right']),
        badgeText: PropTypes.string,
        badgeTextColor: PropTypes.string,
        badgeSize: PropTypes.number,
        badgeBackgroundColor: PropTypes.string,
        parentView: PropTypes.element.isRequired,
        autoSize: PropTypes.bool,
        badgeImageWidth: PropTypes.number,
        badgeImageHeight: PropTypes.number,
        badgeImageSource: PropTypes.oneOfType([
            PropTypes.shape({
                uri: PropTypes.string,
                headers: PropTypes.objectOf(PropTypes.string),
            }),
            PropTypes.number,
            PropTypes.arrayOf(
                PropTypes.shape({
                    uri: PropTypes.string,
                    width: PropTypes.number,
                    height: PropTypes.number,
                }))
        ]),
        ...View.propTypes
    };


    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        let flag = this.props.autoSize;
        let badgeText = this.props.badgeText && this.props.badgeText != 0 ?
            <View style={{
                backgroundColor: this.props.badgeBackgroundColor,
                width: !flag ? this.props.badgeSize : null,
                height: !flag ? this.props.badgeSize : null,
                minWidth: flag ? 20 : null,
                maxHeight: flag ? 20 : null,
                borderRadius: !flag ? this.props.badgeSize / 2 : 13,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: -this.props.badgeSize / 2,
                marginLeft: this.props.badgePosition === 'left' ? -this.props.badgeSize / 2 : 0,
                marginRight: this.props.badgePosition === 'right' ? -this.props.badgeSize / 2 : 0,
                zIndex: 1
            }}>
                <Text style={{
                    color: this.props.badgeTextColor,
                    textAlign: 'center',
                    fontSize: flag ? 14 : this.props.badgeSize * 0.4,
                    fontWeight: 'bold',
                    margin: flag ? 3 : null
                }} numberOfLines={1}>
                    {this.props.badgeText}
                </Text>
            </View> : <View/>;
        let badgeImage = <View/>;
        if (!this.props.badgeText && this.props.badgeImageSource) {
            badgeImage = <Image source={this.props.badgeImageSource}
                                style={{
                                    resizeMode: 'stretch',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: -this.props.badgeSize / 2,
                                    marginLeft: this.props.badgePosition === 'left' ? -this.props.badgeSize / 2 : 0,
                                    marginRight: this.props.badgePosition === 'right' ? -this.props.badgeSize / 2 : 0,
                                    zIndex: 1,
                                    width: this.props.badgeImageWidth,
                                    height: this.props.badgeImageHeight
                                }}/>
        }
        return (
            <View style={{
                alignItems: this.props.badgePosition === 'left' ? 'flex-start' : 'flex-end',
            }}>
                {badgeText}
                {badgeImage}
                {this.props.parentView}
            </View>
        );
    }

}

const styles = StyleSheet.create({});

export default BadgeView;
