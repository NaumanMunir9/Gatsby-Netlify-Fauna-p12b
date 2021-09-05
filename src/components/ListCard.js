// libraries
import React from "react"
import axios from "axios"

export default function ListCard({ listItem, refreshList }) {
  const archiveList = async () => {
    listItem.archived = true

    try {
      await axios({
        method: "PUT",
        url: `/.netlify/functions/updateLink`,
        data: listItem,
      })
      refreshList()
    } catch (error) {
      console.error(`Error has occurred: ${error}`)
    }
  }

  const deleteList = async () => {
    const id = listItem._id

    try {
      await axios({
        method: "DELETE",
        url: `/.netlify/functions/deleteLink`,
        data: { id },
      })
      refreshList()
    } catch (error) {
      console.error("Error: ", error)
    }
  }

  return (
    <div className="card my-3">
      <div className="card-header">
        <h5>
          Title: <em>{listItem.name}</em>
        </h5>
      </div>

      <div className="card-body">
        <div className="mb-2">
          URL: <a href={listItem.url}>{listItem.url}</a>
        </div>
        <h6>Description: {listItem.description}</h6>
      </div>

      <div className="card-footer">
        <button className="btn btn-warning me-2" onClick={archiveList}>
          Archive
        </button>
        <button className="btn btn-danger" onClick={deleteList}>
          Delete
        </button>
      </div>
    </div>
  )
}
