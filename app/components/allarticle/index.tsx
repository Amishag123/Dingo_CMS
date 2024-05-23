import React from 'react'
import styles from "./index.module.css"
import Header from '../commonHeader'
import AddNewArticle from '../addNewArticle'
import FilterArticle from '../filterArticle'

const AllArticleComponent = () => {
  return (
    <>
      <Header />
      <div className={styles.articleComponentContainer}>
        <AddNewArticle />
        <FilterArticle />
      </div>
    </>
  )
}

export default AllArticleComponent