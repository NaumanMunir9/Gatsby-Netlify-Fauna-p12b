// libraries
import React, { useState } from "react"
import axios from "axios"

export default function ListForm({ refreshList }) {
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")
  const [description, setDescription] = useState("")

  const resetForm = () => {
    setName("")
    setUrl("")
    setDescription("")
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const body = { name, url, description }

    try {
      const res = await axios({
        method: "POST",
        url: "/.netlify/functions/createLink",
        data: body,
      })
      const data = await res.data
      console.log(data)

      resetForm()
      refreshList()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="card">
      <div className="card-header">
        <h4>Add Todo</h4>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="url">URL</label>
            <input
              type="text"
              name="url"
              className="form-control"
              value={url}
              onChange={e => setUrl(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              className="form-control"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
