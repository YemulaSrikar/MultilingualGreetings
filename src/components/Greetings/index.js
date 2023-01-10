import {Component} from 'react'
import GreetingTabs from '../GreetingTabs'
import {LangCont, Heading, UnorderList, Image} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {
    activeTabId: languageGreetingsList[0].id,
  }

  onClickLanguageChange = id => {
    this.setState({activeTabId: id})
  }

  renderSelectedImage = () => {
    const {activeTabId} = this.state
    const {imageUrl, imageAltText} = languageGreetingsList[
      languageGreetingsList.findIndex(each => each.id === activeTabId)
    ]
    return <Image src={imageUrl} alt={imageAltText} />
  }

  render() {
    const {activeTabId} = this.state
    return (
      <LangCont>
        <Heading>Multilingual Greetings</Heading>
        <UnorderList>
          {languageGreetingsList.map(langList => (
            <GreetingTabs
              langList={langList}
              key={langList.id}
              isActive={langList.id === activeTabId}
              onClickLanguageChange={this.onClickLanguageChange}
            />
          ))}
        </UnorderList>
        {this.renderSelectedImage()}
      </LangCont>
    )
  }
}

export default Greetings
