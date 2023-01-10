import {LangList, Button} from './styledComponents'

const GreetingTabs = props => {
  const {langList, onClickLanguageChange, isActive} = props
  const {id, buttonText} = langList
  // const active = {isActive}
  const onClickLangButton = () => {
    onClickLanguageChange(id)
  }
  return (
    <LangList>
      <Button active={isActive} onClick={onClickLangButton}>
        {buttonText}
      </Button>
    </LangList>
  )
}
export default GreetingTabs
