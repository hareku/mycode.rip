import moment from 'moment'
import 'moment/locale/ja'

export default () => {
  moment.locale('ja')

  return moment()
}
