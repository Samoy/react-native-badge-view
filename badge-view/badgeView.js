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
        badgeSize: 20,
        autoSize: true
    };


    static propTypes = {
        badgePosition: PropTypes.oneOf(['left', 'right']),
        badgeText: PropTypes.string,
        badgeTextColor: PropTypes.string,
        badgeSize: PropTypes.number,
        badgeBackgroundColor: PropTypes.string,
        parentView: PropTypes.element.isRequired,
        autoSize: PropTypes.bool,
        ...View.propTypes
    };


    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        let flag = this.props.autoSize;
        return (
            <View style={{
                alignItems: this.props.badgePosition === 'left' ? 'flex-start' : 'flex-end',
            }}>
                {this.props.badgeText && this.props.badgeText != 0 ?
                    <View style={{
                        backgroundColor: this.props.badgeBackgroundColor,
                        width: !flag ? this.props.badgeSize : null,
                        height: !flag ? this.props.badgeSize : null,
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
                    </View> : <View/>}
                {this.props.parentView}
            </View>
        );
    }

}

const styles = StyleSheet.create({});

export default BadgeView;
