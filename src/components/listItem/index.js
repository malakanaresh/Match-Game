import './index.css'

const ListItem = props => {
  const {imgeDetails, onImgChange} = props
  const {id, imageUrl, thumbnailUrl, category} = imgeDetails

  const changeImg = () => {
    onImgChange(id)
  }
  return (
    <li>
      <button type="button">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="image"
          onClick={changeImg}
        />
      </button>
    </li>
  )
}

export default ListItem
