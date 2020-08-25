import Input from '@/components/Input'
import Button from '@/components/Button'
import styles from './index.less'

export default () => {
  return (
    <div className={styles.view}>
      <Input />
      <br />
      <Input />
      <br />
      <Button>登录</Button>
    </div>
  )
}
