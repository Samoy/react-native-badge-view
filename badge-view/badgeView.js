/**
 * Created by Samoy on 2017/4/21.
 */
import React, {Component, PropTypes} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

class BadgeView extends Component {


    static defaultProps = {
        badgePosition: 'right',
        badgeTextColor: 'white',
        badgeBackgroundColor: 'red',
        badgeSize: 20
    };


    static propTypes = {
        badgePosition: PropTypes.oneOf(['left', 'right']),
        badgeText: PropTypes.string,
        badgeTextColor: PropTypes.string,
        badgeSize: PropTypes.number,
        badgeBackgroundColor: PropTypes.string,
        parentView: PropTypes.element.isRequired,
        ...View.propTypes
    };


    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <View style={{
                alignItems: this.props.badgePosition === 'left' ? 'flex-start' : 'flex-end',
            }}>
                {this.props.badgeText && this.props.badgeText != 0 ?
                    <View style={{
                        backgroundColor: this.props.badgeBackgroundColor,
                        width: this.props.badgeSize,
                        height: this.props.badgeSize,
                        borderRadius: this.props.badgeSize / 2,
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
                            fontSize: this.props.badgeSize * 0.6,
                            fontWeight: 'bold',
                        }} numberOfLines={1}>
                            {this.props.badgeText}
                        </Text>
                    </View> : <View/>}
                {this.props.parentView}
            </View>
        );
    }

}

const styles = StyleSheet.create({});

export default BadgeView;
