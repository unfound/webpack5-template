import _ from 'lodash'

export default function printMe () {
    console.log('This is print.js, lodash version is' + _.join([1,2], 5))
}
// 这里有没有使用函数会导致lodash是否不会打包成两份
// 这是为什么？
printMe()