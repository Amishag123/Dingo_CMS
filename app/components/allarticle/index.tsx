import React from 'react'
import styles from "./index.module.css"
import Header from '../commonHeader'
import AddNewArticle from '../addNewArticle'
import FilterArticle from '../filterArticle'
import SideBar from '../sidebarMenu'

const AllArticleComponent = () => {
  return (
    <>
      <Header />
      <div className={styles.articleComponentContainer}>
        <SideBar />
        <AddNewArticle />
        <FilterArticle />
      </div>
    </>
  )
}

export default AllArticleComponent