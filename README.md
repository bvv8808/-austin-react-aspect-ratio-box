# @hyeonwoo/react-aspect-ratio-box

> 본 README 파일에서는 한국어와 영어 두 가지로 모두 설명합니다.
> (English) This README file give you either Korean and English description. If you can't read Korean, plz scroll down to English section.

## 원하는 비율의 박스를 제공하는 컴포넌트입니다.

### 설치

```shell
npm i @hyeonwoo/react-aspect-ratio-box
```

### 사용 방법 및 유의 사항

- ratio라는 props에 원하는 비율을 아래 예시 코드와 같은 형식의 문자열로 넣어주세요. 형식이 잘못되거나 prop를 넣지 않을 경우, 에러 메시지가 콘솔에 표시되며 자동으로 1:1 비율이 됩니다.

```javascript
<AspectRatioBox ratio="16:9">...</AspectRatioBox>
```

- div 태그에 넣을 수 있는 모든 props를 그대로 적용할 수 있습니다. (onClick, style, className 등)

- 기본적으로 부모 노드의 100% width를 가지며, 계산된 비율의 height 값은 해당 컴포넌트에 인라인 스타일로 적용되어 다른 스타일에 영향을 받지 않습니다.

_감사합니다._

<hr />

## It is the component give you a box have the ratio you want.

### Installation

```shell
npm i @hyeonwoo/react-aspect-ratio-box
```

### Usage and Precaution

- Enter the ratio you want to 'ratio' props as the following code, or else there is a console.warn() and the ratio will become 1:1 automatically.

```javascript
<AspectRatioBox ratio="16:9">...</AspectRatioBox>
```

- You can enter the whole props that can be in `<div>` tag. (onClick, style, className, etc.)

- This have the width 100% of the parentNode. Calculated height is inserted in 'inline-style' so it'll be not affected another height value.

_Thank you_
