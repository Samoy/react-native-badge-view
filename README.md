RNBadgeView

###Installation
>
`npm i react-native-badge-view`

###Base Use
>
```
<BadgeView parentView={<View style={{width: 40, height: 40, backgroundColor: 'blue'}}/>} 
           badgeText={"12"}/>
```

###Prop
Prop|Type|Required|Default|Comment
|:----:|:---:|:---:|:---:|:----:|
badgePosition|string|optional|right|The position of badge, one of *right* or *left*
badgeText|string|optional|--|The text of badge, if the text is a empty string or equal to *0*, the badge will be invisible.
badgeTextColor|string|optional|white|The text color of badge, default is *white*.
badgeSize|number|optional|20|The size of badge,default is *20*.
badgeBackgroundColor|string|optional|red|The background color of badge, default is *red*.
parentView|element|required|--|The parent view of badge, it is required.

##ScreenShot
![截图](file:///Users/Samoy/Desktop/Simulator%20Screen%20Shot%202017%E5%B9%B44%E6%9C%8821%E6%97%A5%2010.54.06.png)