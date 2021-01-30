/* eslint-disable no-unused-vars */
import { useUser } from '../../utils/UserContext'

const ListItems = (props) => {
  const { user } = useUser()
  const handleRemoveListItem = (event) => {
    console.log(event.target.parentNode.textContent)
  }
  //   const myNodelist = document.getElementsByTagName('li')
  //   let i
  //   for (i = 0; i < myNodelist.length; i++) {
  //     const span = document.createElement('SPAN')
  //     const txt = document.createTextNode('\u00D7')
  //     span.className = 'close'
  //     span.appendChild(txt)
  //     myNodelist[i].appendChild(span)
  //   }
  //   const close = document.getElementsByClassName('close')
  //   for (i = 0; i < close.length; i++) {
  //     close[i].onclick = function () {
  //       const div = this.parentElement
  //       div.style.display = 'none'
  //     }
  //   }
  return (
    <li onClick={(ev) => ev.target.classList.toggle('checked')}>
      {props.item}
      <button
        style={{ float: 'right' }}
        onClick={(event) => handleRemoveListItem(event)}
      >
        X
      </button>
    </li>
  )
}

export default ListItems
