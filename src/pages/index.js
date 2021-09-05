// libraries
import React, { useEffect, useState } from "react"
import axios from "axios"

// components
import Layout from "../components/layout"
import Seo from "../components/seo"
import ShowList from "../components/ShowList"
import ListForm from "../components/ListForm"

export default function IndexPage() {
  const [list, setList] = useState([])

  const loadList = async () => {
    try {
      const res = await axios.get(`/.netlify/functions/getLinks`)
      const fetchedList = res.data
      setList(fetchedList)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadList()
  }, [])

  return (
    <Layout>
      <Seo title="Home" />
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1>Todo App - Gatsby Netlify FaunaDB</h1>

            <ListForm refreshList={loadList} />
            <ShowList list={list} refreshList={loadList} />
          </div>
        </div>
      </section>
    </Layout>
  )
}
