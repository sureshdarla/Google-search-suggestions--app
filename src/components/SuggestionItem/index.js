import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, updateSearchInput} = props
  const {id, suggestion} = eachSuggestion
  console.log(suggestion)

  const onClickArrow = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-image"
        onClick={onClickArrow}
      />
    </li>
  )
}
export default SuggestionItem
