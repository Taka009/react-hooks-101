import React from 'react'

const Event = ({dispatch, event}) => {
  const handleClickDeleteButton = () => {
    const result = window.confirm(`本当にこのイベント(id:${event.id})を削除しますか`)
    if (result) dispatch({ type: 'DELETE_EVENT', id: event.id})
  }
  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button type='button' className='btn btn-danger' onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
  )
}

export default Event 
