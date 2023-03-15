import './index.css'

const TabList = props => {
  const {nCategory, onDemandList} = props
  const {tabId, displayText} = nCategory

  const onDemand = () => {
    onDemandList(tabId)
  }
  return (
    <li>
      <button className="displayText" type="button" onClick={onDemand}>
        {displayText}
      </button>
    </li>
  )
}

export default TabList
