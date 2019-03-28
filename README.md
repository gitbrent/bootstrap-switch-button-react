[![MIT License](https://img.shields.io/github/license/gitbrent/bootstrap-switch-button-react.svg)](https://github.com/gitbrent/bootstrap-switch-button-react/blob/master/LICENSE)

# Bootstrap Switch Button for React

Checkbox replacement using stylish bootstrap-4 switch button.

Lightweight, pure JavaScript, no dependencies.

## Installation
```bash
npm i bootstrap-switch-button-react --savedev
```

## Demo
```typescript
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

<BootstrapSwitchButton
	checked={false}
	onlabel='Admin User'
	offlabel='Normal User'
	onChange={(checked: boolean) => {
		this.setState({ isUserAdmin: checked })
	}}
/>
```

![Demo](https://github.com/gitbrent/bootstrap-switch-button-react/blob/master/img/demo.gif?raw=true)

## Options

Name      |Type       |Default    |Description                 |
----------|-----------|----------|----------------------------|
`on`      |string/html|"On"      |Text of the on toggle
`off`     |string/html|"Off"     |Text of the off toggle
`size`    |string     |"normal"  |Size of the toggle. Possible values are: `large`, `normal`, `small`, `mini`.
`onstyle` |string     |"primary" |Style of the on toggle. Possible values are: `primary`,`secondary`,`success`,`danger`,`warning`,`info`,`light`,`dark`
`offstyle`|string     |"light"   |Style of the off toggle. Possible values are: `primary`,`secondary`,`success`,`danger`,`warning`,`info`,`light`,`dark`
`style`   |string     |           |Appends the value to the class attribute of the toggle. This can be used to apply custom styles. Refer to Custom Styles for reference.
`width`   |integer    |*null*     |Sets the width of the toggle. if set to *null*, width will be auto-calculated.
`height`  |integer    |*null*     |Sets the height of the toggle. if set to *null*, height will be auto-calculated.

## Methods

Method     |Description
-----------|------------------------------------------
on         |Sets the toggle to 'On' state
off        |Sets the toggle to 'Off' state
toggle     |Toggles the state of the toggle on/off
enable     |Enables the toggle
disable    |Disables the toggle
