import styles from './Checkbox.module.scss'

const CheckBox = ({ checked, disabled }) => (
  <input
    type="checkbox"
    className={styles.myCheckbox}
    checked={checked}
    disabled={disabled}
  />
)

export default CheckBox;